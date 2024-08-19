import { Link } from "react-router-dom"; // import Link from react-router-dom

const NavBar = () => {
  // return a nav with a ul and li for each link; notice the use of Link from react-router-dom
  // the to prop is the path you want to go to
  return (<nav>
    <ul>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/'>Dashboard</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='https://www.reddit.com/'>Reddit</Link></li>
    </ul>
  </nav>
  )
}

export default NavBar;