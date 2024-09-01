import UseData from "./useData";
import { Genre } from "./useGenre";
import { Platform as platform } from "../hooks/usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (
  selectedGenre: Genre | null,
  seletedPaltform: platform | null
) =>
  UseData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: seletedPaltform?.id } },
    [selectedGenre?.id, seletedPaltform?.id]
  );

export default useGames;
