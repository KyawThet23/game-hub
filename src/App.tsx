import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gameGrid";
import GenreList from "./components/genreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
