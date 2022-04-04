import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

// const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {

    return (
        <div>
            <header>
                {/* <NavLink to="/" className={setActive}>Home</NavLink>
                <NavLink to="/blog"  className={setActive}>Blog</NavLink>
                <NavLink to="/about"  className={setActive}>About</NavLink> */}
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <Outlet />

            <footer>2022</footer>
        </div>
    );
};

export { Layout };