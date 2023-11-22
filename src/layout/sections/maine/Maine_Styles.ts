import {Theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";

const Maine = styled.section`
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    
    @media ${Theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
    @media ${Theme.media.mobile} {
     
    }
  }

`


const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  
  @media ${Theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const Text = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 20})};
  p{
    display: none;
  }
  
`
const Name = styled.h2`
${font({family:"Josefin Sans, serif", weight: 700, Fmax: 50, Fmin: 36})}

 letter-spacing: 0.05em;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${Theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
      
    }
  }
  
  @media ${Theme.media.mobile} {
  margin: 15px 0 22px ;
}
`
const SmallText = styled.h2`
  
  font-size: 14px ;
  font-weight: 400;
`
export const S = {
    Maine,
    PhotoWrapper,
    Photo,
    Name,
    Text,
    SmallText
}