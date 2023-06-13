import Header from "./components/Header"
import GlobalStyles from "./components/styles/Global"
import { ThemeProvider } from "styled-components"
import Stats from "./components/Stats"
import Container from "./components/styles/Container.styled"
import { Content } from "./components/Content"
import Card from "./components/Card"
import LastSection from "./components/LastSection"
import Footer from "./components/Footer"

const theme = {
  mobile: '875px'
}

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
          <GlobalStyles />
          <Header />
          <Stats />
          <Container>
            {Content.map((item, index) => (
              <Card key={index} item={item}/>
              ))}
          </Container>
          <LastSection />
          <Footer />
      </>
    </ThemeProvider>
  )
}


