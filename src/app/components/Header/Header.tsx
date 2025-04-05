import Image from 'next/image'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.wrapper}>
        <Image
          src={logo}
          alt="logo"
          width={122}
          height={26}
          className={styles.logo}
        />
        <h3 className={styles.text}>Next.js Application</h3>
      </div>
    </header>
  )
}
