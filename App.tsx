import React, { useState } from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light, dark } from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler';
import AppNavigator from "./navigation/AppNavigator";

const themes = {
  light: {
    theme: light,
    icon: "sun",
    text: "LIGHT",
  },
  dark: {
    theme: dark,
    icon: "moon",
    text: "DARK",
  },
};

const App = (): React.ReactFragment => {
  const [themeName, setThemeName] = useState("light");
  const theme = themes[themeName].theme;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
