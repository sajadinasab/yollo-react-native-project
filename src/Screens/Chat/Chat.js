import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { Content, PageTitleAndSearch } from 'Components';
import { ParentStyle } from "Styles";
import ChatList from './ChatList';
import { Data } from 'Constants';

const Chat = (props) => {
    return (
        <Content style={ParentStyle.contentBottomTab}>
            <View style={ParentStyle.header}>
                <TouchableOpacity activeOpacity={0.8} style={ParentStyle.roundBtn}>
                    <Entypo name="plus" style={ParentStyle.plusIcon} />
                </TouchableOpacity>
                <Icon style={ParentStyle.plusIcon} name="more-vertical" />
            </View>
            <PageTitleAndSearch pageTitle="Chat" />
            <FlatList
                style={ParentStyle.p30}
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
