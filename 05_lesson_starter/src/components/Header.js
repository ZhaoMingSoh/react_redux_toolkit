import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, getCount } from "../features/posts/postsSlice";

const Header = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);

    return (
        <header className="Header">
            <h1>Redux Blog</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Post</Link></li>
                    <li><Link to="user">Users</Link></li>
                </ul>
                {/* Everytime the count increases, the expected behaviour is for the header to rendered, but the UserPage which isn't related to the count also rendered.  */}
                <button
                    onClick={() => dispatch(increaseCount())}
                >
                    {count}
                </button>
            </nav>
        </header>
    )
}

export default Header