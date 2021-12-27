import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md";
import NextImage from "next/image";
import NextLink from "next/link";

const nav = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  { name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
  { name: "Favourites", icon: MdFavorite, route: "/favourites" },
];

const playlists = Array.from(Array(30), (_, idx) => <span>`Playlist {idx + 1}`</span>);

function Sidebar() {
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
      <Box py="20px" height="100%">
        <Box width="120px" mb="20px" px="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box mb="20px">
          <List spacing={2}>
            {nav.map((menuItem) => (
              <ListItem px="20px" fontSize="16px" key={menuItem.name}>
                <LinkBox>
                  <NextLink href={menuItem.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menuItem.icon} color="white" mr="20px" />
                      {menuItem.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box my="20px">
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem px="20px" fontSize="16px" key={item.name}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={item.icon} mr="20px" color="white"></ListIcon>
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Box height="66%" overflowY="auto" py="20px">
          <List spacing={2}>
            {playlists.map((list, idx) => (
              <ListItem px="20px" key={idx}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{list}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
