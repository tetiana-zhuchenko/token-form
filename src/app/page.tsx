'use client'

import styles from './page.module.css'
import { Form } from './components/Form/Form'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.formWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Token</h1>
          <h4 className={styles.description}>Create your own crypto token</h4>
        </div>
        <Form />
      </div>
    </main>
  )
}
