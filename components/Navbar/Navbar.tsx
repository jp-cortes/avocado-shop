import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/" legacyBehavior><a>Home</a></Link>
                
            </li>
            <li>
                <Link href="/about" legacyBehavior><a>About</a></Link>

            </li>
        </ul>
    </nav>
  )
}

export default Navbar