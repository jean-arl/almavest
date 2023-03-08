import React from "react";
import { Navbar } from "./Components";
import { Cadastro, Carrinho, Home, Login, ProdutosFem, ProdutosMasc } from "./Container";


function App() {
  return (
    <div className="App">
      < Navbar />
      < Home />
      < ProdutosFem />
      < ProdutosMasc />
      < Carrinho />
      < Cadastro />
      < Login />
    </div>
  );
}

export default App;
