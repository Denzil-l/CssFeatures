import { Link } from "react-router-dom"
import './style.css'

export const Navigation = () => {
    return (
        <nav>
            <Link className="link" to={'/'}>Home</Link>
            <Link className="link" to={'/first'}>First Page</Link>
        </nav>
    )

}