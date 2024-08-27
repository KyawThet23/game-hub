import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./platformIcons";
import CriticScore from "./criticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIcons
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCard;
