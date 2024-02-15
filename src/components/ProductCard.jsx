import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Add to cart logic here
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={`https://via.placeholder.com/150?text=${product.title}`} alt={`Image of ${product.title}`} />
      <Box p="6">
        <Heading size="md" my="2">
          {product.title}
        </Heading>
        <Text>${product.price.toFixed(2)}</Text>
        <Text color="gray.600" fontSize="sm">
          {product.description}
        </Text>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
