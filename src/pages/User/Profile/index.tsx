import { useState, ChangeEvent, useEffect, useMemo, FormEvent } from 'react';
import API, { baseURL as APIBaseURL, UserDetail } from 'API';
import PasswordStrengthBar from 'react-password-strength-bar';
import Swal from 'sweetalert2';

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
    const [email, setEmail] = useState('');
    const [emailChange, setEmailChange] = useState(false);
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailChange(true);
    };

    const [firstName, setFirstName] = useState('');
    const [firstNameChange, setFirstNameChange] = useState(false);
    const firstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        setFirstNameChange(true);
    };

    const [lastName, setLastName] = useState('');
    const [lastNameChange, setLastNameChange] = useState(false);
    const lastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
        setLastNameChange(true);
    };

    const [tel, setTel] = useState('');
    const [telChange, setTelChange] = useState(false);
    const telHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTel(e.target.value);
        setTelChange(true);
    };

    const [profilePic, setProfilePic] = useState<File | undefined>(undefined);
    const profilePicHandler = (e: ChangeEvent<HTMLInputElement>) =>
        void setProfilePic(e.target?.files?.[0]);

    const [password, setPassword] = useState('');
    const [passwordChange, setPasswordChange] = useState(false);
    const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordChange(true);
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

    const [pictureUrl, setPictureUrl] = useState('');

    useEffect(() => {
        API.get('/user/info/1').then((res) => {
            const detail = res.data as UserDetail;
            setEmail(detail.email);
            setFirstName(detail.firstName);
            setLastName(detail.lastName);
            setTel(detail.tel);
            setPictureUrl(detail.profilePic);
        });
    }, []);

    const formHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData();
        if (emailChange) data.append('email', email);
        if (passwordChange) data.append('password', password);
        if (firstNameChange) data.append('firstName', firstName);
        if (lastNameChange) data.append('lastName', lastName);
        if (telChange) data.append('tel', tel);
        if (profilePic !== undefined) data.append('profilePic', profilePic);
        API.post('/user/edit/1', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                Swal.fire('แก้ไขสำเร็จ', 'ข้อมูลของท่านถูกแก้ไขแล้ว', 'success').then(() =>
                    location.reload()
                );
            })
            .catch((e) => {
                Swal.fire('เกิดข้อผิดพลาด', 'เกิดข้อผิดพลาด กรุณาลองใหม่', 'error');
            });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3 p-20'>
                    <img
                        className='d-block img-fluid rounded-circle'
                        src={`${APIBaseURL}/upload/profile_pic/${pictureUrl}`}
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
                        <form action='#' className='form-inline' onSubmit={formHandler}>
                            <div className='form-group'>
                                <label htmlFor='prof_firstname' className='w-100'>
                                    ชื่อจริง
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='prof_firstname'
                                    placeholder='แฮปปี้'
                                    onChange={firstNameHandler}
                                    value={firstName}
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
                                    onChange={lastNameHandler}
                                    value={lastName}
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
                                    onChange={emailHandler}
                                    value={email}
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
                                    onChange={telHandler}
                                    value={tel}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='w-100'>รูปภาพโพรไฟล์</label>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        id='prof_profile'
                                        accept='.jpg,.jpeg,.png,.bmp,.gif,.webp'
                                        onChange={profilePicHandler}
                                    />
                                    <label htmlFor='prof_profile'>เลือกไฟล์...</label>
                                </div>
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
