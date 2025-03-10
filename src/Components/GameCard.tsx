import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      maxW="300px"
      borderRadius={10}
      overflow="hidden"
      height="100%" // ✅ Ensures all cards have the same height
      display="flex"
      flexDirection="column"
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody display="flex" flexDirection="column" flex="1">
        <CardHeader padding={0}>
          <Text fontSize="2xl" fontWeight="bold">
            {game.name}
          </Text>
        </CardHeader>
        <HStack justifyContent="space-between" marginTop="auto">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
