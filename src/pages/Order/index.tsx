import { useState } from 'react';
import Swal from 'sweetalert2';
interface OrderItem {
    name: string;
    description: string;
    quantity: number;
    price: number;
}

const Order = () => {
    const [currentOrder, setCurrentOrder] = useState<OrderItem[]>([]);

    const alertFinish = () => Swal.fire('การสั่งซื้อสำเร็จ!', undefined, 'success');

    return (
        <div className='container mt-20'>
            <div className='card'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <h2>รายละเอียดการสั่งซื้อ</h2>
                            <ul>
                                <li>Order Id: 80124918024691</li>
                                <li>Merchant ID: 192465129746</li>
                            </ul>
                            <hr />
                            <div className='table-responsive'>
                                <table className='table table-outer-bordered'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ชื่อสินค้า</th>
                                            <th>รายละเอียด</th>
                                            <th className='text-right'>จำนวน</th>
                                            <th className='text-right'>ราคารวม</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrder.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.description}</td>
                                                <td className='text-right'>{item.quantity}</td>
                                                <td className='text-right'>
                                                    {item.quantity * item.price}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3}>&nbsp;</td>
                                            <td className='text-right'>รวมราคา</td>
                                            <td className='text-right'>
                                                {currentOrder.reduce(
                                                    (total, { quantity, price }) =>
                                                        total + quantity * price,
                                                    0
                                                )}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className='card'>
                            <h2 className='m-0'>ที่อยู่</h2>
                            <p className='m-0' style={{ fontSize: '1.25em' }}>
                                เฮฮา ปาจิงโกะ (0855555555)
                                <br />
                                สุขสันต์อพาร์ทเมนต์ ตึก LOL ห้อง 555
                                <br />
                                55 ถ.อย่าหาทำ ซ.กรามค้าง 55
                                <br />
                                แขวงเส้นตื้น เขตทุ่งลาเวนเดอร์ กรุงเทพฯ
                                <br />
                                55555
                            </p>
                        </div>
                    </div>
                    <div className='col card'>
                        <h2 className='m-0'>ช่องทางการชำระเงิน</h2>
                        <button
                            className='btn btn-lg btn-block mb-5'
                            type='button'
                            disabled
                            data-toggle='tooltip'
                            data-title='ยังไม่เปิดให้บริการ'>
                            VISA
                        </button>
                        <button
                            className='btn btn-lg btn-block mb-5'
                            type='button'
                            disabled
                            data-toggle='tooltip'
                            data-title='ยังไม่เปิดให้บริการ'>
                            Mastercard
                        </button>
                        <button
                            className='btn btn-lg btn-block mb-5'
                            type='button'
                            disabled
                            data-toggle='tooltip'
                            data-title='ยังไม่เปิดให้บริการ'>
                            Maestro
                        </button>
                        <button
                            className='btn btn-lg btn-block mb-5'
                            type='button'
                            disabled
                            data-toggle='tooltip'
                            data-title='ยังไม่เปิดให้บริการ'>
                            Promptpay
                        </button>
                        <button className='btn btn-secondary btn-lg btn-block mb-5' type='button'>
                            ชำระปลายทาง
                        </button>
                        <hr className='my-20' />
                        <button
                            className='btn btn-primary btn-lg btn-block mb-5'
                            type='button'
                            onClick={alertFinish}>
                            ดำเนินการต่อ &raquo;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
