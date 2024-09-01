import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Theme";
import "./index.css";
import { Menu } from "./components/Slidebar";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

import Search from "./pages/Search";
import { Profile } from "./pages/Profile";
import { DisplayPodcast } from "./pages/DisplayPodcast";
import Favourites from "./pages/Favourite";



const Container = styled.div`
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true); // Corrected syntax here

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        {menuOpen && (
          <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} setDarkMode={setDarkMode} darkMode={darkMode} />
        )}

        <Frame>
          <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
          <Routes>
            <Route path="/"  element={<Dashboard/>}/>
            <Route path="/search"  element={<Search/>}/>
            <Route path="/favourites"  element={<Favourites/>}/>
            <Route path="/profile"  element={<Profile/>}/>
            <Route path="/podcast/:id"  element={<Dashboard/>}/>
            <Route path="/showpodcasts/:type"  element={<DisplayPodcast/>}/>
          </Routes>
        </Frame>
      </Container>
    </ThemeProvider>
  );
};

export default App;
