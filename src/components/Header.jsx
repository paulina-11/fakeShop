import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' style={{ textDecoration: 'none', color: '#000' }}>
        <h1 className='header__title'>FakeShop</h1>
      </Link>
    </header>
  )
}

export default Header
