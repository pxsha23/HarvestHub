import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import FarmerDashboard from './pages/farmer/Dashboard.jsx'
import InvestorDashboard from './pages/investor/Dashboard.jsx'
import AdminDashboard from './pages/admin/Dashboard.jsx'
import BrowseFarms from './pages/investor/BrowseFarms.jsx'
import FarmDetail from './pages/investor/FarmDetail.jsx'
import { AuthProvider, useAuth } from './auth/AuthContext.jsx'
import { ToastProvider } from './components/ToastProvider.jsx'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import Portfolio from './pages/investor/Portfolio.jsx'

function Protected({ roles, children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />
  return children
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-green-50 to-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/farmer" element={<Protected roles={['farmer']}><FarmerDashboard /></Protected>} />
          <Route path="/investor" element={<Protected roles={['investor']}><InvestorDashboard /></Protected>} />
          <Route path="/portfolio" element={<Protected roles={['investor']}><Portfolio /></Protected>} />
          <Route path="/admin" element={<Protected roles={['admin']}><AdminDashboard /></Protected>} />

          <Route path="/farms" element={<Protected roles={['investor']}><BrowseFarms /></Protected>} />
          <Route path="/farms/:id" element={<Protected roles={['investor']}><FarmDetail /></Protected>} />
          </Routes>
          {/* Global footer for public pages is included in Home; others are dashboard-only */}
        </Layout>
      </ToastProvider>
    </AuthProvider>
  )
}


