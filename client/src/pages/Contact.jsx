import { useToast } from '../components/ToastProvider.jsx'

export default function Contact(){
  const { push } = useToast()
  return (
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
      <form className="bg-white border rounded p-6 space-y-3">
        <h2 className="text-xl font-semibold">Contact Us</h2>
        <input className="border rounded p-2 w-full" placeholder="Name" />
        <input className="border rounded p-2 w-full" placeholder="Email" />
        <textarea className="border rounded p-2 w-full" placeholder="Message" rows={6} />
        <button type="button" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded border border-yellow-400/40" onClick={()=>push('Message sent! We will reach out soon.')}>Send</button>
      </form>
      <div className="bg-white border rounded overflow-hidden">
        {/* Map placeholder */}
        <img src="https://st5.depositphotos.com/81161912/66752/i/450/depositphotos_667522276-stock-photo-maharashtra-look-farmer-happy-farmer.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}


