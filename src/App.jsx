import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./components/ItemDetail/ItemDetail.css";
import "./components/ItemCount/ItemCount.css";
import { CartContextProvider } from "./components/context/CartContext";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Box>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer texto="soy un texto de contex" />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/producto/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </Box>
  );
}

export default App;
// manianan
// Run 1 45m v
// Run 2 45m v

//tarde
// Run 3 45m v
// Run 4 45m x
