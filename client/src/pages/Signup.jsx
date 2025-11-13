import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('investor')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const { data } = await axios.post('/api/auth/signup', { name, email, password, role })
      login(data.token, data.user)
      if (role === 'farmer') navigate('/farmer')
      else if (role === 'investor') navigate('/investor')
      else navigate('/admin')
    } catch (e) {
      setError('Signup failed')
    }
  }

  return (
    <div className="min-h-[70vh] grid place-items-center bg-[url('https://kids.earth.org/wp-content/uploads/2022/04/Untitled-1024-%C3%97-768px-17-900x675.jpg')] bg-cover bg-center rounded-xl">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create your HarvestHub account</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border rounded p-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <select className="w-full border rounded p-2" value={role} onChange={e=>setRole(e.target.value)}>
            <option value="farmer">Farmer</option>
            <option value="investor">Investor</option>
            <option value="admin">Admin</option>
          </select>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded p-2">Sign up</button>
        </form>
      </div>
    </div>
  )
}


