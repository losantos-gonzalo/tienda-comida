import { useEffect } from "react";
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer";
import NavBar from "./componets/NavBar/NavBar";
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <Box>
      <NavBar />
      <ItemListContainer />
    </Box>
  );
}


export default App;