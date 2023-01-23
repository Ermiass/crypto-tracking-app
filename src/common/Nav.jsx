import styled, {keyframes} from 'styled-components'
import  device  from "./config/mediaQueries"

const scrolling = keyframes `
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`

export const InfoHead = styled.div `
  position: relative;
  height: 40px;
  width: 100vw;
  border-bottom: 1px solid gold;
  border-top: 1px solid gold;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
`

export const InfoContainer = styled.div `
  position: absolute;
  overflow: hidden;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items:center;
  transform: translateX(-100%);
  animation: ${scrolling} 50s linear infinite;
  @media ${device.xs} {
    animation: ${scrolling} 35s linear infinite;
    width: 280%;
  }
  @media ${device.sm} {
    animation: ${scrolling} 35s linear infinite;
    width: 190%;
  }
  @media ${device.lg} {
    animation: ${scrolling} 50s linear infinite;
    width: 100%; 
  }
`

export const Stats = styled.h4 `
  color: gold;
  font-weight: normal;
  @media ${device.xs} {
    font-size: 0.875rem;
  }
  @media ${device.md} {
    font-size: 0.875rem;
  }
  @media ${device.xl} {
    font-size: 1rem;
  }
`

export const DataColor = styled.span `
  color: #4C7CE0;
  margin-left: .7rem;
`

export const CryptoStyling = styled.span `
  font-weight: 400;
  color: ${props => props.type};
  margin-left: .7rem;
`