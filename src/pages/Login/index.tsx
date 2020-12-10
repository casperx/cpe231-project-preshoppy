import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from 'API';
import BackgroundImage from 'assets/bg.jpg';
import ManImage from 'assets/man.png';

const Login = () => {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        return () => void (document.body.style.backgroundImage = '');
    }, []);

    const history = useHistory();

    const [email, setEmail] = useState('');
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState('');
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const formHandler = (e: FormEvent) => {
        e.preventDefault();
        API.post('/auth/login', {
            email,
            password
        })
            .then(({ data }: { data: any }) => {
                history.push('/');
            })
            .catch((e) => {
                console.log(e);
            });
    };

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
                        <form action='#' method='POST' onSubmit={formHandler}>
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
                                    onChange={emailHandler}
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
                                    onChange={passwordHandler}
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
