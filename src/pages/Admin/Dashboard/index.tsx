import API, { EventDetail } from 'API';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminDashboard = () => {
    const location = useHistory();
    const [eventList, setEventList] = useState<EventDetail[]>([]);
    useEffect(() => {
        API.get('/event/list')
            .then(({ data }: { data: EventDetail[] }) => {
                setEventList(data);
            })
            .catch((_e) => setEventList([]));
    }, []);

    const confirmDelete = (eventId: number) => {
        Swal.fire({
            title: 'ต้องการลบหรือไม่?',
            text: 'การลบนี้จะไม่สามารถกู้คืนข้อมูลกลับได้',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ลบ',
            cancelButtonText: 'ยกเลิก',
            customClass: {
                confirmButton: 'btn',
                cancelButton: 'btn btn-primary'
            },
            confirmButtonColor: '#fff',
            cancelButtonColor: '#FE604A'
        }).then((result) => {
            // delete

            // show complete status
            if (result.isConfirmed) {
                API.post(`/event/delete/${eventId}`).then(() => {
                    Swal.fire('', 'อีเวนท์ถูกลบแล้ว', 'success');
                });
            }
        });
    };

    return (
        <div className='container'>
            <div className='row align-items-center mt-10'>
                <div className='col'>
                    <h1 className='m-0'>รายการอีเวนท์</h1>
                </div>
                <div className='col-auto'>
                    <button
                        className='btn btn-primary'
                        onClick={() => location.push('/admin/dashboard/event/add')}>
                        <i className='fas fa-plus'></i> เพิ่มอีเวนท์ใหม่
                    </button>
                </div>
            </div>
            <div className='table-responsive'>
                <table className='table table-hover table-outer-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ชื่ออีเวนท์</th>
                            <th className='text-right'>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventList.map((e, i) => (
                            <tr>
                                <th>{i + 1}</th>
                                <td>{e.name}</td>
                                <td className='text-right'>
                                    <button
                                        className='btn mr-5'
                                        type='button'
                                        onClick={() =>
                                            location.push(`/admin/dashboard/event/edit/${e.id}`)
                                        }>
                                        <i className='fas fa-edit'></i> แก้ไข
                                    </button>
                                    <button className='btn' type='button'>
                                        <i className='fas fa-trash'></i> ลบ
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
