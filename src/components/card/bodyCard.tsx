import styled from 'styled-components'
import { AiOutlineLineChart } from 'react-icons/ai';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { GiPencilBrush } from 'react-icons/gi';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 350px;
  height: 250px;
  border-radius: 5px;
  padding: 25px;
  position: relative;

  h5 {
    color: ${({ theme }) => theme.colors.primary_dark_violet};
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    color: ${({ theme }) => theme.colors.grayish_violet};
    font-weight: 500;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  .icon {
    font-size: 35px;
    color: ${({ theme }) => theme.colors.primary_cyan};
    background: ${({ theme }) => theme.colors.primary_dark_violet};
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 30px;
    margin-top: -60px;
    margin-bottom: 25px;
  }
`;

const BodyCard = () => {
  return (
    <StyleContainer>
      <div className="icon">
        {/* <AiOutlineLineChart /> */}
        {/* <IoSpeedometerOutline /> */}
        <GiPencilBrush />
      </div>
      <h5>Brand Recognition</h5>
      <p>Mollit ullamco ut nisi magna ullamco commodo id sunt. Eu nulla incididunt in consectetur. Enim consequat ut id mollit aliqua consectetur. Cillum officia ullamco aute excepteur proident laboris ea id consectetur id minim.</p>
    </StyleContainer>
  )
}

export default BodyCard;
