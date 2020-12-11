import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hideBackground, showBackground } from 'helpers/background';
import { StyledManCart, StyledWoman, AdjustedText } from './styled';

const Home = () => {
    useEffect(() => {
        showBackground();
        return () => hideBackground();
    }, []);

    return (
        <div className='container' style={{ position: 'relative' }}>
            <StyledManCart className='d-none d-md-block' />
            <StyledWoman className='d-none d-md-block' />
            <div className='d-flex justify-content-center flex-column'>
                <AdjustedText>
                    <span className='l1'>ทำให้ชีวิตการช้อปของคุณ</span>
                    <span className='l2'>
                        <big>ง่าย</big>และ<big>ปลอดภัย</big>
                    </span>
                    <span className='l3'>
                        ด้วย <strong>PreShoppy</strong>
                    </span>
                    <Link to='/event' className='btn btn-lg mt-15'>
                        ดูอีเวนท์ในสัปดาห์นี้ »
                    </Link>
                </AdjustedText>
            </div>
        </div>
    );
};

export default Home;
