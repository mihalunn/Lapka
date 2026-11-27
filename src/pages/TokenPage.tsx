import styles from '../App.module.css'

const colorTokens = [
  ['color-brand-600', 'brand-600'],
  ['color-brand-100', 'brand-100'],
  ['color-accent-500', 'accent-500'],
  ['color-canvas', 'canvas'],
  ['color-surface', 'surface'],
  ['color-text-primary', 'text-primary'],
  ['color-text-secondary', 'text-secondary'],
  ['color-border', 'border'],
] as const

const spaceTokens = [
  'space-1',
  'space-2',
  'space-3',
  'space-4',
  'space-6',
  'space-8',
] as const

const radiusTokens = [
  'radius-sm',
  'radius-md',
  'radius-lg',
  'radius-full',
] as const

export function TokenPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>Токены</h1>
      <p className={styles.text}>Служебная страница foundations.</p>

      <section aria-labelledby="colors-heading">
        <h2 className={styles.heading} id="colors-heading">
          Цвета
        </h2>
        <ul className={styles.list}>
          {colorTokens.map(([name, swatch]) => (
            <li className={styles.item} key={name}>
              <span className={`${styles.mark} ${styles[swatch]}`} />
              <span className={styles.text}>{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="space-heading">
        <h2 className={styles.heading} id="space-heading">
          Отступы
        </h2>
        <ul className={styles.list}>
          {spaceTokens.map((name) => (
            <li className={styles.item} key={name}>
              <span className={`${styles.bar} ${styles[name]}`} />
              <span className={styles.text}>{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="radius-heading">
        <h2 className={styles.heading} id="radius-heading">
          Радиусы
        </h2>
        <ul className={styles.list}>
          {radiusTokens.map((name) => (
            <li className={styles.item} key={name}>
              <span className={`${styles.mark} ${styles[name]}`} />
              <span className={styles.text}>{name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="font-heading">
        <h2 className={styles.heading} id="font-heading">
          Шрифт
        </h2>
        <p className={`${styles.text} ${styles['font-sample']}`}>font-sans</p>
      </section>

      <section aria-label="Демонстрация" className={styles.demo}>
        <p className={styles.text}>Поверхность</p>
        <p className={styles['demo-text']}>Текст</p>
        <p className={styles['accent-row']}>
          <span aria-hidden="true" className={styles['accent-swatch']} />
          Акцент
        </p>
      </section>
    </main>
  )
}
