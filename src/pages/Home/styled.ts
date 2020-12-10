import styled from 'styled-components';
import ManCart from 'assets/man.png';
import Woman from 'assets/woman.png';

const StyledManCartImage = styled.img.attrs({
    src: ManCart
});

export const StyledManCart = StyledManCartImage`
  height: 60vh;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: -1;
  transform: translateY(-50%);
`;

const StyledWomanImage = styled.img.attrs({
    src: Woman
});

export const StyledWoman = StyledWomanImage`
  height: 70vh;
  position: absolute;
  top: 50%;
  right: 30px;
  z-index: -1;
  transform: translateY(-50%);
`;

const StyledText = styled.header`
    text-align: center;

    > span {
        display: block;
        color: white;
        font-size: 25px;
    }

    > .l1 {
        font-weight: 300;
        font-size: 34px;
    }

    > .l2 {
        margin-top: -30px;
        font-size: 60px;
        font-weight: 300;

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
    margin-top: 10rem;
`;
