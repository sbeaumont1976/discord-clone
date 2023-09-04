import Image from 'next/image'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone</p>
      <Button variant="ghost" className="bg-red-500 text-white">Click me</Button>
    </div>
  )
}
