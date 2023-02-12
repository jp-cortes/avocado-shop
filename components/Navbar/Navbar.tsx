import Link from 'next/link';
import React from 'react';

 export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/" legacyBehavior><a>Home</a></Link>
                
            </li>
            
        </ul>
    </nav>
  )
}

