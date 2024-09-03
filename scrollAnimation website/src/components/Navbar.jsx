import './Navbar.css'
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  return (
    // <div className='container'>
      <nav>
        <a href="#">Logo</a>

        <div className="center-nav">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>

        <i className='menu-icon'><CiMenuFries /></i>
      </nav>
    // </div>
  )
}

export default Navbar