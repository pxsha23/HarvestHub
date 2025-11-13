export default function StatsCard({ label, value, accent = 'green' }) {
  const accentClass = accent === 'green' ? 'bg-green-600' : accent === 'blue' ? 'bg-blue-600' : 'bg-gray-600'
  return (
    <div className="p-5 bg-white border rounded shadow-sm">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-2 flex items-end gap-2">
        <div className="text-3xl font-semibold">{value}</div>
        <span className={`inline-block h-2 w-2 rounded-full ${accentClass}`}></span>
      </div>
    </div>
  )
}


