import styled, { css } from "styled-components";

const invertedBtnStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleBtnStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: none;
  &:hover {
    background-color: #357ae8;
  }
`;

const standardBtnStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    color: white;
    background-color: black;
  }
`;
const getBtnsStyles = (props) => {
  if (props.isGoogleSignin) {
    return googleBtnStyles;
  }

  return props.inverted ? invertedBtnStyles : standardBtnStyles;
};
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  ${getBtnsStyles}
`;
