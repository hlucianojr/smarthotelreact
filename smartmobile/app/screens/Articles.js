
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

class Articles extends React.Component {
    state = {  }
    renderCards=()=>{
        return(<Text>hector articles</Text>);
    };
    render() {
        return (
            <Block flex>
            <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
          </Block> 
        );
    }
}

export default Articles;