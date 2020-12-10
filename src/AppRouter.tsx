import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import ProfileImage from 'assets/prof.jpg';

// Pages
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import About from 'pages/About';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Profile from 'pages/User/Profile';

const pages = [
    { name: 'หน้าหลัก', path: '/', Component: Home, displayed: true },
    { name: 'อีเวนท์', path: '/about', Component: About, displayed: true },
    { name: 'สมัครสมาชิก', path: '/register', Component: Register },
    { name: 'เข้าสู่ระบบ', path: '/login', Component: Login },
    { name: 'โปรไฟล์', path: '/user/profile', Component: Profile }
];

const NavItem = ({
    className,
    children,
    href
}: {
    className?: string;
    children: JSX.Element;
    href: string;
}) => (
    <li className={`nav-item ${className ?? ''}`}>
        <Link to={href} className='nav-link'>
            {children}
        </Link>
    </li>
);

const AppRouter = () => {
    return (
        <Router>
            <div className='page-wrapper with-navbar'>
                <nav className='navbar'>
                    <a href='/' className='navbar-brand'>
                        <img src={Logo} alt='PreShoppy' />
                    </a>
                    {/* Desktop Nav */}
                    <ul className='navbar-nav d-none d-md-flex'>
                        {pages
                            .filter((e) => e.displayed)
                            .map(({ name, path }) => (
                                <NavLink key={path} to={path} exact component={NavItem}>
                                    {name}
                                </NavLink>
                            ))}
                    </ul>
                    <ul className='navbar-nav d-none d-md-flex ml-auto'>
                        {/* This is for when login แล้ว */}
                        <li className='nav-item'>
                            <Link
                                to='/chat'
                                className='nav-link'
                                style={{ textDecoration: 'none' }}>
                                <i className='fas fa-comment'></i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <div className='dropdown'>
                                <a
                                    href='#'
                                    data-toggle='dropdown'
                                    id='avatar-popover-toggle'
                                    aria-haspopup='true'
                                    aria-expanded='false'>
                                    <img
                                        src={ProfileImage}
                                        className='rounded-circle'
                                        alt='Profile'
                                        style={{
                                            height: '3rem',
                                            position: 'relative',
                                            top: '10px'
                                        }}
                                    />
                                </a>
                                <div
                                    className='dropdown-menu dropdown-menu-center'
                                    aria-labelledby='avatar-popover-toggle'>
                                    <Link to='/user/profile' className='dropdown-item'>
                                        บัญชีของฉัน
                                    </Link>
                                    <Link to='/user/transactions' className='dropdown-item'>
                                        การซื้อของฉัน
                                    </Link>
                                    <div className='dropdown-divider'></div>
                                    <Link to='/logout' className='dropdown-item'>
                                        ออกจากระบบ
                                    </Link>
                                </div>
                            </div>
                        </li>
                        {/* This is for when ยังไม่ล็อกอิน */}
                        <li className='nav-item'>
                            <NavLink to='/register' exact component={NavItem}>
                                สมัครสมาชิก
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/login' exact component={NavItem}>
                                เข้าสู่ระบบ
                            </NavLink>
                        </li>
                    </ul>
                    {/* Mobile Nav */}
                    <div className='navbar-content d-md-none ml-auto'>
                        <div className='dropdown'>
                            <button
                                className='btn btn-action'
                                type='button'
                                data-toggle='dropdown'
                                id='navbar-mobile-dropdown'>
                                <i className='fa fa-bars' aria-hidden='true'></i>
                                <span className='sr-only'>Toggle navbar</span>
                            </button>
                            <div
                                className='dropdown-menu dropdown-menu-right w-200'
                                aria-labelledby='navbar-mobile-dropdown'>
                                {pages
                                    .filter((e) => e.displayed)
                                    .map(({ name, path }) => (
                                        <Link key={path} to={path} className='dropdown-item'>
                                            {name}
                                        </Link>
                                    ))}
                                <div className='dropdown-divider'></div>
                                <Link to='/register' className='dropdown-item'>
                                    สมัครสมาชิก
                                </Link>
                                <Link to='/login' className='dropdown-item'>
                                    เข้าสู่ระบบ
                                </Link>
                                <div className='dropdown-divider'></div>
                                <Link to='/user/profile' className='dropdown-item'>
                                    แชท
                                </Link>
                                <Link to='/user/profile' className='dropdown-item'>
                                    บัญชีของฉัน
                                </Link>
                                <Link to='/user/transactions' className='dropdown-item'>
                                    การซื้อของฉัน
                                </Link>
                                <div className='dropdown-divider'></div>
                                <Link to='/logout' className='dropdown-item'>
                                    ออกจากระบบ
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className='content-wrapper'>
                    <Switch>
                        {pages.map(({ Component, path }) => (
                            <Route key={path} path={path} exact>
                                <Component />
                            </Route>
                        ))}
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;
