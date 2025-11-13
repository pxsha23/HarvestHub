export function formatINR(amount){
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number(amount||0))
  } catch {
    return `₹${amount}`
  }
}


