import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Content, PageTitleAndSearch } from 'Components';
import { Data } from "Constants";
import styles from './HomeStyles';
import { ParentStyle } from "Styles";
import Card from './Card';

const Home = (props) => {
    const { navigate } = props.navigation;
    return (
        <Content style={ParentStyle.bgColor}>
            <View>
                <TouchableOpacity activeOpacity={0.8} style={ParentStyle.roundBtn}>
                    <Icon name="plus" style={ParentStyle.plusIcon} />
                </TouchableOpacity>
            </View>
            <PageTitleAndSearch pageTitle="Explore" />
            <FlatList
                style={{ padding: 30 }}
                data={Data.homeCardData}
                renderItem={({ item }) => (
                    <Card item={item} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </Content>
    );
};
export default Home;
