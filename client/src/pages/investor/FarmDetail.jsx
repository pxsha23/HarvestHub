import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Modal from '../../components/Modal.jsx'
import { useToast } from '../../components/ToastProvider.jsx'
import { formatINR } from '../../utils/format.js'

export default function FarmDetail() {
  const { id } = useParams()
  const [farm, setFarm] = useState(null)
  const [amount, setAmount] = useState('')
  const [open, setOpen] = useState(false)
  const { push } = useToast()

  useEffect(() => { (async () => {
    const { data } = await axios.get(`/api/farms/${id}`)
    setFarm(data)
  })() }, [id])

  const invest = async () => {
    try {
      await axios.post('/api/investors/invest', { farmId: id, amount: Number(amount) })
      push('Investment recorded', 'success')
      setOpen(false)
    } catch(e) {
      push('Failed to invest', 'error')
    }
  }

  if (!farm) return <div>Loading...</div>

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold">{farm.title}</h2>
      <div className="text-gray-600">{farm.location} • {farm.cropType}</div>
      <div>Investment Required: <span className="font-medium text-emerald-700">{formatINR(farm.investmentRequired)}</span></div>
      <div>Investor Profit Share: {farm.profitShare}%</div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {(farm.images||[]).map((img, idx) => (
          <img key={idx} src={img} className="w-full h-32 object-cover rounded border" />
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-green-600 text-white rounded px-3 py-2" onClick={()=>setOpen(true)}>Invest</button>
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title="Invest in Farm"
        actions={<>
          <button className="px-3 py-1 bg-gray-200 rounded" onClick={()=>setOpen(false)}>Cancel</button>
          <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={invest}>Confirm</button>
        </>}>
        <div className="space-y-2">
          <div className="text-sm text-gray-600">Enter amount to invest</div>
          <input className="w-full border rounded p-2" placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
        </div>
      </Modal>
    </div>
  )
}


