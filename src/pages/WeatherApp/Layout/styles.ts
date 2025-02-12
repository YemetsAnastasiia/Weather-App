import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import mainImage from "../../../assets/mainImage.jpg"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${mainImage});
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  flex: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`

export const Header = styled.header`
  display: flex;
  position: relative;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 60px;
  background-color: rgba(47, 70, 98, 0.7);
  color: white;
`

export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  width: 150px;
  height: 40px;
  cursor: pointer;
`

export const HeaderLogoText = styled.p`
  font-size: 18px;
`
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 40px;
  margin-right: 60px;
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  flex-direction: column;
  flex: 1;
`
