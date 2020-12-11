import { useState, useEffect } from 'react';
import API, { baseURL as APIBaseURL, UserDetail } from 'API';
import { Link } from 'react-router-dom';

const Order = () => {
    const [pictureUrl, setPictureUrl] = useState('');

    useEffect(() => {
        API.get('/user/info/1').then((res) => {
            const detail = res.data as UserDetail;
            setPictureUrl(detail.profilePic);
        });
    }, []);

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
                            <Link to='/user/profile' className='dropdown-item'>
                                บัญชีของฉัน
                            </Link>
                            <Link to='/user/order' className='dropdown-item'>
                                การซื้อของฉัน
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md'>LOL</div>
            </div>
        </div>
    );
};

export default Order;
