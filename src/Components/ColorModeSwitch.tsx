import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
