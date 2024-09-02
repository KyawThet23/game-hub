import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import UseGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre : (genre: Genre) => void;
  selectedGenre : Genre | null;
}

const GenreList = ({ onSelectGenre , selectedGenre }:Props) => {
  const { datas , isLoading ,error } = UseGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {datas.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image objectFit='cover' boxSize='32px' borderRadius={8} src={ getCroppedImageUrl(genre.image_background)} />
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
