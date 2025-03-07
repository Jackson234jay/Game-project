import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="100%" // ✅ Ensures all cards have the same width
      height="100%" // ✅ Makes sure all cards stretch to the same height
      borderRadius={10}
      overflow="hidden"
      display="flex" // ✅ Ensures flex-based stretching
      flexDirection="column" // ✅ Aligns children properly
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
