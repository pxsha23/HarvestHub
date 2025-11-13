import Accordion from '../components/Accordion.jsx'

export default function FAQ(){
  const items = [
    { q: 'How does investing work?', a: 'Lorem ipsum agrum fidelis. You choose a farm, invest, and profit post-harvest.' },
    { q: 'Is my money safe?', a: 'We perform checks with farmers. Secure escrow vibes. Cropzor guardus.' },
    { q: 'When do I get profits?', a: 'After harvest cycles. Payout schedules depend on the crop season.' }
  ]
  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h1>
      <Accordion items={items} />
    </div>
  )
}


