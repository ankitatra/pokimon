import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTermChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    localStorage.setItem("name",searchTerm)
    setTimeout(()=>{
      window.location.reload(true);
    },5000)
   
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    localStorage.setItem("filter",selectedFilter)
    window.location.reload(true);
  };
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
                value={localStorage.getItem("name")||""}
                onChange={handleSearchTermChange} placeholder="Search by Pokémon name"
              />
            </InputGroup>
          </Box>

          <Box>
            <Select
              placeholder="Select option"
              width={"200px"}
              mr={44}
             
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="electric">Electric</option>
            </Select>
          </Box>

          <Box>
            <Button
              onClick={() => navigate("/bookmark")}
              backgroundColor={"#FCEEC8"}
              mr={4}
            >
              Bookmark
              <FaBookmark />
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
