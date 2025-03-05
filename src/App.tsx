import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "./Components/Navbar";

function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show when={isLg} fallback={null}>
        <GridItem area="aside" bg="gold">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
