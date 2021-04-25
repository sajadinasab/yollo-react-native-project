import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Content, PageTitleAndSearch } from 'Components';
import { ParentStyle } from "Styles";
import styles from './ChatStyle';
import ChatList from './ChatList';
import { Data } from 'Constants';

const Chat = (props) => {
    return (
        <Content style={ParentStyle.bgColor}>
            <View style={[ParentStyle.rowSpaceBetween, ParentStyle.alignItemsCenter]}>
                <TouchableOpacity activeOpacity={0.8} style={ParentStyle.roundBtn}>
                    <FontAwesome name="plus" style={ParentStyle.plusIcon} />
                </TouchableOpacity>
                <Icon style={[ParentStyle.plusIcon, ParentStyle.mR30]} name="more-vertical" />
            </View>
            <PageTitleAndSearch pageTitle="Chat" />
            <FlatList
                style={{ padding: 30 }}
                data={Data.chat}
                renderItem={({ item }) => (
                    <ChatList size={60} item={item} navigation={props.navigation} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </Content>
    );
};
export default Chat;
