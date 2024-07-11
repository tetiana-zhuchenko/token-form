import Image from 'next/image'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Image
        src={logo}
        alt="logo"
        width={122}
        height={50.7}
        className={styles.logo}
      />
    </header>
  )
}
