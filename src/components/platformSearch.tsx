import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import UsePlatforms, { Platform } from "../hooks/usePlatform"

interface Props {
  onSelectPlatform : (platform : Platform ) => void,
  selectedPlatform : Platform | null;
}

const PlatformSearch = ({ onSelectPlatform , selectedPlatform }: Props) => {

  const { datas,error } = UsePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {datas.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} >{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default PlatformSearch