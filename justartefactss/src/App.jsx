import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, BookUser, Sprout, Menu, X, Coins, Gem, Feather, 
  Mail, Lock, UserCircle, Landmark, LayoutDashboard, Wallet, Store, Settings
} from 'lucide-react';

// Import Firebase SDKs
import { initializeApp, setLogLevel } from "firebase/app"; // Moved setLogLevel here
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  signInAnonymously,
  signInWithCustomToken,
  // Removed setLogLevel from here
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc
} from "firebase/firestore";

// Your web app's Firebase configuration (from your image)
// This is used as a fallback if the global config isn't available.
const firebaseConfigFallback = {
  apiKey: "AIzaSyAVSYlXtPwHQKtxFiE-A4kMP_X4u3m6m_M", // Be careful with API keys in public code
  authDomain: "justartefactss.firebaseapp.com",
  projectId: "justartefactss",
  storageBucket: "justartefactss.firebasestorage.app",
  messagingSenderId: "240717554796",
  appId: "1:240717554796:web:133c0f17211fa103566449",
  measurementId: "G-2YLDPSZWFS"
};

// --- Firebase Initialization ---
// Use global config if available, otherwise use fallback
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : firebaseConfigFallback;

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
setLogLevel('Debug'); // Enable debug logging for Firebase

// Main App Component - Manages navigation and auth state
export default function App() {
  const [page, setPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // --- NEW Auth States ---
  const [auth, setAuth] = useState(null);
  const [db, setDb] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false); // To prevent flashes of login page

  // --- NEW: One-time Firebase Init Effect ---
  useEffect(() => {
    const authInstance = getAuth(app);
    const dbInstance = getFirestore(app);
    setAuth(authInstance);
    setDb(dbInstance);

    // Sign in using the provided token or anonymously
    const signIn = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(authInstance, __initial_auth_token);
        } else {
          await signInAnonymously(authInstance);
        }
      } catch (error) {
        console.error("Error signing in:", error);
      }
    };
    signIn();

    // --- NEW: Auth State Listener ---
    // This runs when the component mounts and listens for auth changes
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true);
        setUserId(user.uid);
        if (page === 'login') { // If they were on login page, send to dashboard
          navigateTo('dashboard');
        }
      } else {
        // User is signed out
        setIsAuthenticated(false);
        setUserId(null);
      }
      setIsAuthReady(true); // Firebase has checked auth status
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [page]); // Re-run effect if page changes (to handle redirect from login)

  const navigateTo = (pageName) => {
    setPage(pageName);
    setIsMobileMenuOpen(false);
  };

  // --- UPDATED: Logout Handler ---
  const handleLogout = async () => {
    if (auth) {
      try {
        await signOut(auth);
        navigateTo('home'); // Navigate to home after logout
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }
  };

  const renderPage = () => {
    // Wait until Firebase auth is ready before rendering
    if (!isAuthReady) {
      return (
        <div className="flex justify-center items-center h-[calc(100vh-80px)]">
          <p className="text-2xl font-serif">Loading...</p>
        </div>
      );
    }

    switch (page) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'categories':
        return <CategoriesPage />;
      case 'artisan-hub':
        return <ArtisanHubPage />;
      case 'collectors':
        return <CollectorsPage />;
      case 'login':
        // If already logged in, go to dashboard, else show login page
        return !isAuthenticated ? (
          <LoginPage navigateTo={navigateTo} auth={auth} db={db} appId={appId} />
        ) : (
          <DashboardPage navigateTo={navigateTo} userId={userId} appId={appId} />
        );
      case 'dashboard':
        // If logged in, show dashboard, else force login
        return isAuthenticated ? (
          <DashboardPage navigateTo={navigateTo} userId={userId} appId={appId} />
        ) : (
          <LoginPage navigateTo={navigateTo} auth={auth} db={db} appId={appId} />
        );
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar 
        navigateTo={navigateTo} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isAuthenticated={isAuthenticated} // Pass auth state
        handleLogout={handleLogout} // Pass logout handler
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// 1. Navbar Component
// ... (No changes, existing code)
function Navbar({ navigateTo, isMobileMenuOpen, setIsMobileMenuOpen, isAuthenticated, handleLogout }) {
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Categories', page: 'categories' },
    { name: 'Artisan Hub', page: 'artisan-hub' },
    { name: 'Collectors', page: 'collectors' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => navigateTo('home')} className="flex items-center text-3xl font-bold text-orange-700 focus:outline-none">
              <Landmark className="h-8 w-8 mr-2" />
              Just Artefacts
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.page)}
                className="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-lg font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </button>
            ))}
            
            {/* NEW: Conditional Auth Buttons */}
            {isAuthenticated ? (
              <>
                <button 
                  onClick={() => navigateTo('dashboard')}
                  className="bg-orange-100 text-orange-700 px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-200 transition duration-150 ease-in-out shadow-sm"
                >
                  Dashboard
                </button>
                <button 
                  onClick={handleLogout}
                  className="bg-orange-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button 
                onClick={() => navigateTo('login')}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.page)}
                className="text-gray-600 hover:text-orange-600 hover:bg-orange-50 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </button>
            ))}
            
            {/* NEW: Conditional Auth Buttons (Mobile) */}
            {isAuthenticated ? (
              <>
                <button 
                  onClick={() => navigateTo('dashboard')}
                  className="bg-orange-100 text-orange-700 w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-orange-200 transition duration-150 ease-in-out shadow-sm"
                >
                  Dashboard
                </button>
                <button 
                  onClick={handleLogout}
                  className="bg-orange-500 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button 
                onClick={() => navigateTo('login')}
                className="bg-orange-500 text-white w-full text-left mt-2 px-4 py-2 rounded-lg text-base font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}


// 2. Home Page Component
// ... (No changes, existing code)
function HomePage({ navigateTo }) {
  return (
    <>
      <HeroSection navigateTo={navigateTo} />
      <OurVisionBar />
      <FeaturesSection />
      <CategoriesSection />
    </>
  );
}

// 3. Hero Section (for Home Page)
// ... (No changes, existing code)
function HeroSection({ navigateTo }) {
  return (
    <section className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
      {/* Left Column: Text Content */}
      <div className="w-full md:w-1/2 bg-orange-50 flex items-center justify-center">
        <div className="max-w-2xl py-24 px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Preserving Heritage.
            <span className="block text-orange-500">Empowering Artisans.</span>
          </h2>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            Just Artefacts is a secure, transparent, and culturally sensitive
            marketplace integrating numismatic collectors and traditional
            artisans. Discover vintage coins, pottery, and unique craft pieces
            while supporting cultural preservation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigateTo('categories')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-lg transform hover:-translate-y-0.5"
            >
              Explore Collections
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="bg-orange-100 text-orange-700 border border-orange-200 px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-200 transition duration-150 ease-in-out shadow-lg transform hover:-translate-y-0.5"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Column: Image/Text */}
      <div className="w-full md:w-1/2 bg-orange-200 flex items-center justify-center min-h-[300px] md:min-h-0">
         <h2 className="font-serif text-5xl font-bold text-white opacity-90">
            Handcrafted Pottery
         </h2>
      </div>
    </section>
  );
}

// 4. Our Vision Bar
// ... (No changes, existing code)
function OurVisionBar() {
  return (
    <div className="bg-white py-6 shadow-sm">
      <h3 className="text-center text-sm font-semibold text-orange-700 tracking-widest uppercase">
        Our Vision
      </h3>
    </div>
  );
}


// 5. Features Section (for Home Page)
// ... (No changes, existing code)
function FeaturesSection() {
  const features = [
    {
      name: 'Ensure Authenticity',
      description: 'Providing a secure and transparent environment for trading collectibles.',
      icon: ShieldCheck,
      color: 'text-orange-600'
    },
    {
      name: 'Cultural Preservation',
      description: 'Contributing to the preservation of heritage and artisanal livelihoods.',
      icon: BookUser,
      color: 'text-amber-600'
    },
    {
      name: 'Sustainable Economics',
      description: 'Offering sustainable opportunities to artisans, the backbone of India\'s handicraft industry.',
      icon: Sprout,
      color: 'text-orange-400'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-4xl font-extrabold font-serif text-gray-900">
            Beyond Commerce
          </p>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center p-8 bg-orange-50 rounded-lg shadow-lg">
              <div className={`flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900 font-serif">{feature.name}</h3>
              <p className="mt-4 text-lg text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Categories Page / Section
// ... (No changes, existing code)
function CategoriesPage() {
  return (
    <div className="bg-white py-24">
      <CategoriesSection />
    </div>
  );
}

// ... (No changes, existing code)
function CategoriesSection() {
   const categories = [
    { name: 'Vintage Coins', description: 'Rare numismatics from across eras.', icon: Coins },
    { name: 'Currencies & Notes', description: 'Historic banknotes and paper money.', icon: Feather },
    { name: 'Handcrafted Pottery', description: 'Unique pieces from traditional artisans.', icon: Gem },
    { name: 'Other Collectibles', description: 'Explore unique crafts and more.', icon: Sprout },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 font-serif">
          Explore Our Categories
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          From ancient coins to modern handicrafts.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative bg-white border border-orange-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            <img 
              src={`https://placehold.co/300x200/FFF7ED/f97316?text=${category.name.replace(' ', '+')}`} 
              alt={category.name} 
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src=`https://placehold.co/300x200/CCCCCC/FFFFFF?text=Image+Error`;
              }}
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <category.icon className="h-7 w-7 text-orange-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900 font-serif">
                  {category.name}
                </h3>
              </div>
              <p className="text-lg text-gray-700">{category.description}</p>
              <button className="mt-6 text-orange-600 font-semibold text-lg group-hover:text-orange-700 transition duration-150">
                View More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 7. About Us Page
// ... (No changes, existing code)
function AboutPage() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-serif">
            About Just Artefacts
          </h2>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            Just Artefacts is a proposed digital marketplace conceptualized to integrate two
            niche yet culturally significant communities in India: numismatic collectors and
            traditional artisans. With India's centuries-old legacy of handicrafts and coinage,
            these groups represent both the preservation of heritage and the continuity of
            artisanal livelihoods. However, they often remain underrepresented in mainstream
            e-commerce ecosystems.
          </p>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            The vision of Just Artefacts is to create a secure,
            transparent, and culturally sensitive platform where vintage coins, currencies,
            pottery, and unique craft pieces can be traded and appreciated. Beyond commerce,
            the platform seeks to contribute to cultural preservation, ensure authenticity of
            collectibles, and provide sustainable economic opportunities to artisans who form
            the backbone of India's handicraft industry, which employs nearly 200 million
            people and contributes significantly to rural livelihoods (Ministry of Textiles).
          </p>
        </div>
      </div>
    </section>
  );
}

// 8. Footer Component
// ... (No changes, existing code)
function Footer() {
  return (
    <footer className="bg-orange-950 text-orange-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">Coins</a></li>
              <li><a href="#" className="hover:text-white">Currency</a></li>
              <li><a href="#" className="hover:text-white">Pottery</a></li>
              <li><a href="#" className="hover:text-white">Handicrafts</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Sell</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">Become a Seller</a></li>
              <li><a href="#" className="hover:text-white">Seller Hub</a></li>
              <li><a href="#" className="hover:text-white">Authenticity Guide</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white">About</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Vision</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-orange-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Just Artefacts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// 9. --- UPDATED: Login/Signup Page ---
function LoginPage({ navigateTo, auth, db, appId }) {
  const [isLoginView, setIsLoginView] = useState(true);
  
  // --- NEW: Form state ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  // --- NEW: Handle Sign In ---
  const handleSignIn = async () => {
    if (!auth) return;
    setError(''); // Clear previous errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // No navigation needed, onAuthStateChanged in App component will handle it
    } catch (err) {
      console.error("Sign in error:", err.message);
      setError("Failed to sign in. Please check your email and password.");
    }
  };

  // --- NEW: Handle Sign Up ---
  const handleSignUp = async () => {
    if (!auth || !db) return;
    setError(''); // Clear previous errors
    try {
      // 1. Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Save user's name to Firestore
      // We use the private user data path: /artifacts/{appId}/users/{userId}/profile
      const userDocRef = doc(db, 'artifacts', appId, 'users', user.uid, 'profile', 'data');
      await setDoc(userDocRef, {
        name: name,
        email: email,
        createdAt: new Date().toISOString()
      });
      
      // No navigation needed, onAuthStateChanged in App component will handle it
    } catch (err) {
      console.error("Sign up error:", err.message);
      setError("Failed to create account. " + err.message);
    }
  };

  // --- NEW: Handle Form Submit ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      handleSignIn();
    } else {
      handleSignUp();
    }
  };

  return (
    <section className="bg-orange-50 py-20 md:py-32">
      <div className="flex flex-col items-center justify-center px-6 mx-auto">
        <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl font-serif">
              {isLoginView ? 'Sign in to your account' : 'Create an account'}
            </h1>
            
            {/* NEW: Error Message Display */}
            {error && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                {error}
              </div>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              
              {/* Name Input (Sign Up only) */}
              {!isLoginView && (
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserCircle className="h-6 w-6 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full pl-11 p-3"
                      placeholder="Name" 
                      value={name} // Controlled component
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
              
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Your email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full pl-11 p-3"
                    placeholder="your gmail"
                    value={email} // Controlled component
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full pl-11 p-3"
                    value={password} // Controlled component
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Forgot Password Link (Sign In only) */}
              {isLoginView && (
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-lg font-medium text-orange-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-150 ease-in-out"
              >
                {isLoginView ? 'Sign in' : 'Create account'}
              </button>
              
              {/* Toggle Link */}
              <p className="text-lg font-light text-gray-600">
                {isLoginView ? "Don’t have an account yet? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLoginView(!isLoginView);
                    setError(''); // Clear errors on toggle
                  }}
                  className="font-medium text-orange-600 hover:underline"
                >
                  {isLoginView ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10. Dummy page components
// ... (No changes, existing code)
function ArtisanHubPage() {
  return (
    <div className="py-24 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-serif">
          Artisan Hub
        </h2>
        <p className="mt-6 text-xl text-gray-700 leading-relaxed">
          This is a placeholder page for the Artisan Hub. Content coming soon!
        </p>
      </div>
    </div>
  );
}

// ... (No changes, existing code)
function CollectorsPage() {
  return (
    <div className="py-24 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-serif">
          Collectors Corner
        </h2>
        <p className="mt-6 text-xl text-gray-700 leading-relaxed">
          This is a placeholder page for Collectors. Content coming soon!
        </p>
      </div>
    </div>
  );
}

// 11. --- UPDATED: Dashboard Page ---
function DashboardPage({ navigateTo, userId, appId }) { // Now accepts userId and appId
  const dashboardItems = [
    { name: 'My Collection', icon: Wallet, color: 'text-orange-600', page: 'collectors' },
    { name: 'My Listings', icon: Store, color: 'text-amber-600', page: 'artisan-hub' },
    { name: 'Account Settings', icon: Settings, color: 'text-gray-600', page: 'home' }, // Points to home for now
  ];
  
  return (
    <section className="bg-orange-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-4">
            Welcome to your Dashboard
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Manage your collection, listings, and account settings all in one place.
          </p>

          {/* NEW: Display User ID and App ID */}
          <div className="mb-8 p-4 bg-orange-100 border border-orange-200 rounded-lg text-sm">
            <p className="font-mono text-orange-900">
              <span className="font-semibold">App ID:</span> {appId}
            </p>
            <p className="font-mono text-orange-900 mt-2">
              <span className="font-semibold">User ID:</span> {userId}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dashboardItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateTo(item.page)}
                className="group flex flex-col items-center p-8 bg-white rounded-lg shadow-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`p-4 bg-orange-100 rounded-full transition duration-300 group-hover:bg-orange-200`}>
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900 font-serif">
                  {item.name}
                </h3>
              </button>
            ))}
          </div>

          {/* Placeholder for recent activity */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6">
              Recent Activity
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-600">
                Your recent activity will appear here. You haven't listed or purchased any items yet.
              </p>
              <button 
                onClick={() => navigateTo('categories')}
                className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition duration-150 ease-in-out shadow-sm"
              >
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


