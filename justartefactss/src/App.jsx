import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, BookUser, Sprout, Menu, X, Coins, Gem, Feather, 
  Mail, Lock, UserCircle, Landmark, LayoutDashboard, Wallet, Store, Settings,
  Tag, Package, Calendar, ChevronRight // New icons
} from 'lucide-react';
import { initializeApp, setLogLevel } from 'firebase/app';
import { 
  getAuth, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  setPersistence,
  browserSessionPersistence // Or browserLocalPersistence for "remember me"
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc 
} from 'firebase/firestore';

// -----------------------------------------------------------------------------
// MOCK PRODUCT DATABASE
// -----------------------------------------------------------------------------

const productsData = {
  "vintage-coins": {
    name: "Vintage Coins",
    products: [
      { id: "chola-coin", name: "Chola Dynasty Gold Coin", price: 15000.00, type: 'buy', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Chola+Coin", description: "A rare gold coin from the Chola Dynasty, dating back to 1070-1120 AD. Features intricate carvings of a tiger and fish, symbols of Chola power." },
      { id: "mughal-mohur", name: "Mughal Empire Silver Mohur", price: 8500.00, type: 'bid', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Mughal+Mohur", description: "A silver Mohur from the reign of Emperor Akbar. This coin is a splendid example of Mughal calligraphy and minting artistry." },
      { id: "roman-aureus", name: "Roman Aureus (Julius Caesar)", price: 32000.00, type: 'buy', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Roman+Aureus", description: "An exceptionally preserved gold Aureus featuring the portrait of Julius Caesar. A true collector's item for enthusiasts of Roman history." },
    ]
  },
  "currencies": {
    name: "Currencies & Notes",
    products: [
      { id: "british-india-note", name: "British India 10 Rupee Note", price: 4500.00, type: 'buy', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=10+Rupee+Note", description: "A 10 Rupee note from British India, issued in 1925. Features a portrait of King George V. In good condition for its age." },
      { id: "confederate-dollar", name: "Confederate States $100 Bill", price: 6000.00, type: 'bid', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Confederate+%24100", description: "A $100 note issued by the Confederate States of America during the Civil War. A significant piece of American history." },
    ]
  },
  "handcrafted-pottery": {
    name: "Handcrafted Pottery",
    products: [
      { id: "jaipur-blue-vase", name: "Jaipur Blue Pottery Vase", price: 7500.00, type: 'buy', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Jaipur+Vase", description: "A stunning hand-painted vase made in the traditional Blue Pottery craft of Jaipur, India. Features a beautiful floral motif. 12 inches tall." },
      { id: "terracotta-set", name: "Terracotta Drinking Set", price: 5000.00, type: 'buy', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Terracotta+Set", description: "An eco-friendly, handcrafted terracotta water jug and set of 4 glasses. Known for its natural cooling properties. Made by artisans from West Bengal." },
      { id: "black-clay-pot", name: "Manipur Black Clay Pot", price: 9000.00, type: 'buy', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Black+Clay+Pot", description: "A unique cooking pot made from Longpi (Nungbi) black clay, a craft native to Manipur, India. This pottery is known for its durability and rustic charm." },
    ]
  },
  "other-collectibles": {
    name: "Other Collectibles",
    products: [
      { id: "bronze-nataraja", name: "Bronze Nataraja Statue", price: 22000.00, type: 'bid', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Nataraja+Statue", description: "A 10-inch bronze statue of Nataraja (Dancing Shiva), crafted using the 'lost-wax' casting method by master artisans. A masterpiece of traditional Indian sculpture." },
      { id: "pattachitra", name: "Pattachitra Painting", price: 13000.00, type: 'buy', imageUrl: "https://placehold.co/600x400/fdba74/4c2a0a?text=Pattachitra", description: "A vibrant and intricate Pattachitra scroll painting from Odisha, depicting a scene from the Ramayana. Painted on cloth with natural dyes." },
    ]
  }
};

// -----------------------------------------------------------------------------
// FIREBASE CONFIGURATION
// -----------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyAVSYlXtPwHQKtxFiE-A4kMP_X4u3m6m_M",
  authDomain: "justartefactss.firebaseapp.com",
  projectId: "justartefactss",
  storageBucket: "justartefactss.firebasefirestore.app",
  messagingSenderId: "240717554796",
  appId: "1:240717554796:web:133c0f17211fa103566449",
  measurementId: "G-2YLDPSZWFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
setLogLevel('debug'); // Use 'debug' for development, 'silent' for production

// -----------------------------------------------------------------------------
// MAIN APP COMPONENT
// -----------------------------------------------------------------------------
export default function App() {
  const [page, setPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Auth State
  const [user, setUser] = useState(null); // Replaces isAuthenticated
  const [authIsReady, setAuthIsReady] = useState(false);
  const [authError, setAuthError] = useState(null);

  // NEW: Navigation state for categories and products
  const [selectedCategory, setSelectedCategory] = useState(null); // e.g., 'vintage-coins'
  const [selectedProduct, setSelectedProduct] = useState(null); // e.g., 'chola-coin'
  
  // Check auth state on initial load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthIsReady(true);
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // NEW: Updated Navigation Logic
  const navigateTo = (pageName, data = {}) => {
    setPage(pageName);
    
    if (pageName === 'category' && data.category) {
      setSelectedCategory(data.category);
    }
    
    if (pageName === 'product' && data.product) {
      // Find the category of the product
      const categoryId = Object.keys(productsData).find(catId => 
        productsData[catId].products.some(p => p.id === data.product.id)
      );
      setSelectedCategory(categoryId);
      setSelectedProduct(data.product);
    }
    
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Auth: Handle Sign Up
  const handleSignUp = async (email, password, name) => {
    setAuthError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Save user name to Firestore
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const userDocRef = doc(db, `/artifacts/${appId}/users/${user.uid}/profile/main`);
      await setDoc(userDocRef, {
        name: name,
        email: user.email,
        createdAt: new Date()
      });
      
      setUser(user); // Set user state
      navigateTo('dashboard');
    } catch (error) {
      console.error("Error signing up:", error);
      setAuthError(error.message); // Show friendly error
    }
  };

  // Auth: Handle Sign In
  const handleLogin = async (email, password) => {
    setAuthError(null);
    try {
      // Set session persistence
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser); // Set user state
      navigateTo('dashboard');
    } catch (error) {
      console.error("Error signing in:", error);
      setAuthError(error.message);
    }
  };

  // Auth: Handle Logout
  const handleLogout = async () => {
    setAuthError(null);
    try {
      await signOut(auth);
      setUser(null); // Clear user state
      navigateTo('home');
    } catch (error) {
      console.error("Error signing out:", error);
      setAuthError(error.message);
    }
  };

  // NEW: Updated Page Renderer
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage />;
      case 'categories': // This is now the "all categories" page
        return <CategoriesPage navigateTo={navigateTo} />;
      case 'artisan-hub':
        return <ArtisanHubPage />;
      case 'collectors':
        return <CollectorsPage />;
      case 'login':
        return user ? 
          <DashboardPage navigateTo={navigateTo} user={user} /> : 
          <LoginPage navigateTo={navigateTo} handleLogin={handleLogin} handleSignUp={handleSignUp} authError={authError} />;
      case 'dashboard':
        return user ? 
          <DashboardPage navigateTo={navigateTo} user={user} /> : 
          <LoginPage navigateTo={navigateTo} handleLogin={handleLogin} handleSignUp={handleSignUp} authError={authError} />;
      
      // NEW PAGES
      case 'category':
        if (selectedCategory && productsData[selectedCategory]) {
          return <CategoryPage navigateTo={navigateTo} category={productsData[selectedCategory]} />;
        }
        return <CategoriesPage navigateTo={navigateTo} />; // Fallback
      
      case 'product':
        if (selectedProduct) {
          return <ProductPage navigateTo={navigateTo} product={selectedProduct} selectedCategory={selectedCategory} />;
        }
        return <CategoriesPage navigateTo={navigateTo} />; // Fallback

      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  if (!authIsReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <h2 className="text-2xl font-serif text-orange-700">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar 
        navigateTo={navigateTo} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isAuthenticated={!!user} // Pass auth state
        handleLogout={handleLogout} // Pass logout handler
      />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

// -----------------------------------------------------------------------------
// NAVIGATION & FOOTER
// -----------------------------------------------------------------------------
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
          <button onClick={() => navigateTo('home')} className="flex items-center text-3xl font-bold text-orange-700 focus:outline-none">
            <Landmark className="h-8 w-8 mr-2" />
            Just Artefacts
          </button>

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

function Footer({ navigateTo }) {
  // Simple footer, updated to use navigateTo
  return (
    <footer className="bg-orange-950 text-orange-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => navigateTo('category', { category: 'vintage-coins' })} className="hover:text-white">Coins</button></li>
              <li><button onClick={() => navigateTo('category', { category: 'currencies' })} className="hover:text-white">Currency</button></li>
              <li><button onClick={() => navigateTo('category', { category: 'handcrafted-pottery' })} className="hover:text-white">Pottery</button></li>
              <li><button onClick={() => navigateTo('category', { category: 'other-collectibles' })} className="hover:text-white">Handicrafts</button></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Sell</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => navigateTo('login')} className="hover:text-white">Become a Seller</button></li>
              <li><button onClick={() => navigateTo('artisan-hub')} className="hover:text-white">Artisan Hub</button></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white">About</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => navigateTo('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-white">Our Vision</button></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white">Help Center</button></li>
              <li><button onClick={() => navigateTo('home')} className="hover:text-white">Contact Us</button></li>
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

// -----------------------------------------------------------------------------
// CORE PAGE COMPONENTS
// -----------------------------------------------------------------------------
function HomePage({ navigateTo }) {
  return (
    <>
      <HeroSection navigateTo={navigateTo} />
      <OurVisionBar />
      <FeaturesSection />
      <CategoriesSection navigateTo={navigateTo} />
    </>
  );
}

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

function OurVisionBar() {
  return (
    <div className="bg-white py-6 shadow-sm">
      <h3 className="text-center text-sm font-semibold text-orange-700 tracking-widest uppercase">
        Our Vision
      </h3>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    { name: 'Ensure Authenticity', description: 'A secure and transparent environment for trading collectibles.', icon: ShieldCheck, color: 'text-orange-600' },
    { name: 'Cultural Preservation', description: 'Contributing to the preservation of heritage and artisanal livelihoods.', icon: BookUser, color: 'text-amber-600' },
    { name: 'Sustainable Economics', description: 'Offering sustainable opportunities to artisans, the backbone of India\'s handicraft industry.', icon: Sprout, color: 'text-orange-400' },
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

// -----------------------------------------------------------------------------
// CATEGORY & PRODUCT PAGES
// -----------------------------------------------------------------------------

// UPDATED: This is now the "All Categories" page
function CategoriesPage({ navigateTo }) {
  return (
    <div className="bg-white py-24">
      <CategoriesSection navigateTo={navigateTo} />
    </div>
  );
}

// UPDATED: This component now navigates to a specific category page
function CategoriesSection({ navigateTo }) {
   const categories = [
    { id: 'vintage-coins', name: 'Vintage Coins', description: 'Rare numismatics from across eras.', icon: Coins },
    { id: 'currencies', name: 'Currencies & Notes', description: 'Historic banknotes and paper money.', icon: Feather },
    { id: 'handcrafted-pottery', name: 'Handcrafted Pottery', description: 'Unique pieces from traditional artisans.', icon: Gem },
    { id: 'other-collectibles', name: 'Other Collectibles', description: 'Explore unique crafts and more.', icon: Sprout },
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
          // This is now a button that navigates to the specific category page
          <button
            key={category.id}
            onClick={() => navigateTo('category', { category: category.id })}
            className="group relative bg-white border border-orange-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 text-left"
          >
            <img 
              src={`https://placehold.co/300x200/FFF7ED/f97316?text=${category.name.replace(' ', '+')}`} 
              alt={category.name} 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.src=`https://placehold.co/300x200/CCCCCC/FFFFFF?text=Image+Error` }}
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <category.icon className="h-7 w-7 text-orange-600" />
                <h3 className="ml-3 text-2xl font-bold text-gray-900 font-serif">
                  {category.name}
                </h3>
              </div>
              <p className="text-lg text-gray-700">{category.description}</p>
              <span className="mt-6 text-orange-600 font-semibold text-lg group-hover:text-orange-700 transition duration-150 block">
                View More &rarr;
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// NEW: Page to display products in one category
function CategoryPage({ navigateTo, category }) {
  return (
    <section className="bg-orange-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-gray-900 font-serif mb-12">
          {category.name}
        </h1>
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-lg text-gray-600 mb-12">
          <button onClick={() => navigateTo('home')} className="hover:text-orange-600">Home</button>
          <ChevronRight className="h-5 w-5 mx-2" />
          <button onClick={() => navigateTo('categories')} className="hover:text-orange-600">Categories</button>
          <ChevronRight className="h-5 w-5 mx-2" />
          <span className="font-semibold text-gray-800">{category.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <button
              key={product.id}
              onClick={() => navigateTo('product', { product: product })}
              className="group relative bg-white border border-orange-100 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2 text-left"
            >
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src=`https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Error` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 font-serif">
                  {product.name}
                </h3>
                <p className="mt-3 text-2xl font-semibold text-orange-700">
                  {product.type === 'bid' ? `Starts at ₹${product.price.toFixed(2)}` : `₹${product.price.toFixed(2)}`}
                </p>
                <span className="mt-6 text-orange-600 font-semibold text-lg group-hover:text-orange-700 transition duration-150 block">
                  View Details &rarr;
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// NEW: Page to display a single product's details
function ProductPage({ navigateTo, product, selectedCategory }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        <div className="flex items-center text-lg text-gray-600 mb-12">
          <button onClick={() => navigateTo('home')} className="hover:text-orange-600">Home</button>
          <ChevronRight className="h-5 w-5 mx-2" />
          <button onClick={() => navigateTo('categories')} className="hover:text-orange-600">Categories</button>
          <ChevronRight className="h-5 w-5 mx-2" />
          <button onClick={() => navigateTo('category', { category: selectedCategory })} className="hover:text-orange-600">
            {productsData[selectedCategory]?.name || 'Category'}
          </button>
          <ChevronRight className="h-5 w-5 mx-2" />
          <span className="font-semibold text-gray-800">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Column */}
          <div>
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full rounded-lg shadow-lg object-cover aspect-square"
              onError={(e) => { e.target.src=`https://placehold.co/600x600/CCCCCC/FFFFFF?text=Image+Error` }}
            />
          </div>

          {/* Details Column */}
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 font-serif">
              {product.name}
            </h1>
            
            <p className="my-6 text-3xl font-bold text-orange-700">
              {product.type === 'bid' ? `Starting Bid: ₹${product.price.toFixed(2)}` : `₹${product.price.toFixed(2)}`}
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-10">
              {product.type === 'bid' ? (
                <div className="flex flex-col space-y-4">
                  <label htmlFor="bid-amount" className="text-lg font-medium text-gray-900">Your Bid Amount:</label>
                  <input 
                    type="number" 
                    id="bid-amount" 
                    name="bid-amount" 
                    min={product.price} 
                    defaultValue={product.price}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-3"
                  />
                  <button
                    className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-150 ease-in-out"
                  >
                    Place Bid
                  </button>
                </div>
              ) : (
                <button
                  className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-3 text-center transition duration-150 ease-in-out"
                >
                  Add to Cart
                </button>
              )}
            </div>

            <div className="mt-10 space-y-4 text-lg text-gray-700">
              <div className="flex items-center">
                <Package className="h-6 w-6 mr-3 text-orange-600" />
                <span>Ships from an authenticated artisan.</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-6 w-6 mr-3 text-orange-600" />
                <span>SKU: {product.id}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-orange-600" />
                <span>Estimated Delivery: 5-7 business days.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// USER & OTHER PAGES
// -----------------------------------------------------------------------------

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
            artisanal livelihoods.
          </p>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            The vision of Just Artefacts is to create a secure,
            transparent, and culturally sensitive platform where vintage coins, currencies,
            pottery, and unique craft pieces can be traded and appreciated.
          </p>
        </div>
      </div>
    </section>
  );
}

function LoginPage({ navigateTo, handleLogin, handleSignUp, authError }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      handleLogin(email, password);
    } else {
      handleSignUp(email, password, name);
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
            
            {/* Auth Error Message */}
            {authError && (
              <div className="p-4 rounded-md bg-red-50 border border-red-200">
                <p className="text-red-700">{authError}</p>
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
                      value={name}
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
                    value={email}
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
                    value={password}
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
                  onClick={() => setIsLoginView(!isLoginView)}
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

function DashboardPage({ navigateTo, user }) {
  const [userName, setUserName] = useState(null);

  // Fetch user's name from Firestore
  useEffect(() => {
    if (user) {
      const fetchUserName = async () => {
        try {
          const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
          const userDocRef = doc(db, `/artifacts/${appId}/users/${user.uid}/profile/main`);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            setUserName(docSnap.data().name);
          } else {
            console.log("No such user profile!");
            setUserName(user.email); // Fallback to email
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
          setUserName(user.email); // Fallback to email
        }
      };
      fetchUserName();
    }
  }, [user]);
  
  const dashboardItems = [
    { name: 'My Collection', icon: Wallet, color: 'text-orange-600', page: 'collectors' },
    { name: 'My Listings', icon: Store, color: 'text-amber-600', page: 'artisan-hub' },
    { name: 'Account Settings', icon: Settings, color: 'text-gray-600', page: 'home' }, // Points to home for now
  ];
  
  return (
    <section className="bg-orange-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 font-serif mb-4">
            Welcome, {userName || 'User'}!
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Manage your collection, listings, and account settings all in one place.
          </p>

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

// Dummy page components
function ArtisanHubPage() {
  return (
    <div className="py-24 bg-orange-50 min-h-screen">
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

function CollectorsPage() {
  return (
    <div className="py-24 bg-orange-50 min-h-screen">
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



