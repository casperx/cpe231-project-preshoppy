import React from 'react';
import styled from 'styled-components';

import PageContainer from 'components/PageContainer';
import CenterHorizontalContainer from 'components/CenterHorizontalContainer';
import { NormalLink, Button } from 'components/Standard';

import TopBar from 'components/TopBar';

import ManCart from './man-cart.png';
import Woman from './woman.png';

const BgHome = styled.div`
  background-color: #ff7220;
  height: 100vh;
`;

const StyledManCartImage = styled.img.attrs(
  {
    src: ManCart
  }
);
const StyledManCart = StyledManCartImage`
  height: 400px;
  position: absolute;
  top: 160px;
  left: 0;
`;

const StyledWomanImage = styled.img.attrs(
  {
    src: Woman
  }
);
const StyledWoman = StyledWomanImage`
  height: 550px;
  position: absolute;
  top: 100px;
  right: 30px;
`;

const StyledText = styled.header`
  text-align: center;
  font-size: 25px;
  font-weight: 200;
  color: white;
  > p {
    margin: 0;
  }
  > .l1 {
    font-size: 34px;
  }
  > .l2 {
    margin-top: -30px;
    font-size: 60px;
    > big {
      font-size: 80px;
      font-weight: 500;
    }
  }
  > .l3 {
    margin-top: -25px;
    font-size: 42px;
    font-weight: 300;
    > strong {
      font-weight: 500;
    }
  }
`;

const AdjustedText = styled(StyledText)`
  margin-top: 50px;
`;

const AdjustedLink = styled(NormalLink)`
  margin-top: 50px;
`;

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
            <p className='l2'><big>ง่าย</big>และ<big>ปลอดภัย</big></p>
            <p className='l3'>ด้วย <strong>PreShoppy</strong></p>
          </AdjustedText>
          <AdjustedLink to='/event'>
            <Button>ดูอีเวนท์ในสัปดาห์นี้ »</Button>
          </AdjustedLink>
        </CenterHorizontalContainer>
      </PageContainer>
    </BgHome>
  );
}

export default Home;
