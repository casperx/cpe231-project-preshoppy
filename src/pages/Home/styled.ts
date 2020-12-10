import styled from 'styled-components';
import { NormalLink } from 'components/Standard';
import ManCart from 'assets/man.png';
import Woman from 'assets/woman.png';

export const BgHome = styled.div`
    background-color: #ff7220;
    height: 100vh;
`;

const StyledManCartImage = styled.img.attrs({
    src: ManCart
});

export const StyledManCart = StyledManCartImage`
  height: 400px;
  position: absolute;
  top: 160px;
  left: 0;
`;

const StyledWomanImage = styled.img.attrs({
    src: Woman
});

export const StyledWoman = StyledWomanImage`
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

export const AdjustedText = styled(StyledText)`
    margin-top: 50px;
`;

export const AdjustedLink = styled(NormalLink)`
    margin-top: 50px;
`;
