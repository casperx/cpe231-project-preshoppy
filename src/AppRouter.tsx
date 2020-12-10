import { BrowserRouter as Router, Link, Switch, Route, NavLink } from 'react-router-dom';
import Logo from 'assets/logo.svg';

// Pages
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import About from 'pages/About';

const pages = [
    { name: 'Home', path: '/', Component: Home },
    { name: 'Register', path: '/register', Component: Register },
    { name: 'Login', path: '/login', Component: Login },
    { name: 'About', path: '/about', Component: About }
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
                        {pages.map(({ name, path }) => (
                            <NavLink key={path} to={path} exact component={NavItem}>
                                {name}
                            </NavLink>
                        ))}
                    </ul>
                    {/* Mobile Nav */}
                    <div className='navbar-content d-md-none ml-auto'>
                        <div className='dropdown with-arrow'>
                            <button
                                className='btn'
                                data-toggle='dropdown'
                                type='button'
                                id='navbar-mobile-dropdown'>
                                Menu <i className='fa fa-angle-down' aria-hidden='true'></i>
                            </button>
                            <div
                                className='dropdown-menu dropdown-menu-right w-200'
                                aria-labelledby='navbar-mobile-dropdown'>
                                {pages.map(({ name, path }) => (
                                    <Link key={path} to={path} className='dropdown-item'>
                                        {name}
                                    </Link>
                                ))}
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
