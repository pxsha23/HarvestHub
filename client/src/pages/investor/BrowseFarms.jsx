import { useEffect, useState } from 'react'
import axios from 'axios'
import FarmCard from '../../components/FarmCard.jsx'

export default function BrowseFarms() {
  const [farms, setFarms] = useState([])
  const [location, setLocation] = useState('')
  const [cropType, setCropType] = useState('')
  const [maxInvestment, setMaxInvestment] = useState('')

  const load = async () => {
    const { data } = await axios.get('/api/farms', { params: { location, cropType, maxInvestment } })
    setFarms(data)
  }
  useEffect(() => { load() }, [])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Browse Farms</h2>
      <div className="grid md:grid-cols-4 gap-2">
        <input className="border rounded p-2" placeholder="Location (e.g., Pune)" value={location} onChange={e=>setLocation(e.target.value)} />
        <input className="border rounded p-2" placeholder="Crop Type (e.g., Wheat)" value={cropType} onChange={e=>setCropType(e.target.value)} />
        <input className="border rounded p-2" placeholder="Max Investment (₹)" value={maxInvestment} onChange={e=>setMaxInvestment(e.target.value)} />
        <button className="bg-green-700 hover:bg-green-800 text-white rounded px-3 border border-yellow-400/40" onClick={load}>Filter</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {farms.map(f => <FarmCard key={f._id} farm={f} />)}
      </div>
    </div>
  )
}


