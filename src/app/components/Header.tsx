import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header style={{ background: 'white' }}>
      <div className="container">
        <div className="header-content flex justify-between items-center" style={{ padding: '10px 0' }}>
          <div className="logo">
            <Link href={'/'}>
              <Image src='/logo.png' width={220} height={50} alt='React Component Playground' priority />
            </Link>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <a href="https://moulik.vercel.app/" target='_blank'>About me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header