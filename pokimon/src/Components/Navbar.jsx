import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Select,
  Stack,
} from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaBookmark } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <Box
      color={"black"}
        width={"100%"}
        bg={"#FCEEC8"}
        position={"fixed"}
        marginBottom={"100px"}
        height={"70px"}
      >
        <Flex p={2}>
          <Box>
            <Button backgroundColor={"#FCEEC8"}>Logo</Button>
          </Box>
          <Spacer />
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaSearch color="gray.300" />}
              />
              <Input
                mr={54}
                width={"500px"}
                border={"none"}
                background={"white"}
                type="email"
                placeholder="Email"
              />
            </InputGroup>
          </Box>

          <Box>
            <Select placeholder="Select option" width={"200px"} mr={44}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>

          <Box>
            <Button backgroundColor={"#FCEEC8"} mr={4}>
              Bookmark
              <FaBookmark  />
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
