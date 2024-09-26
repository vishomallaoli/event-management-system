import { Link } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
    <header className="w-full boarder-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36">
                <Image src="/assets/images/logo.svg" alt="Event Management System Logo" width={128} height={38} />
            </Link>

            <div className="flex w-32 justify-end gap-3">
                
            </div>
        </div>
    </header>
  )
}

export default Header