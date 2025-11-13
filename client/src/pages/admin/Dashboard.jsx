import StatsCard from '../../components/StatsCard.jsx'
import { formatINR } from '../../utils/format.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminDashboard() {
  const [pendingFarms, setPendingFarms] = useState([])
  const [reports, setReports] = useState({ investments: [], profits: [] })

  const load = async () => {
    const farms = await axios.get('/api/farms/admin/all')
    setPendingFarms(farms.data.filter(f => !f.approved))
    const tx = await axios.get('/api/transactions')
    setReports({ investments: tx.data.investments, profits: tx.data.profits })
  }

  useEffect(() => { load() }, [])

  const approve = async (id, approved) => {
    await axios.patch(`/api/farms/${id}/approve`, { approved })
    await load()
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <StatsCard label="Total Farms" value={reports.investments.length.toString()} />
        <StatsCard label="Total Profit" value={formatINR(reports.profits.reduce((s,p)=>s+p.investorShare+p.farmerShare,0))} />
        <StatsCard label="Pending Approvals" value={pendingFarms.length.toString()} />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Pending Farm Approvals</h3>
        <div className="space-y-2">
          {pendingFarms.map(f => (
            <div key={f._id} className="bg-white border rounded p-3 flex justify-between items-center">
              <div>
                <div className="font-medium">{f.title}</div>
                <div className="text-sm text-gray-600">{f.location} • {f.cropType}</div>
              </div>
              <div className="space-x-2">
                <button onClick={()=>approve(f._id, true)} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
                <button onClick={()=>approve(f._id, false)} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
              </div>
            </div>
          ))}
          {pendingFarms.length===0 && <div className="text-sm text-gray-600">No pending approvals</div>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded p-3">
          <h3 className="font-semibold mb-2">Investments</h3>
          <div className="text-sm space-y-1 max-h-64 overflow-auto">
            {reports.investments.map(i => (
              <div key={i._id} className="flex justify-between"><span>{new Date(i.createdAt).toLocaleDateString()}</span><span>{i.amount}</span></div>
            ))}
          </div>
        </div>
        <div className="bg-white border rounded p-3">
          <h3 className="font-semibold mb-2">Profit Records</h3>
          <div className="text-sm space-y-1 max-h-64 overflow-auto">
            {reports.profits.map(p => (
              <div key={p._id} className="flex justify-between"><span>{new Date(p.createdAt).toLocaleDateString()}</span><span>Investor: {p.investorShare} • Farmer: {p.farmerShare}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


