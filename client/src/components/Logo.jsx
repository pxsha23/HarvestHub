export default function Logo({ size = 32 }) {
  // Place your logo at client/public/logo.png
  // If missing, we render a simple green-gold leaf mark.
  return (
    <img
      src="/logo.png"
      alt="HarvestHub"
      width={size}
      height={size}
      onError={(e)=>{
        e.currentTarget.outerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient></defs><path fill="url(#g)" d="M12 2a9 9 0 1 0 0 18c2.5 0 4.75-1 6.36-2.64C15 16 13 12 13 8c-3 1-5 3-6 6 0-5 4-9 9-9 0 0-1.5-3-4-3Z"/></svg>`
      }}
      className="inline-block"
    />
  )
}


