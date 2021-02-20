import Link from 'next/link'
import { useState } from 'react'

import styles from '../components/Header.module.scss'

const Header = () => {
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const closeMenu = () => {
    setActive(false)
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <img onClick={closeMenu} src="logo.svg" />
          </Link>
          <nav style={isActive ? { right: '0' } : { right: '-100%' }}>
            <ul>
              <Link href="/">
                <li onClick={closeMenu}>Home</li>
              </Link>
              <Link href="/about">
                <li onClick={closeMenu}>About</li>
              </Link>{' '}
              <Link href="/contact">
                <li onClick={closeMenu}>Contact</li>
              </Link>
            </ul>
          </nav>
          <div onClick={toggleClass}>
            <span
              style={isActive ? { marginLeft: '0' } : { marginLeft: '7px' }}
            ></span>
            <span
              style={isActive ? { marginLeft: '7px' } : { marginLeft: '0' }}
            ></span>
            <span
              style={isActive ? { marginLeft: '0' } : { marginLeft: '7px' }}
            ></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
