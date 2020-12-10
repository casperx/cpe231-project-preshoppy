import { useEffect, useState } from 'react';
import EventCard from 'components/EventCard';
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

const PageName = () => {
    const [eventList, setEventList] = useState<EventDetail[]>([]);
    useEffect(() => {
        API.get('/event/list').then(({ data }: { data: EventDetail[] }) => {
            setEventList(data);
        });
    }, []);
    return (
        <div className='container'>
            <h1 className='mt-20'>
                <i className='fas fa-calendar-day'></i> อีเวนท์ในสัปดาห์นี้
            </h1>
            <div className='row'>
                {eventList.map((props: any) => (
                    <div className='col-6 col-md-4 col-lg-3' key={props.id}>
                        <EventCard
                            posterImage={`${APIBaseURL}/upload/event_pic/${props.eventPic}`}
                            title={props.name}
                            desc={props.detail}
                            location={props.location}
                            date={convertDateTime(props)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageName;
