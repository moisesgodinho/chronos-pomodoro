import React from "react"
import styles from "./Heading.module.css"

const { heading } = styles

type HeadingProps = {
  children: React.ReactNode
}

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1 className={heading}>{children}</h1>
    </>
  )
}
