import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
        <section>
                <Link href="/about" legacyBehavior><a>About</a></Link>

        </section>
        <section>
            Credits
        </section>

    </footer>
  )
}
