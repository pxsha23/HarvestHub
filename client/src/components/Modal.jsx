export default function Modal({ open, onClose, title, children, actions }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-lg shadow-xl w-full max-w-md p-5 animate-[fadeIn_.2s_ease]">
        <div className="text-lg font-semibold">{title}</div>
        <div className="mt-3">{children}</div>
        <div className="mt-5 flex justify-end gap-2">
          {actions}
        </div>
      </div>
    </div>
  )
}


