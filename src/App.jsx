import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import NavBar from "./componets/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {

  return (
    <Box>
      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />

        </Routes>
      </BrowserRouter>
    </Box>
  );
}


export default App;