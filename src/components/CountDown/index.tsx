import styles from "./CountDown.module.css"

const { countdown } = styles

export function CountDown() {
  return (
    <>
      <div className={countdown}>00:00</div>
    </>
  )
}
