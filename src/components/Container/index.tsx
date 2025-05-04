import React from "react"
import styles from "./Container.module.css"

const { container, content } = styles

type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className={container}>
      <div className={content}>
        <section>{children}</section>
      </div>
    </div>
  )
}
