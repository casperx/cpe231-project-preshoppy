import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';
import Logo from 'assets/logo.svg';
import API, { baseURL as APIBaseURL, UserDetail } from 'API';

// Pages
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Event from 'pages/Event';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Profile from 'pages/User/Profile';
import Order from 'pages/User/Order';
import Admin from 'pages/Admin';
import AdminDashboard from 'pages/Admin/Dashboard';
import AdminCreateEvent from 'pages/Admin/Dashboard/create_event';
import AdminEditEvent from 'pages/Admin/Dashboard/edit_event';
import Chat from 'pages/Chat';
import Pay from 'pages/Order';
import { useEffect, useState } from 'react';

const pages = [
    { name: 'หน้าหลัก', path: '/', Component: Home, displayed: true },
    { name: 'อีเวนท์', path: '/event', Component: Event, displayed: true },
    { name: 'สมัครสมาชิก', path: '/register', Component: Register },
    { name: 'เข้าสู่ระบบ', path: '/login', Component: Login },
    { name: 'โปรไฟล์', path: '/user/profile', Component: Profile },
    { name: 'ออร์เดอร์', path: '/user/order', Component: Order },
    { name: 'ล็อกอินหลังบ้าน', path: '/admin', Component: Admin },
    { name: 'หลังบ้าน', path: '/admin/dashboard', Component: AdminDashboard },
    { name: 'เพิ่มอีเวนท์', path: '/admin/dashboard/event/add', Component: AdminCreateEvent },
    { name: 'แก้อีเวนท์', path: '/admin/dashboard/event/edit/:id', Component: AdminEditEvent },
    { name: 'แชท', path: '/chat', Component: Chat },
    { name: 'จ่ายเงิน', path: '/order/:order_id', Component: Pay }
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
    const [pictureUrl, setPictureUrl] = useState('');

    useEffect(() => {
        API.get('/user/info/1').then((res) => {
            const detail = res.data as UserDetail;
            setPictureUrl(detail.profilePic);
        });
    }, []);

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
                                        src={`${APIBaseURL}/upload/profile_pic/${pictureUrl}`}
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
                                    <Link to='/user/order' className='dropdown-item'>
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
                        <NavLink to='/register' exact component={NavItem}>
                            สมัครสมาชิก
                        </NavLink>
                        <NavLink to='/login' exact component={NavItem}>
                            เข้าสู่ระบบ
                        </NavLink>
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
                                <Link to='/user/order' className='dropdown-item'>
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
                            <Route key={path} path={path} exact component={Component}></Route>
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
