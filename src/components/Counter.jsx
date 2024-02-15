import {React, useEffect, useState} from 'react'
import styled from 'styled-components';

const CounterCss = styled.div`
  width: 70%;
  display: flex;
  margin: auto;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 850px) {
    flex-direction: row;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & h4 {
    margin-block-end: 8px;
    font-size: 20px;
    text-align: center;
  }

  & span {
    color: #7b7b7b;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }
`;

const Counter = () => {
    const [pCounter, setCounter] = useState(1)

useEffect(() => {
  if (pCounter > 0 && pCounter <= 12) {
    const interval = setInterval(() => {
      setCounter((pCounter) => pCounter + 1);
    }, 1)
    return () => {
      clearInterval(interval)
    };
  }

}, [pCounter])

const [bCounter, setBCounter] = useState(1)

useEffect(() => {
  if (bCounter > 0 && bCounter <= 169) {
    const interval = setInterval(() => {
      setBCounter((bCounter) => bCounter + 1);
    }, 1)
    return () => {
      clearInterval(interval)
    };
  }

}, [bCounter])

const [eCounter, setECounter] = useState(200)

useEffect(() => {
  if (eCounter >= 0 && eCounter <= 857) {
    const interval = setInterval(() => {
      setECounter((eCounter) => eCounter + 1);
    }, 10)
    return () => {
      clearInterval(interval)
    };
  }

}, [eCounter])
  return (
    <>
    <CounterCss>
                <div className=" project project-done">
                  <h4 style={{ color: "#fb832e" }}>{pCounter}</h4>
                  <span>Project Done</span>
                </div>
                <div className=" project building-done">
                  <h4 style={{ color: "#18a7b6" }}>{bCounter}</h4>
                  <span>People Empowered</span>
                </div>
                <div className=" project total">
                  <h4 style={{ color: "#4fae2a" }}>{eCounter}</h4>
                  <span>Children imparted and supported</span>
                </div>
              </CounterCss>
    </>
  )
}

export default Counter