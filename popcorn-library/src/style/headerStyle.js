import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display : flex;
  background-color: ${props => props.theme.primaryColor || null};
`
export const LogoStyled = styled.div`
  flex-grow : 0.25;
  flex : 1;
  text-align: center;
  background-color : ${props => props.theme.secondaryColor || null};
  cursor : pointer;
`
export const ImgStyled = styled.img`
  display : inline-block;
  vertical-align: middle;
  max-width : 100px;
  max-height : 50%;
  margin-right : 10px;
`

export const H1Styled = styled.h1`
  display : inline-block;
  vertical-align: middle;
  font-size : 1.8rem;
`
