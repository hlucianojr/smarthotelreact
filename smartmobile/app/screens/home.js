import React from 'react';
import { StyleSheet,SafeAreaView, Dimensions, ScrollView, StatusBar } from "react-native";
import { Block, theme, Text } from "galio-framework";

const { width } = Dimensions.get("screen");

function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    home: {
      width: width
    },
    articles: {
      width: 100,//width - theme.SIZES.BASE * 2,
      paddingVertical: 20,//theme.SIZES.BASE,
      paddingHorizontal: 2,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
      text: {
        fontSize: 42,
      },
  });
export default Home;