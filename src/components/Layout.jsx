import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

// const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {

    return (
        <div className='header-wrapper'>
            <header className='container'>
                {/* <NavLink to="/" className={setActive}>Home</NavLink>
                <NavLink to="/blog"  className={setActive}>Blog</NavLink>
                <NavLink to="/about"  className={setActive}>About</NavLink> */}
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <Outlet />

        </div>
    );
};

export { Layout };