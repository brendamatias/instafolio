import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  margin-top: 48px;

  > div {
    text-align: center;

    > span {
      display: block;
      margin-top: 15px;
      font-size: 14px;
      font-weight: 700;
    }

    > .image {
      display: flex;
      justify-content: center;

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        width: 87px;
        height: 87px;
        overflow: hidden;
        background-color: rgb(250, 250, 250);

        > div {
          width: 77px;
          height: 77px;
          border-radius: 50%;
          background-color: #e65d5c;
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
  }

  @media only screen and (max-width: 680px) {
    overflow-x: auto;
    padding-bottom: 20px;

    &:hover::-webkit-scrollbar-thumb {
      background: rgb(0, 55, 107);
    }

    ::-webkit-scrollbar {
      height: 4px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgb(0, 55, 107);
    }
  }
`;
