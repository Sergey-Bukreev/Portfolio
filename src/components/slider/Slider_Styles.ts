import styled from "styled-components";
import {Theme} from "../../styles/Theme";

const Slider = styled.div`

  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`

  text-align: center;
`
const Text = styled.p``
const Name = styled.span`
  font-family: Josefin Sans, serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`
const Pagination = styled.div`
span {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20%;
  & + span {
    margin-left: 5px;
  }
  &.active {
    background-color: ${Theme.colors.accent};
    width: 20px;
  }
}
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}