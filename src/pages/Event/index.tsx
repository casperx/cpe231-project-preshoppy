import EventCard from 'components/EventCard';
import Poster1Image from 'assets/poster1.jpg';
import Poster2Image from 'assets/poster2.jpg';
import Poster3Image from 'assets/poster3.jpg';
import Poster4Image from 'assets/poster4.jpg';
import { useState } from 'react';
import ReactModal from 'react-modal';

const placeholder_data = [
    {
        posterImage: Poster1Image,
        title: 'สัปดาห์หนังสือแห่งชาติ ครั้งที่ 48',
        desc: 'สัปดาห์หนังสือแห่งชาติ ครั้งที่ 48 และสัปดาห์หนังสือนานาชาติ ครั้งที่ 18',
        date: '25 มี.ค. 63 - 5 เม.ย. 63',
        location: 'อิมแพ็ค เมืองทองธานี ฮอลล์ 5-8'
    },
    {
        posterImage: Poster2Image,
        title: 'COMMART WORK',
        desc: 'COMMART WORK - Upgrade your ideas ไอทีเวิร์ค ไอเดียว้าว',
        date: '19 ธ.ค. 63 - 22 ธ.ค. 63',
        location: 'ไบเทคบางนา EH98-99'
    },
    {
        posterImage: Poster3Image,
        title: 'THAILAND GAME SHOW 2019',
        desc: 'THAILAND GAME SHOW 2019 TOMORROW',
        date: '25 ต.ค. 62 - 27 ต.ค. 62',
        location: 'Royal Paragon Hall, Fl.5 Siam Paragon'
    },
    {
        posterImage: Poster4Image,
        title: 'Picnic Market',
        desc: 'มิติใหม่แห่งการ Picnic ในห้างใหญ่ ใจกลางเมือง ยกขบวนอาหาร...',
        date: '17 ก.ย. 63 - 23 ก.ย. 63',
        location: 'Fl. 6 Central World'
    },
    {
        posterImage: Poster1Image,
        title: 'สัปดาห์หนังสือแห่งชาติ ครั้งที่ 48',
        desc: 'สัปดาห์หนังสือแห่งชาติ ครั้งที่ 48 และสัปดาห์หนังสือนานาชาติ ครั้งที่ 18',
        date: '25 มี.ค. 63 - 5 เม.ย. 63',
        location: 'อิมแพ็ค เมืองทองธานี ฮอลล์ 5-8'
    },
    {
        posterImage: Poster2Image,
        title: 'COMMART WORK',
        desc: 'COMMART WORK - Upgrade your ideas ไอทีเวิร์ค ไอเดียว้าว',
        date: '19 ธ.ค. 63 - 22 ธ.ค. 63',
        location: 'ไบเทคบางนา EH98-99'
    },
    {
        posterImage: Poster3Image,
        title: 'THAILAND GAME SHOW 2019',
        desc: 'THAILAND GAME SHOW 2019 TOMORROW',
        date: '25 ต.ค. 62 - 27 ต.ค. 62',
        location: 'Royal Paragon Hall, Fl.5 Siam Paragon'
    },
    {
        posterImage: Poster4Image,
        title: 'Picnic Market',
        desc: 'มิติใหม่แห่งการ Picnic ในห้างใหญ่ ใจกลางเมือง ยกขบวนอาหาร...',
        date: '17 ก.ย. 63 - 23 ก.ย. 63',
        location: 'Fl. 6 Central World'
    }
];

const Event = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showEventModal = () => setIsModalOpen(true);
    const hideEventModal = () => setIsModalOpen(false);

    const [currentEvent, setCurrentEvent] = useState(0);
    const getEventData = (id: number) => {
        // Fetching API
        setCurrentEvent(id);
        // Then display modal
        showEventModal();
    };

    return (
        <div className='container'>
            <h1 className='mt-20'>
                <i className='fas fa-calendar-day'></i> อีเวนท์ในสัปดาห์นี้
            </h1>
            <div className='row'>
                {placeholder_data.map((props, key) => (
                    <div className='col-6 col-md-4 col-lg-3' key={key}>
                        <EventCard {...props} onClick={() => getEventData(key)} />
                    </div>
                ))}
            </div>

            {/* Modal */}
            <ReactModal
                isOpen={isModalOpen}
                style={{
                    content: {
                        inset: 'unset',
                        width: '80rem',
                        transform: 'translate(50vw,50vh) translate(-50%, -50%)'
                    }
                }}
                onRequestClose={hideEventModal}
                closeTimeoutMS={500}
                ariaHideApp={false}>
                <div className='row'>
                    <div className='col mr-5'>
                        <h2 className='mb-0 mt-5'>{placeholder_data[currentEvent].title}</h2>
                        <hr />
                        <p>{placeholder_data[currentEvent].desc}</p>
                        <div className='row'>
                            <div className='col mr-5'>
                                <button
                                    className='btn btn-primary btn-lg btn-block mb-10'
                                    type='button'
                                    style={{
                                        height: 'unset',
                                        lineHeight: '1.7',
                                        paddingTop: '0.5rem',
                                        paddingBottom: '0.5rem'
                                    }}>
                                    <strong style={{ fontSize: '2.5rem' }}>
                                        ฉันอยากได้ของงานนี้
                                    </strong>
                                    <br />
                                    30 คนอยากได้ของในงานนี้
                                </button>
                            </div>
                            <div className='col ml-5'>
                                <button
                                    className='btn btn-primary btn-lg btn-block mb-10'
                                    type='button'
                                    style={{
                                        height: 'unset',
                                        lineHeight: '1.7',
                                        paddingTop: '0.5rem',
                                        paddingBottom: '0.5rem'
                                    }}>
                                    <strong style={{ fontSize: '2.5rem' }}>
                                        ฉันจะไปหิ้วของงานนี้
                                    </strong>
                                    <br />
                                    10 คนกำลังรับหิ้วงานนี้
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 ml-5'>
                        <img
                            src={placeholder_data[currentEvent].posterImage}
                            alt={placeholder_data[currentEvent].title}
                            className='img-fluid'
                        />
                        <div className='d-flex'>
                            <i className='fas fa-calendar mr-5'></i>
                            <div className='text-truncate'>
                                {placeholder_data[currentEvent].date}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <i className='fas fa-map-marker-alt mr-5'></i>
                            <div className='text-truncate'>
                                {placeholder_data[currentEvent].location}
                            </div>
                        </div>
                        <div className='mt-10'>
                            <button
                                className='btn btn-block mb-10'
                                type='button'
                                data-toggle='tooltip'
                                data-title='Not Implemented'>
                                ติดต่อ Organizer งานนี้
                            </button>
                            <button
                                className='btn btn-block'
                                onClick={hideEventModal}
                                type='button'>
                                กลับ
                            </button>
                        </div>
                    </div>
                </div>
                <div className='text-right mt-20'></div>
            </ReactModal>
        </div>
    );
};

export default Event;
