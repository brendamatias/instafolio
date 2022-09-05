import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  > div {
    &:first-child {
      padding-right: 60px;
      border-right: 1px solid rgb(219, 219, 219);

      @media only screen and (max-width: 600px) {
        border-right: none;
        padding: 0 20px;
        border-bottom: 1px solid rgb(219, 219, 219);
      }
    }

    &:last-child {
      padding-left: 60px;

      @media only screen and (max-width: 600px) {
        padding: 40px 20px 0 20px;
      }
    }

    > div {
      > .title {
        display: inline-block;
        border: 1px solid rgb(219, 219, 219);
        color: rgb(38, 38, 38);
        padding: 5px 9px;
        font-size: 16px;
        border-radius: 4px;
        font-weight: 600;
        margin-bottom: 40px;
      }

      &.experience,
      &.education {
        color: #444;

        h6 {
          margin-top: 8px;
          margin-bottom: 20px;
          font-size: 12px;
          color: #999;
          font-weight: 100;
        }

        p {
          margin-bottom: 40px;
          text-align: justify;
          color: #444;
        }
      }

      &.education {
        h6 {
          margin-bottom: 40px;
        }
      }
    }
  }
`;
