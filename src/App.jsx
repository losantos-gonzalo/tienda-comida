import ItemDetailContainer from "./componets/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import NavBar from "./componets/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PageNotFound from "./componets/PageNotFound/PageNotFound";

function App() {

  return (
    <Box>
      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/producto/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </Box>
  );
}


export default App;