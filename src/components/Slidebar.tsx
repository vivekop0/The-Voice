import styled from "styled-components";
import { HomeRounded, CloseRounded, SvgIconComponent, SearchRounded, FavoriteRounded,  LightModeRounded, LogoutRounded, DarkModeRounded, CloudUploadRounded } from "@mui/icons-material";
import LogoImage from "../images/Logo (1).png";
import { Link } from "react-router-dom";

// Styled Components
const MenuContainer = styled.div<{ menuOpen: boolean }>`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + "50"};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
`;

const Flex = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: 86%;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;

const Image = styled.img`
  height: 40px;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

// Menu Component
export const Menu = ({
  setMenuOpen,
  setDarkMode,
  darkMode,
  menuOpen
}: {
  setMenuOpen:(mode: boolean) => void;
  setDarkMode: (mode: boolean) => void;
  darkMode: boolean;
  menuOpen:boolean
}) => {
  // Menu Items
  type MenuItem = {
    link: string;
    name: string;
    icon: SvgIconComponent;
  };

  const menuItems: MenuItem[] = [
    {
      link: '/',
      name: 'Dashboard',
      icon: HomeRounded,
    },
    {
      link: '/search',
      name: 'Search',
      icon: SearchRounded,
    },
    {
      link: '/favourites',
      name: 'Favourites',
      icon: FavoriteRounded,
    },
  ];

  // Button Items
  type ButtonType = {
    fun: () => void;
    name: string;
    icon: SvgIconComponent;
  };

  const button: ButtonType[] = [
    {
      fun: () => console.log("upload"),
      name: 'Upload',
      icon: CloudUploadRounded,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? LightModeRounded:DarkModeRounded
    },
    {
      fun: () => console.log("logout"),
      name: 'Logout',
      icon: LogoutRounded,
    },
  ];

  return (
    <MenuContainer className="MenuContainer" menuOpen={menuOpen}>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          THE VOICE
        </Logo>
        <Close onClick={()=> setMenuOpen(false)}>
          <CloseRounded />
        </Close>
      </Flex>

      {menuItems.map((item, index) => (
        <Link to={item.link} key={index}>
          <Elements>
            <item.icon />
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}

      <HR />

      {button.map((item, index) => (
        <Elements onClick={item.fun} key={index}>
          <item.icon />
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};
