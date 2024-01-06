import { ReactNode } from "react"

type HeaderProps = {
  title: string
  image: string
  children: ReactNode
}

const Header = (props: HeaderProps) => {
  return (
   <header className="header">
    <div className="header__container">
        <div className="header__container-bg">
            <img src={props.image} alt="Header Background Image" />
        </div>
        <div className="header__content">
        <h2>{props.title}</h2>
        <p>{props.children}</p>
        </div>
    </div>
   </header>
  )
}

export default Header