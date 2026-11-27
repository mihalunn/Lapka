import { Calendar, House, Users } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router'

import styles from './AppLayout.module.css'

const sections = [
  { to: '/overview', label: 'Обзор', Icon: House },
  { to: '/calendar', label: 'Календарь', Icon: Calendar },
  { to: '/family', label: 'Семья', Icon: Users },
] as const

export function AppLayout() {
  return (
    <div className={styles.app}>
      <div className={styles.shell}>
        <div className={styles.sidebar}>
          <Link className={styles.logo} to="/overview">
            Lapka
          </Link>
          <nav className={styles.nav}>
            {sections.map((section) => (
              <NavLink className={styles.link} key={section.to} to={section.to}>
                <section.Icon aria-hidden="true" className={styles.icon} />
                <span className={styles.label}>{section.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
