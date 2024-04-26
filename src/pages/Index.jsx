import { Box, Flex, Text, Button, Image, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" p="4" bg="gray.100" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          BrandName
        </Text>
        <HStack spacing="4">
          <Button leftIcon={<FaSearch />} variant="ghost">
            Search
          </Button>
          <Button leftIcon={<FaUserCircle />} variant="ghost">
            Account
          </Button>
          <Button leftIcon={<FaShoppingCart />} variant="ghost">
            Cart
          </Button>
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={6}>
        <GridItem w="100%">
          <VStack>
            <Image src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYXNoaW9ufGVufDB8fHx8MTcxNDE3Mjk5NHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text mt="2">Men's Clothing</Text>
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack>
            <Image src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGZhc2hpb258ZW58MHx8fHwxNzE0MTcyOTk0fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text mt="2">Women's Clothing</Text>
          </VStack>
        </GridItem>
        <GridItem w="100%">
          <VStack>
            <Image src="https://images.unsplash.com/photo-1687253946687-a3713aa25b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY2Nlc3NvcmllcyUyMGZhc2hpb258ZW58MHx8fHwxNzE0MTcyOTk1fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text mt="2">Accessories</Text>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
