import { PageContainer } from 'components/PageContainer';
import { CenterHorizontalContainer } from 'components/CenterHorizontalContainer';
import { Button } from 'components/Standard';
import { TopBar } from 'components/TopBar';
import { BgHome, StyledManCart, StyledWoman, AdjustedText, AdjustedLink } from './styled';

const Home: React.FC = () => {
    return (
        <BgHome>
            <PageContainer>
                <TopBar />
            </PageContainer>
            <PageContainer>
                <StyledManCart />
                <StyledWoman />
                <CenterHorizontalContainer>
                    <AdjustedText>
                        <p className='l1'>ทำให้ชีวิตการช็อปของคุณ</p>
                        <p className='l2'>
                            <big>ง่าย</big>และ<big>ปลอดภัย</big>
                        </p>
                        <p className='l3'>
                            ด้วย <strong>PreShoppy</strong>
                        </p>
                    </AdjustedText>
                    <AdjustedLink to='/event'>
                        <Button>ดูอีเวนท์ในสัปดาห์นี้ »</Button>
                    </AdjustedLink>
                </CenterHorizontalContainer>
            </PageContainer>
        </BgHome>
    );
};

export default Home;
