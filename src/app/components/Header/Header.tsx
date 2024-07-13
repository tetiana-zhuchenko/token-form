import Image from 'next/image'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

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
