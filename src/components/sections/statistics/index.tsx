import styled from 'styled-components'
import BodyCard from '../../card/bodyCard';

const StyleContainer = styled.div`
  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;

    h1 {
      font-size: 34px;
      color: ${({ theme }) => theme.colors.dark_violet};
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.colors.grayish_violet};
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 500;
      width: 500px;
      text-align: center;
      font-size: 15px;
    }
  }

  .statistics-body {
    display: flex;

    .seperator {
      height: 6px;
      background: ${({ theme }) => theme.colors.primary_cyan};
      flex: 0.3;
      margin-top: 120px
    }

    .card-1 {
      flex: 1;
    }
    .card-2 {
      flex: 1;
      margin-top: 30px
    }
    .card-3 {
      flex: 1;
      margin-top: 70px
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layouts.mobile}) {
    .title-section {
      width: 100%;

      h1 {
        font-size: 28px;
        margin-bottom: 20px;
      }
      p {
        width: auto;
      }
    }

    .statistics-body {
      flex-direction: column;
      align-items: center;

      .seperator {
        height: 60px;
        width: 8px;
        background: ${({ theme }) => theme.colors.primary_cyan};
        flex: none;
        margin-top: 0px
      }
  
      .card-1 {
        flex: 1;
      }
      .card-2 {
        flex: 1;
        margin-top: 30px
      }
      .card-3 {
        flex: 1;
        margin-top: 30px
      }
    }
  }
`;

const Statistics = () => {
  return (
    <StyleContainer>
      <div className='title-section'>
        <h1>Advanced Statistics</h1>
        <p>Consequat esse et et Lorem veniam elit excepteur et aute. Qui et deserunt cupidatat irure excepteur id exercitation anim.</p>
      </div>
      <div className='statistics-body'>
        <BodyCard
          className='card-1'
          icon='chart'
          title='Brand Recognition'
          description='Mollit ullamco ut nisi magna ullamco commodo id sunt. Eu nulla incididunt in consectetur. Enim consequat ut id mollit aliqua consectetur. Cillum officia ullamco aute excepteur proident laboris ea id consectetur id minim.'
        />
        <div className="seperator"/>
        <BodyCard
          className='card-2'
          icon='speed'
          title='Detailed Records'
          description='Mollit ullamco ut nisi magna ullamco commodo id sunt. Enim consequat ut id mollit aliqua consectetur. Cillum officia ullamco aute excepteur proident laboris ea id consectetur id minim.'
        />
        <div className="seperator" />
        <BodyCard
          className='card-3'
          icon='brush'
          title='Fully Customizable'
          description='Mollit ullamco ut nisi magna ullamco commodo id sunt. Eu nulla incididunt in consectetur. Enim consequat ut id mollit aliqua consectetur.'
        />
      </div>
    </StyleContainer>
  )
}

export default Statistics;
