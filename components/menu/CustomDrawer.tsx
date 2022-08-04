import React, { useState } from "react";
import { StyleSheet, ImageBackground, Image } from "react-native";

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Button, Layout, Text } from "@ui-kitten/components";

const CustomDrawer = (props): React.ReactElement => {
  return (
    <Layout style={styles.customDrawerContainer}>
      <DrawerContentScrollView {...props}>
        <Layout style={styles.customDrawerProfileContainer}>
          <Image
            style={styles.customDrawerProfilePicture}
            source={require('../../assets/images/logo.png')}
          />
          <Text
            style={styles.customDrawerProfileName}
            category="h4"
          >
            Nicolas Lima
          </Text>
        </Layout>
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
  customDrawerProfileContainer: {
    backgroundColor: '#0e1f55',
    padding: 20,
  },
  customDrawerProfilePicture: {
    borderColor: 'rgba(0, 0, 0, .4)',
    borderWidth: 5,
    borderRadius: 40,
    marginBottom: 10,
    height: 80,
    width: 80,
  },
  customDrawerProfileName: {
    color: 'white',
  },
});

export default CustomDrawer;
