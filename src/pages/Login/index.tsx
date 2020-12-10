import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from 'assets/bg.jpg';
import ManImage from 'assets/man.png';

const Login = () => {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        return () => void (document.body.style.backgroundImage = '');
    }, []);

    return (
        <div className='container'>
            <div
                className='d-flex justify-content-center align-items-center'
                style={{ minHeight: 'calc(100vh - var(--navbar-height))' }}>
                <img
                    className='hidden-sm-and-down'
                    src={ManImage}
                    alt='man'
                    style={{ maxHeight: '80vh' }}
                />
                <div>
                    <div className='card content'>
                        <h1 className='card-title text-center'>เข้าสู่ระบบ</h1>
                        <form action='#' method='POST'>
                            <div className='form-group'>
                                <label htmlFor='login_email' className='required'>
                                    อีเมล
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='login_email'
                                    placeholder='happy@preshoppy.in.th'
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='login_password' className='required'>
                                    รหัสผ่าน
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='login_password'
                                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                    required
                                />
                            </div>
                            <button className='btn btn-primary btn-block'>เข้าสู่ระบบ</button>
                            <p className='text-center'>
                                ยังไม่เป็นสมาชิก? <Link to='/register'>สมัครสมาชิกตอนนี้เลย!</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
