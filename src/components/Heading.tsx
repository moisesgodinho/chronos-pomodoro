import styles from "./Heading.module.css"

const { heading } = styles

type HeadingProps = {
  children: string
}

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1 className={heading}>{children}</h1>
    </>
  )
}
