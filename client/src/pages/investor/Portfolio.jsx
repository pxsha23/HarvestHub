import { useEffect, useState } from 'react'
import axios from 'axios'
import ProgressBar from '../../components/ProgressBar.jsx'
import { formatINR } from '../../utils/format.js'

export default function Portfolio(){
  const [data, setData] = useState(null)
  useEffect(() => { (async () => {
    const res = await axios.get('/api/investors/portfolio')
    setData(res.data)
  })() }, [])

  if (!data) return <div className="p-4"><div className="text-sm text-gray-500">Loading portfolio...</div></div>

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">My Portfolio</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {data.investments.map(i => (
          <div key={i._id} className="bg-white border rounded p-4">
            <div className="font-medium">{i.farmId?.title || 'Farm'}</div>
            <div className="text-sm text-gray-600">Invested: {formatINR(i.amount)}</div>
            <div className="mt-3">
              <div className="text-xs text-gray-500 mb-1">Progress</div>
              <ProgressBar value={70} />
            </div>
          </div>
        ))}
        {data.investments.length === 0 && (
          <div className="col-span-2 text-center text-gray-600 bg-white border rounded p-8">No farms yet — sow your first!</div>
        )}
      </div>
    </div>
  )
}


