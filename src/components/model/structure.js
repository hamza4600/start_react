import styled from "styled-components";

import { forwardRef, memo } from "react";

const Model1 = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  top: 2.2rem;
  left: 0;
  width: 100vw;
  height: 98vh;
  z-index: 1000;
  background-color: #00243D;
  color: #fff;
`;

export const ModelOne = memo(forwardRef(
    function ModelOne(props, ref) {
        const { children } = props;
        return (
            <Model1 ref={ref} {...props}>
                {children}
            </Model1>
        )
    }
))

const Model2 = styled.div`
  overflow: hidden;
  position: relative;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 6rem;
  z-index: ${(props) => (props.show ? "-1" : "")};
`;

export const ModelTwo = memo(forwardRef(
    function ModelTwo(props, ref) {
        return (
            <Model2 ref={ref} show={props.show} {...props}>
                {props.children}
            </Model2>
        )
    }
))