// import { Link } from 'react-router-dom'
// import { useAuth } from '../auth/AuthContext.jsx'
// import Logo from './Logo.jsx'
// import RandomFact from './RandomFact.jsx'
// import { HomeIcon, FarmIcon, PortfolioIcon, TrendIcon, CloudIcon, BankIcon, BookIcon } from './Icons.jsx'

// export default function Sidebar() {
//   const { user } = useAuth()
//   return (
//     <aside className="w-72 bg-gradient-to-b from-emerald-100 via-emerald-50 to-white backdrop-blur border-r p-6 hidden lg:block">
//       <div className="flex items-center gap-3">
//         <Logo size={32} />
//         <div className="text-2xl font-bold tracking-tight text-emerald-800">HarvestHub</div>
//       </div>
//       <nav className="mt-6 space-y-2 text-sm">
//         <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/"><HomeIcon className="h-4 w-4"/> Home</Link>
//         {user?.role === 'farmer' && <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/farmer"><FarmIcon className="h-4 w-4"/> Farmer Dashboard</Link>}
//         {user?.role === 'investor' && <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/investor"><TrendIcon className="h-4 w-4"/> Investor Dashboard</Link>}
//         {user?.role === 'admin' && <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/admin"><BankIcon className="h-4 w-4"/> Admin Dashboard</Link>}
//         <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/farms"><FarmIcon className="h-4 w-4"/> Browse Farms</Link>
//         {user?.role === 'investor' && <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/portfolio"><PortfolioIcon className="h-4 w-4"/> My Portfolio</Link>}
//         <div className="pt-4 text-xs uppercase text-emerald-700">Insights</div>
//         <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#"><TrendIcon className="h-4 w-4"/> Market Trends</a>
//         <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#"><CloudIcon className="h-4 w-4"/> Weather Watch</a>
//         <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#"><BankIcon className="h-4 w-4"/> Govt Subsidies</a>
//         <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#"><BookIcon className="h-4 w-4"/> Knowledge Hub</a>
//       </nav>
//       <div className="mt-6 p-3 bg-emerald-50 border border-emerald-200 rounded">
//         <RandomFact />
//       </div>
//       <div className="mt-6 text-xs text-gray-700 border-t pt-4">How It Works

// Sign Up & Choose Your Role
// Create your account as a Farmer or Investor to start your journey.

// Farmers Upload Land Details
// Farmers share their land info, crop plans, and expected profits with pictures.

// Investors Explore & Invest
// Investors browse verified farms and invest in the projects they believe in.

// Growth & Progress Updates
// Farmers keep investors updated through photos, reports, and the built-in chatroom.

// Harvest & Profit Sharing
// After harvest, profits are shared transparently — rewarding both heart and effort.
// "We don’t just grow crops — we grow trust, unity, and prosperity."
// Grow with confidence. <span className="text-yellow-600">₹</span></div>
//     </aside>
//   )
// }


import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'
import Logo from './Logo.jsx'
import RandomFact from './RandomFact.jsx'
import { 
  HomeIcon, 
  FarmIcon, 
  PortfolioIcon, 
  TrendIcon, 
  CloudIcon, 
  BankIcon, 
  BookIcon 
} from './Icons.jsx'

export default function Sidebar() {
  const { user } = useAuth()

  return (
    <aside className="w-72 bg-gradient-to-b from-emerald-100 via-emerald-50 to-white backdrop-blur border-r p-6 hidden lg:block">
      
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <Logo size={32} />
        <div className="text-2xl font-bold tracking-tight text-emerald-800">HarvestHub</div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 space-y-2 text-sm">
        <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/">
          <HomeIcon className="h-4 w-4" /> Home
        </Link>

        {user?.role === 'farmer' && (
          <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/farmer">
            <FarmIcon className="h-4 w-4" /> Farmer Dashboard
          </Link>
        )}

        {user?.role === 'investor' && (
          <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/investor">
            <TrendIcon className="h-4 w-4" /> Investor Dashboard
          </Link>
        )}

        {user?.role === 'admin' && (
          <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/admin">
            <BankIcon className="h-4 w-4" /> Admin Dashboard
          </Link>
        )}

        <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/farms">
          <FarmIcon className="h-4 w-4" /> Browse Farms
        </Link>

        {user?.role === 'investor' && (
          <Link className="flex items-center gap-2 py-2 hover:text-emerald-800" to="/portfolio">
            <PortfolioIcon className="h-4 w-4" /> My Portfolio
          </Link>
        )}

        {/* Insights Section */}
        <div className="pt-4 text-xs uppercase text-emerald-700">Insights</div>
        <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#">
          <TrendIcon className="h-4 w-4" /> Market Trends
        </a>
        <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#">
          <CloudIcon className="h-4 w-4" /> Weather Watch
        </a>
        <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#">
          <BankIcon className="h-4 w-4" /> Govt Subsidies
        </a>
        <a className="flex items-center gap-2 py-2 text-gray-800 hover:text-emerald-800" href="#">
          <BookIcon className="h-4 w-4" /> Knowledge Hub
        </a>
      </nav>

      {/* Random Fact Box */}
      <div className="mt-6 p-3 bg-emerald-50 border border-emerald-200 rounded">
        <RandomFact />
      </div>

      {/* How It Works Section */}
      <div className="mt-6 text-xs text-gray-700 border-t pt-4 leading-relaxed">
        <div className="font-semibold text-emerald-800 mb-2">How It Works</div>

        <p><strong>1. Sign Up & Choose Your Role:</strong> Create your account as a Farmer or Investor to start your journey.</p>
        <p><strong>2. Farmers Upload Land Details:</strong> Share land info, crop plans, and expected profits with pictures.</p>
        <p><strong>3. Investors Explore & Invest:</strong> Browse verified farms and invest in the projects you believe in.</p>
        <p><strong>4. Growth & Progress Updates:</strong> Farmers keep investors updated through photos, reports, and the chatroom.</p>
        <p><strong>5. Harvest & Profit Sharing:</strong> After harvest, profits are shared transparently — rewarding both heart and effort.</p>

        <div className="mt-3 italic text-emerald-900">
          “We don’t just grow crops — we grow trust, unity, and prosperity.”
        </div>

        <div className="mt-1 text-emerald-700 font-medium">
          Grow with confidence. <span className="text-yellow-600">₹</span>
        </div>
      </div>
    </aside>
  )
}
