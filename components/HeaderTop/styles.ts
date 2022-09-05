import styled from 'styled-components';

export const Container = styled.header`
  border-bottom: 1px solid rgb(219, 219, 219);
  margin-bottom: 30px;

  > div {
    max-width: 935px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;

    > .logoImage {
      width: 103px;
    }

    > .searchInput {
      background-color: rgb(239, 239, 239);
      width: 268px;
      height: 36px;
      padding: 0 16px;
      justify-content: flex-start;
      border-radius: 8px;
      color: #8e8e8e;
      gap: 15px;

      @media only screen and (max-width: 680px) {
        display: none;
      }
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 22px;

      > div {
        position: relative;

        &::after {
          background: rgb(255, 48, 65);
          border-radius: 2px;
          bottom: -10px;
          content: '';
          height: 4px;
          width: 4px;
          margin: 0 auto;
          position: absolute;
          bottom: -5px;
          left: calc(50% - 2px);
          display: block;
        }
      }

      @media only screen and (max-width: 680px) {
        gap: 12px;
      }

      > .profileImage {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
`;
