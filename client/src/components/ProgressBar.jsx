export default function ProgressBar({ value = 0 }){
  return (
    <div className="w-full h-2 bg-gray-200 rounded">
      <div className="h-2 bg-green-600 rounded transition-all" style={{ width: `${Math.min(100, Math.max(0,value))}%` }} />
    </div>
  )
}


