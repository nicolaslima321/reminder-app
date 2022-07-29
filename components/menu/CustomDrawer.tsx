import React, { useState } from "react";
import { StyleSheet, ImageBackground, Image } from "react-native";

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Button, Layout, Text } from "@ui-kitten/components";

const CustomDrawer = (props): React.ReactElement => {
  return (
    <Layout style={styles.customDrawerContainer}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          style={styles.customDrawerBackground}
          source={require('../../assets/images/logo.png')}
        >
          <Image
          style={styles.customDrawerImage}
            source={require('../../assets/images/logo.png')}
          />
        </ImageBackground>
        <Layout style={styles.customDrawerContainer}>
          <DrawerItemList {...props} />
        </Layout>
      </DrawerContentScrollView>

      <Layout style={styles.customDrawerContainer}>
        <Text>
          oie
        </Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  customDrawerContainer: {
    backgroundColor: '#0e1f55',
    flex: 1,
  },
  customDrawerBackground: {
    padding: 20,
  },
  customDrawerImage: {
    borderRadius: 40,
    marginBottom: 10,
    height: 80,
    width: 80,
  },
});

export default CustomDrawer;
