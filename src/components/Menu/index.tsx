import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./Menu.module.css"

const { menu, menuLink } = styles

export function Menu() {
  return (
    <>
      <nav className={menu}>
        <a className={menuLink} href='#'>
          <HouseIcon />
        </a>
        <a className={menuLink} href='#'>
          <HistoryIcon />
        </a>
        <a className={menuLink} href='#'>
          <SettingsIcon />
        </a>
        <a className={menuLink} href='#'>
          <SunIcon />
        </a>
      </nav>
    </>
  )
}
