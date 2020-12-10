import { useState, ChangeEvent, useEffect, useMemo } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import ProfileImage from 'assets/prof.jpg';

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

const Profile = () => {
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

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3 p-20'>
                    <img
                        className='d-block img-fluid rounded-circle'
                        src={ProfileImage}
                        alt='profile'
                    />
                    <div className='dropdown show d-block mt-20'>
                        <div
                            className='dropdown-menu'
                            style={{
                                position: 'static',
                                transform: 'none',
                                width: '100%',
                                minWidth: '100%'
                            }}>
                            <a href='#' className='dropdown-item'>
                                บัญชีของฉัน
                            </a>
                            <a href='#' className='dropdown-item'>
                                การซื้อของฉัน
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md'>
                    <div className='card'>
                        <h1 className='card-title'>ข้อมูลส่วนตัว</h1>
                        <form action='#' className='form-inline'>
                            <div className='form-group'>
                                <label htmlFor='prof_firstname' className='w-100'>
                                    ชื่อจริง
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='prof_firstname'
                                    placeholder='แฮปปี้'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='prof_lastname' className='w-100'>
                                    นามสกุล
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='prof_lastname'
                                    placeholder='พรีชอปปี้'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='prof_email' className='required w-100'>
                                    อีเมล
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='prof_email'
                                    placeholder='happy@preshoppy.in.th'
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='prof_tel' className='w-100'>
                                    เบอร์โทรศัพท์
                                </label>
                                <input
                                    type='tel'
                                    className='form-control'
                                    id='prof_tel'
                                    placeholder='0812345679'
                                />
                            </div>
                            <div className='form-group mb-0'>
                                <button className='btn btn-primary ml-auto'>บันทึกข้อมูล</button>
                            </div>
                        </form>
                    </div>
                    <div className='card'>
                        <h1 className='card-title'>เปลี่ยนรหัสผ่าน</h1>
                        <form action='#' className='form-inline'>
                            <div className='form-group'>
                                <label htmlFor='prof_old_password' className='required w-100'>
                                    รหัสผ่านเก่า
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='prof_old_password'
                                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='prof_new_password' className='required w-100'>
                                    รหัสผ่านใหม่
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='prof_new_password'
                                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                    required
                                    onChange={passwordHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <PasswordStrengthBar
                                    password={password}
                                    scoreWords={passwordCheckerWords.scoreWords}
                                    shortScoreWord={passwordCheckerWords.shortScoreWord}
                                    className='w-full'
                                    style={{
                                        marginLeft:
                                            'calc(10rem + var(--form-inline-horizontal-margin))'
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <label
                                    htmlFor='prof_confirm_new_password'
                                    className='required w-100'>
                                    ยืนยันรหัสใหม่
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='prof_confirm_new_password'
                                    placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
                                    required
                                    onChange={confirmPasswordHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <div
                                    className='text-right w-full'
                                    style={{
                                        marginLeft:
                                            'calc(10rem + var(--form-inline-horizontal-margin))'
                                    }}>
                                    {passwordMatchStatus}
                                </div>
                            </div>
                            <div className='form-group mb-0'>
                                <button className='btn btn-primary ml-auto'>เปลี่ยนรหัสผ่าน</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
