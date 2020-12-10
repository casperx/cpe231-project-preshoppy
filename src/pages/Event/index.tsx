import EventCard from 'components/EventCard';
import Poster1Image from 'assets/poster1.jpg';
import Poster2Image from 'assets/poster2.jpg';
import Poster3Image from 'assets/poster3.jpg';
import Poster4Image from 'assets/poster4.jpg';

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

const PageName = () => {
    return (
        <div className='container'>
            <h1 className='mt-20'>
                <i className='fas fa-calendar-day'></i> อีเวนท์ในสัปดาห์นี้
            </h1>
            <div className='row'>
                {placeholder_data.map((props, key) => (
                    <div className='col-6 col-md-4 col-lg-3' key={props.title + key}>
                        <EventCard {...props} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageName;
