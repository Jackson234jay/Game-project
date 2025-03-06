import { HStack, IconButton, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <IconButton onClick={toggleColorMode} variant={"outline"} size={"sm"}>
          {colorMode === "dark" ? <LuMoon /> : <LuSun />}
        </IconButton>
        <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
