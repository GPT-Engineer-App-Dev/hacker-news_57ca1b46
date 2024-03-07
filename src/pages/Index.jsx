import { Box, Container, Heading, List, ListItem, Link, Text, Divider, Flex, Spacer, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaHackerNews } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("black", "white");

  // Fake data for demonstration purposes
  const stories = [
    { id: 1, title: "The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await", url: "https://example.com/1" },
    { id: 2, title: "Game of Life in React: Building React Components with Hooks", url: "https://example.com/2" },
    { id: 3, title: "Understanding the Event Loop, Callbacks, Promises, and Async/Await in JavaScript", url: "https://example.com/3" },
    // ...more stories
  ];

  return (
    <Box bg={bgColor} color={color} minH="100vh">
      <Container maxW="container.md" pt={4}>
        <Flex mb={4}>
          <Heading size="md" display="flex" alignItems="center">
            <FaHackerNews />
            <Text ml={2}>Hacker News Clone</Text>
          </Heading>
          <Spacer />
          <IconButton aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`} icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} ml={2} />
        </Flex>
        <List spacing={3}>
          {stories.map((story) => (
            <ListItem key={story.id} p={2} _hover={{ bg: useColorModeValue("gray.100", "gray.800") }}>
              <Link href={story.url} isExternal>
                {story.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Index;
