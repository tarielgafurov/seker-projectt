
import styled from "styled-components";
import Slider from "react-slider";
import { useState } from "react";

const MIN = 2000;
const MAX = 10000;

const PriceFilter = () => {
  const [values, setValues] = useState([MIN, MAX]);
  console.log(values);

  return (
    <ContainerStyle>
      <BoxStyle>
        <SliderStyle>
          <Slider
          getAriaLabel={() => 'Temperature range'}
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            // color="#FC3A74"
            
          />
          <ValueIndicator leftOff={calculate(values[0], MIN, MAX)}>
            {values[0]}
          </ValueIndicator>
          <ValueIndicator leftOff={calculate(values[1], MIN, MAX)}>
            {values[1]}
          </ValueIndicator>
        </SliderStyle>
      </BoxStyle>
    </ContainerStyle>
  );
};
export default PriceFilter;

const calculate = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

const ContainerStyle = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* min-height: 100vh; */
  width: 300px;
  border-radius: 10px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const BoxStyle = styled.div`
  width: 240px;
  margin-right: 40px;
`;
const ValueIndicator = styled.div`
  position: absolute;
  top: 10px;
  left: ${({ leftOff }) => `${leftOff}%`};
  transform: translateX(-50%);
  font-weight: 500;

  font-size: 14px;
  color: #8b8787;
`;
const SliderStyle = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #FC3A74 ;
  margin-top: 40px;

  .thumb {
    width: 12px;
    height: 12px;
    cursor: grab;
    background: #f80421;
    border-radius: 50%;
    top: -6px;
    outline: none;

    &:active {
      cursor: grabbing;
    }
  }
`;
