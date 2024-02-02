import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header_box">
        <div className="logo"><img src="src\assets\pflogo.png" alt="okay" /></div>
        
        <Link style={{textDecoration:'none'}} to='/Projects'><div className="contact contact_btn">Projects</div></Link>
    </div>
  )
}

export default Header