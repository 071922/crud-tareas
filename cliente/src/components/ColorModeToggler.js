import { Button, useColorMode } from "@chakra-ui/react";

export const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Cambiar Modo {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
};