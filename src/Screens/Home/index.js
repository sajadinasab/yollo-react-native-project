import React from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Content, PageTitleAndSearch } from 'Components';
import { Data } from "Constants";
import styles from './styles';
import { ParentStyle } from "Styles";
import Card from './Card';
const Home = (props) => {
    const { navigate } = props.navigation;
    return (
        <Content style={ParentStyle.bgColor}>
            <View>
                <TouchableOpacity activeOpacity={0.8} style={styles.badge}>
                    <Icon name="plus" style={styles.plusIcon} />
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
