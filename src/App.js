import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/pages/Login'
import Cadastro from './components/pages/Cadastro'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import ViewProject from './components/pages/ViewProject'
import AddRequisitos from './components/pages/AddRequisitos'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container>

          <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/cadastro" exact element={<Cadastro />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/criar-projeto" exact element={<NewProject />} />
              <Route path="/visualizar-projeto" exact element={<ViewProject />} />
              <Route path="/add-requisitos" exact element={<AddRequisitos />} />
            <Route />
          </Routes>
          </Container>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
