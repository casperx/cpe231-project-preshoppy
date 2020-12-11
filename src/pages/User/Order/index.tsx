import { useState, useEffect } from 'react';
import API, { baseURL as APIBaseURL, UserDetail } from 'API';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Order = () => {
    const [pictureUrl, setPictureUrl] = useState('');

    useEffect(() => {
        API.get('/user/info/1').then((res) => {
            const detail = res.data as UserDetail;
            setPictureUrl(detail.profilePic);
        });
    }, []);

    const enterTrackingNumber = () => {
        Swal.fire({
            title: 'กรุณากรอกเลขพัสดุที่ต้องการบันทึก',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'บันทึก',
            cancelButtonText: 'ยกเลิก',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn'
            },
            confirmButtonColor: '#FE604A',
            cancelButtonColor: '#fff',
            showLoaderOnConfirm: true,
            preConfirm: (input) => {
                // return fetch(`/URL_HERE/${input}`)
                //     .then((response) => {
                //         if (!response.ok) {
                //             throw new Error(response.statusText);
                //         }
                //         return response.json();
                //     })
                //     .catch((error) => {
                //         Swal.showValidationMessage(`เกิดข้อผิดพลาด: ${error}`);
                //     });
                return;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('บันทึกสำเร็จ!', undefined, 'success');
            }
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
                            <Link to='/user/profile' className='dropdown-item'>
                                บัญชีของฉัน
                            </Link>
                            <Link to='/user/order' className='dropdown-item'>
                                การซื้อของฉัน
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md'>
                    <div className='card'>
                        <div className='row'>
                            <div className='col'>
                                <h2 className='m-0'>Order ID: #231726817648971</h2>
                            </div>
                            <div className='col-auto'>
                                <h2 className='m-0 text-primary'>999฿</h2>
                            </div>
                        </div>
                        <p>
                            <b>สถานะ:</b> รอบันทึกเลขพัสดุ
                        </p>
                        <p>ตรงนี้ใส่ว่าซื้ออะไรไปบ้างแบบคร่าวๆ</p>
                        <hr />
                        <div className='text-right'>
                            <Link to='/order/---ใส่เลข_id---' className='btn mr-5'>
                                ชำระเงิน
                            </Link>
                            <button className='btn mr-5' onClick={enterTrackingNumber}>
                                บันทึกเลขพัสดุ
                            </button>
                            <Link to='/chat' className='btn mr-5'>
                                แชทกับผู้ขาย
                            </Link>
                            <button className='btn'>ดูข้อมูล</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
