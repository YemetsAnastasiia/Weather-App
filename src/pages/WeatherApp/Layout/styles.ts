import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
/*   background-image: url('/assets/mainImage.jpg'); */ 
background-color: aquamarine;
  flex: 1;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
  height: fit-content;
  background-color: #122d4d26;
  color: white;
`

export const HeaderLogoContainer = styled.div`
 width: 100px;
  height: 40px;
  cursor: pointer;
`

export const HeaderLogoText = styled.p`
 font-size: 20px;
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`

export const NavContainer = styled.div`
display: flex;
  gap: 10px;`

export const Main = styled.div`
 display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  
  `
