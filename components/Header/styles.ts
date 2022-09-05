import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 44px;

  > .content {
    display: flex;
    gap: 30px;
    border-bottom: 1px solid rgb(219, 219, 219);
    padding-bottom: 44px;

    @media only screen and (max-width: 680px) {
      flex-direction: column;
      margin-top: -30px;
    }

    > .image {
      width: 290px;
      display: flex;
      justify-content: center;
      margin-top: 60px;

      @media only screen and (max-width: 680px) {
        align-items: center;
        width: 100%;
      }

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        width: 166px;
        height: 166px;
        overflow: hidden;
        background-color: rgb(250, 250, 250);

        > div {
          overflow: hidden;
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }

        &::after {
          border: 2px solid #dbdbdb;
          border-radius: 50%;
          content: '';
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          position: absolute;
        }
      }
    }

    > .content-info {
      > h2 {
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: normal;
        display: flex;
        align-items: center;

        > a {
          border: 1px solid rgb(219, 219, 219);
          color: rgb(38, 38, 38);
          padding: 5px 9px;
          font-size: 14px;
          border-radius: 4px;
          margin-left: 20px;
          font-weight: 600;
        }
      }

      @media only screen and (max-width: 680px) {
        > h2 {
          font-size: 24px;
        }
      }

      > .info {
        display: flex;
        margin-bottom: 20px;

        > div {
          margin-right: 40px;
          font-size: 16px;
        }
      }

      > .contact {
        > strong {
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
        }

        > p {
          font-size: 15px;
          margin: 5px 0;
          max-width: 600px;
        }
      }
    }
  }
`;
