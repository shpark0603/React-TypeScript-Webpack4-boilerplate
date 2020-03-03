import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ITimeContainerProps {
  color?: string;
}

const StyledCurrentTime = styled.div<ITimeContainerProps>`
  font-family: "Courier New", Courier, monospace;
  position: fixed;
  right: 20px;
  top: 20px;

  .title {
    font-size: 2rem;
  }

  .time {
    color: ${props => (props.color ? props.color : "inherit")};
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

function CurrentTime({ color }: ITimeContainerProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <StyledCurrentTime color={color}>
      <p className="title">Current Time</p>
      <p className="time">{time.toLocaleString()}</p>
    </StyledCurrentTime>
  );
}

export default CurrentTime;
