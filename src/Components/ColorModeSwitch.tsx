import { HStack, IconButton, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <IconButton onClick={toggleColorMode} variant={"outline"} size={"sm"}>
          {colorMode === "dark" ? <LuMoon /> : <LuSun />}
        </IconButton>
        <Text>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
