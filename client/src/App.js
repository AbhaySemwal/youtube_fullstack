import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

const Container=styled.div`
  display:flex;
`;
const Main=styled.div`
  flex:7;
  background-color: ${({theme})=>theme.bg};
`;
const Wrapper=styled.div`
  padding: 22px 96px;
`;
function App() {
  const initialTheme=localStorage.getItem("darkmode")
  const [darkMode,setDarkMode]=useState(initialTheme?initialTheme==='true'?true:false:true);
    function getThemeFromLocalStorage() {
      const savedTheme = localStorage.getItem("darkmode");
      if (savedTheme) {
        setDarkMode(savedTheme==='true'?true:false);
      }
    }
    useEffect(() => {
      getThemeFromLocalStorage();
    }, [darkMode]);
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
      <Container className="app">
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main>
            <Navbar/>
            <Wrapper>
              <Routes path="/">
                <Route index element={<Home/>}/>
                <Route path="signin" element={<Signin/>}/>
                <Route path="video">
                  <Route path=":id" element={<Video/>}/>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
