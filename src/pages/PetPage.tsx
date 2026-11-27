import { useParams } from 'react-router'

import styles from './section.module.css'

export function PetPage() {
  const { petId } = useParams()

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Питомец</h1>
      <p className={styles.text}>{petId}</p>
    </main>
  )
}
