import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '../../../components/mode-toggle'

export default function Home() {
  return (
    <div className="flex gap-2 items-center p-2">
      <UserButton afterSignOutUrl='/' />
      <ModeToggle />
    </div>
  )
}
