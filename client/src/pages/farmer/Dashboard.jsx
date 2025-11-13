import { useEffect, useState } from 'react'
import axios from 'axios'

export default function FarmerDashboard() {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [cropType, setCropType] = useState('')
  const [investmentRequired, setInvestmentRequired] = useState('')
  const [profitShare, setProfitShare] = useState('')
  const [images, setImages] = useState([])
  const [farms, setFarms] = useState([])
  const [profitAmount, setProfitAmount] = useState('')
  const [selectedFarm, setSelectedFarm] = useState('')

  useEffect(() => { (async () => {
    try {
      const { data } = await axios.get('/api/farms/mine/list')
      setFarms(data)
    } catch {}
  })() }, [])

  const uploadFarm = async (e) => {
    e.preventDefault()
    const form = new FormData()
    form.append('data', JSON.stringify({ title, location, cropType, investmentRequired: Number(investmentRequired), profitShare: Number(profitShare) }))
    for (const file of images) form.append('images', file)
    await axios.post('/api/farms', form)
    alert('Farm submitted for approval')
  }

  const addProfit = async (e) => {
    e.preventDefault()
    await axios.post(`/api/farms/${selectedFarm}/profits`, { totalProfit: Number(profitAmount) })
    alert('Profit recorded')
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Farmer Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={uploadFarm} className="p-4 bg-white rounded border space-y-3">
          <h3 className="font-semibold">Upload Land</h3>
          <input className="w-full border rounded p-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Crop Type" value={cropType} onChange={e=>setCropType(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Investment Required" value={investmentRequired} onChange={e=>setInvestmentRequired(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Investor Profit %" value={profitShare} onChange={e=>setProfitShare(e.target.value)} />
          <input className="w-full border rounded p-2" type="file" multiple onChange={e=>setImages(e.target.files)} />
          <button className="bg-green-600 text-white rounded px-3 py-2">Submit</button>
        </form>

        <form onSubmit={addProfit} className="p-4 bg-white rounded border space-y-3">
          <h3 className="font-semibold">Update Harvest/Profit</h3>
          <select className="w-full border rounded p-2" value={selectedFarm} onChange={e=>setSelectedFarm(e.target.value)}>
            <option value="">Select Farm</option>
            {farms.map(f => <option key={f._id} value={f._id}>{f.title}</option>)}
          </select>
          <input className="w-full border rounded p-2" placeholder="Total Profit" value={profitAmount} onChange={e=>setProfitAmount(e.target.value)} />
          <button className="bg-blue-600 text-white rounded px-3 py-2">Record Profit</button>
        </form>
      </div>
    </div>
  )
}


