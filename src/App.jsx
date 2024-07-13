import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css"

const item = {
  author: "Jaques",
  favoriteBook: "Difícil"
}

const App = () => {
  return (
    <>
      <Header/>
      <Main props={item} />
      <Footer props={{desenvolvedor: "João Victor", ano: "2024"}} />
    </>
)
}

export default App;