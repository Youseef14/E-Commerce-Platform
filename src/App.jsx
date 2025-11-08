import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import { DarkModeProvider } from './context/DarkModeContext'
import { ComparisonProvider } from './context/ComparisonContext'
import { RecentlyViewedProvider } from './context/RecentlyViewedContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import StyleGuide from './pages/StyleGuide'
import Wishlist from './pages/Wishlist'
import Comparison from './pages/Comparison'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <CartProvider>
          <ComparisonProvider>
            <RecentlyViewedProvider>
              <ToastProvider>
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/product/:id" element={<ProductDetails />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/comparison" element={<Comparison />} />
                      <Route path="/style-guide" element={<StyleGuide />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <ScrollToTop />
                </div>
              </ToastProvider>
            </RecentlyViewedProvider>
          </ComparisonProvider>
        </CartProvider>
      </DarkModeProvider>
    </Router>
  )
}

export default App
