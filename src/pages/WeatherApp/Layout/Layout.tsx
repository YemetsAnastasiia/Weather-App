import { useNavigate } from "react-router-dom"
import { LayoutProps } from "./type"

import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogoText,
  NavContainer,
  StyledNavLink,
  Main,
} from "./styles"



function Layout({ children }: LayoutProps) {

  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogoText>Weather App</HeaderLogoText>
          </HeaderLogoContainer>
          <NavContainer>
            <StyledNavLink
              style={({ isActive }: { isActive: boolean }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/"
            >
              Home
            </StyledNavLink>
            <StyledNavLink
              style={({ isActive }: { isActive: boolean }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/weatherHistory"
            >
              History
            </StyledNavLink>
          </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
