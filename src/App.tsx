import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gameGrid";
import GenreList from "./components/genreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSearch from "./components/platformSearch";
import { Platform } from "./hooks/usePlatform";

function App() {

  const [selectedGenre,setSelectedGenre] = useState<Genre | null>(null);
  const [seletedPaltform,setPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSearch selectedPlatform={seletedPaltform} onSelectPlatform={(platform) => setPlatform(platform)}/>
        <GameGrid seletedPaltform={seletedPaltform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
