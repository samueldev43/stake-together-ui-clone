'use client'
import Image from 'next/image'
import style from './style.module.scss'
import {ButtonLink} from '../ButtonLink/ButtonLink'

import {ChevronDown, Menu} from 'lucide-react'
import {useState} from 'react'

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)  

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={style.container}>
      <div className={style.menuContainer}>
        <a href="#">
          <Image width={200} height={37} src={"/network/logo-full.svg"} alt='Stake Together' loading='lazy' />
        </a>

        <div className={`${style.hamburgerMenu}  ${isMenuOpen ? style.hamburgerMenuOpen : '' }`}>
          <button className={style.toggleButton} onClick={toggleMenu}>
            <Menu style={isMenuOpen ? {color: '#ffffff'} : {color: ''}}/>
          </button>
        </div>

        <nav className={style.navigation}>
          <div className={style.dropdownToggleBox}>
            <span>PT</span>
            <ChevronDown size={16} />
          </div>
          <ButtonLink type={'w-link'} text={'Investir no App'} />
        </nav>

        {isMenuOpen ?
         <nav className={` ${style.navigationMobile} ${style.menuOpen}`}>
          <div className={style.dropdownToggleBox}>
            <span>PT</span>
            <ChevronDown size={16} />
          </div>
          <ButtonLink type={'w-link'} text={'Investir no App'} />
        </nav>
        :
        <nav className={` ${style.navigationMobile} ${style.menuClosed}`}>
          <div className={style.dropdownToggleBox}>
            <span>PT</span>
            <ChevronDown size={16} />
          </div>
          <ButtonLink type={'w-link'} text={'Investir no App'} />
        </nav>
        }
      </div>
    </header>
  )
}