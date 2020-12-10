interface EventDescriptionProps {
    match?: {
        params?: {
            event_id?: string;
        };
    };
}

const EventDescription = (props: EventDescriptionProps) => {
    const event_id = props?.match?.params?.event_id;
    return (
        <div className='container'>
            <h1>Template (Event: {event_id})</h1>
            <p>The quick brown fox jumps over the lazy dog.</p>
        </div>
    );
};

export default EventDescription;
