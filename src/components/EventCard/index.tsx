import { EventDescription } from './styled';
import { EventCardProps } from './typed';

const EventCard = ({ posterImage, title, desc, date, location, onClick }: EventCardProps) => {
    return (
        <div className='card p-0 m-5' onClick={onClick} style={{ cursor: 'pointer' }}>
            <img
                src={posterImage}
                className='img-fluid rounded-top'
                alt={title}
                style={{
                    objectFit: 'cover',
                    height: '30vh',
                    width: '100%'
                }}
            />
            <div className='content'>
                <h2 className='content-title mb-0 text-truncate'>{title}</h2>
                <EventDescription>{desc}</EventDescription>
                <div className='d-flex'>
                    <i className='fas fa-calendar mr-5'></i>
                    <div className='text-truncate'>{date}</div>
                </div>
                <div className='d-flex'>
                    <i className='fas fa-map-marker-alt mr-5'></i>
                    <div className='text-truncate'>{location}</div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
