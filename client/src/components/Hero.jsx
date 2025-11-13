export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-xl ring-1 ring-yellow-400/30">
      {/* REPLACE_HERO_IMAGE_HERE */}
      <img src="https://www.nicheagriculture.com/wp-content/uploads/2023/09/Are-agriculture-and-farming-the-same-Agriculture-vs-Farming-1024x680.jpg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative bg-gradient-to-t from-black/60 via-emerald-900/20 to-transparent">
        {/* <div className="max-w-6xl mx-auto px-6 py-24 text-white"> */}
        <div className="max-w-6xl mx-auto px-6 py-24 text-white">

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">HarvestHub</h1>
            <p className="mt-4 text-lg md:text-xl">“Every field tells a story of hard work, hope, and heart. At HarvestHub, we connect farmers and investors to grow dreams together from soil to success.
          </p>
            <div className="mt-8 flex gap-3">
              <a href="/signup" className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg border border-yellow-400/40">Join as Farmer</a>
              <a href="/farms" className="px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg">Invest Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


