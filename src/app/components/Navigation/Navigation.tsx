import { initialNavLinks } from '../../../../data/initialNavLinks'
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        {initialNavLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href} className={styles.navLink}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
