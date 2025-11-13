import { Link } from 'react-router-dom'
import StatsCard from '../../components/StatsCard.jsx'
import { formatINR } from '../../utils/format.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function InvestorDashboard() {
  const [stats, setStats] = useState({ totalInvested: 0, totalProfits: 0 })

  useEffect(() => { (async () => {
    const { data } = await axios.get('/api/investors/portfolio')
    const totalInvested = data.investments.reduce((s,i)=>s+i.amount,0)
    const totalProfits = data.profitRecords.reduce((s,p)=>s+p.investorShare,0)
    setStats({ totalInvested, totalProfits })
  })() }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Investor Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <StatsCard label="Total Invested" value={formatINR(stats.totalInvested)} accent="green" />
        <StatsCard label="Total Profit" value={formatINR(stats.totalProfits)} accent="blue" />
        <StatsCard label="Projects" value={stats.totalInvested ? 'Active' : 'Explore'} />
      </div>
      <div className="flex gap-3">
        <Link className="inline-block bg-green-600 text-white rounded px-3 py-2" to="/farms">Browse Farms</Link>
        <Link className="inline-block bg-yellow-500 text-black rounded px-3 py-2" to="/portfolio">View Portfolio</Link>
      </div>
    </div>
  )
}


