import { useState } from 'react'

export default function Accordion({ items }){
  const [open, setOpen] = useState(null)
  return (
    <div className="divide-y rounded border bg-white">
      {items.map((it, idx) => (
        <div key={idx}>
          <button className="w-full text-left p-4 hover:bg-gray-50" onClick={()=>setOpen(open===idx?null:idx)}>
            <div className="font-medium">{it.q}</div>
          </button>
          {open===idx && <div className="p-4 text-sm text-gray-700">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}


