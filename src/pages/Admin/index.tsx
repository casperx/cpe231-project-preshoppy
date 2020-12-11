import { useEffect } from 'react';
import { hideNavbar, showNavbar } from 'helpers/navbar';
import { hideBackground, showBackground } from 'helpers/background';

const AdminLogin = () => {
    useEffect(() => {
        showBackground();
        hideNavbar();
        return () => {
            hideBackground();
            showNavbar();
        };
    }, []);

    return (
        <div className='container'>
            <div
                className='d-flex justify-content-center align-items-center'
                style={{ minHeight: 'calc(100vh - var(--navbar-height))' }}>
                <div>
                    <div className='card content'>
                        <h1 className='card-title text-center p-5'>เข้าสู่ระบบแอดมิน</h1>
                        <form action='/admin/dashboard' method='GET'>
                            <div className='form-group'>
                                <label htmlFor='AdminLogin_email' className='required'>
                                    อีเมล
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='AdminLogin_email'
                                    placeholder='happy@preshoppy.in.th'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='AdminLogin_password' className='required'>
                                    รหัสผ่าน
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='AdminLogin_password'
                                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                />
                            </div>
                            <button className='btn btn-primary btn-block'>เข้าสู่ระบบ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
