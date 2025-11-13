import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'
import Logo from './Logo.jsx'

export default function Header() {
  const { user, logout } = useAuth()
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white/70 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <Logo size={28} />
        <span className="font-semibold text-emerald-800">HarvestHub</span>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">{user.name} • {user.role}</span>
            <button className="px-3 py-1 bg-gray-900 text-white rounded" onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="space-x-2">
            <Link className="px-3 py-1 bg-gray-200 rounded" to="/login">Login</Link>
            <Link className="px-3 py-1 bg-green-600 text-white rounded" to="/signup">Signup</Link>
          </div>
        )}
      </div>
    </header>
  )}


