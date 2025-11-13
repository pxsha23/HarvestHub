import { useState } from 'react'

const FACTS = [
  // 🌾 Agriculture Market Facts
  "India’s agriculture sector contributes around 18% of the GDP and employs 40% of the population.",
  "Agri-tech startups in India have attracted over $1 billion in funding since 2020.",
  "Precision farming and drone-based crop monitoring are expected to boost global farm productivity by up to 25% by 2030.",
  "Agricultural exports from India crossed $50 billion in 2023 — the highest ever.",
  "Wheat, rice, and sugar make up over 50% of India’s agricultural export value.",
  "Agrochemicals and biofertilizers markets in India are growing at 8–10% annually.",
  "Greenhouses and vertical farming could make urban agriculture worth $30 billion globally by 2032.",
  "Climate-smart agriculture investments are projected to exceed $200 billion globally by 2030.",
  "The global organic food market is valued at over $220 billion, growing at 10% per year.",
  "Food processing contributes more than 10% of India’s manufacturing output.",
  "Israel produces some of the world’s highest crop yields using AI and drip irrigation despite limited water.",
  "Agricultural drones are predicted to be a $6 billion industry by 2030.",
  "Hydroponics and aquaponics can reduce water use by up to 90% compared to traditional farming.",
  "Coffee is the world’s second-most traded commodity after crude oil.",
  "India is the largest producer of spices, accounting for 48% of global output.",

  // 💰 Investment & Finance Facts
  "Impact investing — funds with social or environmental goals — has crossed $1.5 trillion globally.",
  "The agriculture investment market is expected to reach $15 trillion by 2030.",
  "Agri ETFs and green bonds are becoming popular tools for sustainable investors.",
  "Renewable energy in rural India is attracting $25+ billion in FDI for decentralized power systems.",
  "Commodity markets let investors trade futures in crops like wheat, coffee, and soybeans — worth $4 trillion annually.",
  "Carbon credit trading has become a new income stream for farmers adopting sustainable practices.",
  "Institutional investors like pension funds are increasingly buying farmland for long-term returns.",
  "Agricultural REITs allow small investors to own stakes in farmland portfolios.",
  "Microfinance and rural fintech are empowering small farmers through digital lending.",
  "Sustainable investing (ESG) now represents over 36% of all global assets under management.",
  "Agri-insurance helps farmers mitigate climate risks and is a $20 billion global market.",
  "Food tech and agri innovation funds are among the top-performing venture segments in Asia.",
  "The Indian government’s NABARD has financed over ₹7 lakh crore worth of agri and rural projects.",
  "Vertical farming companies are now receiving investments from major VC firms like SoftBank and Sequoia.",
  "Agri commodities like soybeans and corn are key indicators for inflation and global food security trends."
];


export default function RandomFact(){
  const [fact, setFact] = useState(FACTS[Math.floor(Math.random()*FACTS.length)])
  const next = () => setFact(FACTS[Math.floor(Math.random()*FACTS.length)])
  return (
    <div>
      <div className="text-xs uppercase text-emerald-700 font-semibold">Agri Fact</div>
      <div className="mt-1 text-sm text-emerald-900">{fact}</div>
      <button className="mt-2 text-xs px-2 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700" onClick={next}>New fact</button>
    </div>
  )
}


