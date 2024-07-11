import { Navigation } from '../Navigation/Navigation'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.info}>© 2021 All rights reserved.</p>
        <Navigation />
        <p className={styles.info}>Contact us: ask@test.capital</p>
      </div>
    </footer>
  )
}
