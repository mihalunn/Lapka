import { Link } from 'react-router'

import styles from './section.module.css'

export function NotFoundPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Страница не найдена</h1>
      <Link className={styles.link} to="/overview">
        Обзор
      </Link>
    </main>
  )
}
