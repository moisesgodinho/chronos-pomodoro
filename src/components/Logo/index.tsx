import { TimerIcon } from "lucide-react"
import styles from "./Logo.module.css"

const { logo, logoLink } = styles

export function Logo() {
  return (
    <>
      <div className={logo}>
        <a className={logoLink} href='#'>
          <TimerIcon />
          <span>Chronos</span>
        </a>
      </div>
    </>
  )
}
