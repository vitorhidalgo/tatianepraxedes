import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Container = styled.div`
  background-color: ${colors.lightGray.hexa};
  position: relative;
  /* height: 590px; */

  .content{
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;

    img{
      margin-top: 20px;
      height: auto;
    }
  }

  h2{
    text-align: left;
    line-height: 1;
  }

  h3{
    font-weight: normal;
    /* line-height: 32px; */
    text-align: left;
  }

  @media only screen and (max-width: 770px){
    height: auto;
    padding: 40px 0;

    .content{
      flex-wrap: wrap;
    }

    h2{
      line-height: 1;
      text-align: center;

    }

    h3{
      /* line-height: 32px; */
      font-size: 17px;
      text-align: center;
    }

    p{
      text-align: center;
    }

    img{
      margin: 20px auto 20px auto;
    }
  }
`;

export const Left = styled.div`
    width: 58%;
    padding: 50px 0;

    @media only screen and (max-width: 770px){
      width: 100%;
      padding: 0;
    }
`;

export const Right = styled.div`
  width: 36%;
  padding: 0;
  right: 0;

  img {
    margin-top: 0 !important;
    border-radius: 8px;
  }

  @media only screen and (max-width: 770px){
    width: 50%;
    padding: 0;
    position: relative;
    margin: 0 auto;
  }

  @media only screen and (max-width: 600px){
    width: 100%;
  }
`;