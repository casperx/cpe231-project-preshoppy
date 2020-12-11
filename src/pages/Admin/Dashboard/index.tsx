import API, { EventDetail } from 'API';
import { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [eventList, setEventList] = useState<EventDetail[]>([]);
    useEffect(() => {
        API.get('/event/list')
            .then(({ data }: { data: EventDetail[] }) => {
                setEventList(data);
            })
            .catch((_e) => setEventList([]));
    }, []);

    return (
        <div className='container'>
            <div className='row align-items-center mt-10'>
                <div className='col'>
                    <h1 className='m-0'>รายการอีเวนท์</h1>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-primary'>
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
                                    <button className='btn mr-5' type='button'>
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
