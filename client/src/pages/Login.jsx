import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const { data } = await axios.post('/api/auth/login', { email, password })
      login(data.token, data.user)
      const role = data.user.role
      if (role === 'farmer') navigate('/farmer')
      else if (role === 'investor') navigate('/investor')
      else navigate('/admin')
    } catch (e) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-[70vh] grid place-items-center bg-[url('https://egrowfoundation.org/site/assets/files/1277/happyfarmer.jpg')] bg-cover bg-center rounded-xl">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome back to HarvestHub</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border rounded p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded p-2">Login</button>
        </form>
      </div>
    </div>
  )
}


