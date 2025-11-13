import { Link } from 'react-router-dom'
import { formatINR } from '../utils/format.js'

export default function FarmCard({ farm }) {
  const cover = (farm.images && farm.images[0]) || 'https://commongroundminnesota.com/wp-content/uploads/2021/10/MNCornGrowersBiegler_Day1_Biegler_0060-1024x683.jpg'
  return (
    <div className="bg-white border rounded overflow-hidden shadow-sm">
      <img src={cover} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="font-semibold text-lg">{farm.title}</div>
        <div className="text-sm text-gray-600">{farm.location} • {farm.cropType}</div>
        <div className="mt-2 text-sm">Required: <span className="font-medium text-emerald-700">{formatINR(farm.investmentRequired)}</span></div>
        <div className="mt-1 text-sm">Investor Share: <span className="font-medium">{farm.profitShare}%</span></div>
        <Link className="inline-block mt-3 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded border border-yellow-400/40" to={`/farms/${farm._id}`}>View Details</Link>
      </div>
    </div>
  )
}


