import { Link } from "react-router-dom" // import Link from react-router-dom

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      {/* use link here to go where you want to go */}
      <Link to='/'>Go Home</Link>
    </>
  )
}

export default NotFound;