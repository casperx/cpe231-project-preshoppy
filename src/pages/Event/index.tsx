import { useEffect, useState } from 'react';
import EventCard from 'components/EventCard';
import ReactModal from 'react-modal';
import API, { EventDetail, baseURL as APIBaseURL } from 'API';

const convertDateTime = ({
    startDateTime: startDateTimeRaw,
    endDateTime: endDateTimeRaw
}: EventDetail) => {
    const startDateTime = Date.parse(startDateTimeRaw);
    const endDateTime = Date.parse(endDateTimeRaw);
    return (
        new Intl.DateTimeFormat('th-TH', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
        }).format(startDateTime) +
        ' - ' +
        new Intl.DateTimeFormat('th-TH', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
        }).format(endDateTime)
    );
};

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
            <h1 className='mt-20'>
                <i className='fas fa-calendar-day'></i> อีเวนท์ในสัปดาห์นี้
            </h1>
            <div className='row'>
                {eventList.map((props: any, event_index: number) => (
                    <div className='col-6 col-md-4 col-lg-3' key={props.id}>
                        <EventCard
                            posterImage={`${APIBaseURL}/upload/event_pic/${props.eventPic}`}
                            title={props.name}
                            desc={props.detail}
                            location={props.location}
                            date={convertDateTime(props)}
                            onClick={() => getEventData(event_index)}
                        />
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
                        <h2 className='mb-0 mt-5'>{eventList[currentEvent]?.name}</h2>
                        <hr />
                        <p>{eventList[currentEvent]?.detail}</p>
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
                            src={`${APIBaseURL}/upload/event_pic/${eventList[currentEvent]?.eventPic}`}
                            alt={eventList[currentEvent]?.name}
                            className='img-fluid'
                        />
                        <div className='d-flex'>
                            <i className='fas fa-calendar mr-5'></i>
                            <div className='text-truncate'>
                                {convertDateTime(
                                    eventList[currentEvent] || {
                                        startDateTime: new Date().toString(),
                                        endDateTime: new Date().toString()
                                    }
                                )}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <i className='fas fa-map-marker-alt mr-5'></i>
                            <div className='text-truncate'>{eventList[currentEvent]?.location}</div>
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
