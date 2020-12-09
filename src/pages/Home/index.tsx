import { PageContainer } from 'components/PageContainer';
import { CenterHorizontalContainer } from 'components/CenterHorizontalContainer';
import { Button } from 'components/Standard';
import { TopBar } from 'components/TopBar';
import { BgHome, StyledManCart, StyledWoman, AdjustedText, AdjustedLink } from './styled';

const OldHome: React.FC = () => {
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

const Home = () => {
    return (
        <div className='container'>
            <h1>This is the Homepage</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur inventore ut
                corrupti error magni rerum, commodi temporibus quasi labore vel illo debitis
                consequuntur dolore tenetur a ipsum, veniam assumenda doloremque!
            </p>
        </div>
    );
};

export default Home;
