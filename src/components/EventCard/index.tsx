import { EventDescription } from './styled';
import { EventCardProps } from './typed';

const EventCard = ({ posterImage, title, desc, date, location }: EventCardProps) => {
    return (
        <div className='card p-0 m-5'>
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
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <i className='fas fa-calendar mr-5'></i>
                                </td>
                                <td className='text-truncate'>{date}</td>
                            </tr>
                            <tr>
                                <td>
                                    <i className='fas fa-map-marker-alt mr-5'></i>
                                </td>
                                <td className='text-truncate'>{location}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
