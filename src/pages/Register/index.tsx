import { useState, ChangeEvent, FormEvent, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';
import API from 'API';
import BackgroundImage from 'assets/bg.jpg';
import WomanImage from 'assets/woman.png';

const passwordCheckerWords = {
    scoreWords: [
        'ไม่ปลอดภัย 😱',
        'ยังไม่ค่อยดีนะ 😓',
        'ได้อยู่ 😐',
        'ค่อนข้างดีเลย 😉',
        'สุดยอดไปเลย 🤩'
    ],
    shortScoreWord: 'สั้นไปหน่อยนะ 🤔'
};

const Register = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState('');
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const [confirmPassword, setConfirmPassword] = useState('');
    const confirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const passwordMatchStatus = useMemo(() => {
        if (password === '' && confirmPassword === '') return 'รหัสผ่านทั้งสองช่องต้องตรงกัน';
        if (password !== confirmPassword) return 'รหัสผ่านไม่ตรงกัน 😮';
        return 'รหัสผ่านตรงกัน 😎';
    }, [password, confirmPassword]);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${BackgroundImage})`;
        return () => void (document.body.style.backgroundImage = '');
    }, []);

    const formHandler = (e: FormEvent) => {
        e.preventDefault();
        API.post('/auth/create', {
            email,
            password
        })
            .then(() => {
                history.push('/login');
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
                <div>
                    <div className='card content'>
                        <h1 className='card-title text-center'>สมัครสมาชิก</h1>
                        <form action='#' method='POST' onSubmit={formHandler}>
                            <div className='form-group'>
                                <label htmlFor='regis_email' className='required'>
                                    อีเมล
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='regis_email'
                                    placeholder='happy@preshoppy.in.th'
                                    required
                                    onChange={emailHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='regis_password' className='required'>
                                    รหัสผ่าน
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='regis_password'
                                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                    required
                                    onChange={passwordHandler}
                                />
                            </div>
                            <PasswordStrengthBar
                                password={password}
                                scoreWords={passwordCheckerWords.scoreWords}
                                shortScoreWord={passwordCheckerWords.shortScoreWord}
                            />
                            <div className='form-group'>
                                <label htmlFor='regis_confirm_password' className='required'>
                                    ยืนยันรหัสผ่านอีกครั้ง
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='regis_confirm_password'
                                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                    required
                                    onChange={confirmPasswordHandler}
                                />
                                <div className='form-text text-right'>{passwordMatchStatus}</div>
                            </div>
                            <button className='btn btn-primary btn-block'>สมัครสมาชิก</button>
                            <p className='text-center'>
                                การกดปุ่ม "สมัครสมาชิก" ถือว่าท่าน
                                <br />
                                ได้ยอมรับ
                                <a href='#'>ข้อกำหนดและเงื่อนไขการใช้งาน</a>ของ PreShoppy
                            </p>
                        </form>
                    </div>
                </div>
                <img
                    className='hidden-sm-and-down'
                    src={WomanImage}
                    alt='woman'
                    style={{ maxHeight: '80vh' }}
                />
            </div>
        </div>
    );
};

export default Register;
