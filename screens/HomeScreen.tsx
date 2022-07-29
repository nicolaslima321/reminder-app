import React, { useState } from "react";
import {
  ImageStyle,
  StyleSheet,
} from "react-native";

import {
  Button,
  Icon,
  Layout,
  Text,
} from "@ui-kitten/components";

import 'react-native-gesture-handler';

const heartIcons = ["😻", "💖", "😍", "🥰", "😍", "💝", "😘", "💓", "💕", "🐱"];

type IconProps = {
  name: string;
  style?: ImageStyle;
};

const HomeScreen = (): React.ReactElement => {
  const [icon, setIcon] = useState(heartIcons[0]);

  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome to UI Kitten {icon}
      </Text>
      <Text style={styles.text} category="s1">
        It works great in the browser and as a native app!
      </Text>
      <Text style={styles.text} appearance="hint">
        Click some buttons to see it working.
      </Text>
      <Button
        accessibilityRole="button"
        accessibilityLabel="Change Icon"
        style={styles.iconButton}
        onPress={changeIcon}
      >
        CHANGE ICON
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
  },
  iconButton: {
    marginVertical: 16,
  },
  nativeButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default HomeScreen;
