import { useToast } from './ToastProvider.jsx'

export default function Footer() {
  const { push } = useToast()
  return (
    <footer className="mt-16 border-t bg-white/80">
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold text-lg">HarvestHub</div>
          <p className="text-sm text-gray-600 mt-2">Farm-first investing for a greener yield. Ipsum agrum fidelis.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Newsletter</div>
          <div className="flex gap-2">
            <input className="border rounded p-2 flex-1" placeholder="Your email" />
            <button className="px-3 bg-green-600 hover:bg-green-700 text-white rounded border border-yellow-400/40" onClick={()=>push('Subscribed! Welcome to HarvestHub.')}>Join</button>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Social</div>
          <div className="flex gap-3 text-gray-600">
            <span>🐦</span><span>📘</span><span>📸</span>
          </div>
        </div>
      </div>
    </footer>
  )
}


