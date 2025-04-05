import { Navigation } from '../Navigation/Navigation'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a href="#" className={styles.info}>
          © 2025 All rights reserved.
        </a>
        <Navigation />
        <a href="mailto:ask@test.capital" className={styles.info}>
          Contact us: ask@test.capital
        </a>
      </div>
    </footer>
  )
}
