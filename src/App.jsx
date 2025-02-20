import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import NavBar from "./componets/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PageNotFound from "./componets/PageNotFound/PageNotFound";
import './componets/ItemDetail/ItemDetail.css'
import './componets/ItemCount/ItemCount.css'
import { CartContextProvider } from "./componets/context/CartContext";
import Cart from "./componets/cart/Cart";

function App() {

  return (
    <Box>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer texto='soy un texto de contex' />} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </Box>
  );
}


export default App;