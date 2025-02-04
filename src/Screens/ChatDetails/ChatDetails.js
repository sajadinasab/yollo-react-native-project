import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './ChatDetailsStyles';
import { ParentStyle } from "Styles";
import { Content } from 'Components';

const ChatDetails = (props) => {
    const Data = props.route.params.Data;
    return (
        <Content style={[ParentStyle.bglight, ParentStyle.screenHeight]}>
            <View style={styles.header}>
                <View style={ParentStyle.flex1}>
                    <Icon onPress={() => props.navigation.goBack()} style={styles.headerIcon} name="chevron-left" />
                </View>
                <View style={[ParentStyle.flex1, ParentStyle.alignItemsCenter]}>
                    <Text style={styles.contactName}>{Data.contactName}</Text>
                </View>
                <View style={[ParentStyle.flex1, ParentStyle.alignItemsEnd]}>
                    <Icon style={styles.headerIcon} name="more-vertical" />
                </View>
            </View>
            <Content style={styles.content}>
                <View style={ParentStyle.row}>
                    <Image source={Data.contactImg} style={ParentStyle.contactImg} />
                    <View style={styles.chatBox}>
                        <Text style={styles.chatBoxText}>Add your feedback! </Text>
                        <Text style={styles.chatBoxTimeText}>9:15</Text>
                    </View>
                </View>
            </Content>
            <View style={[ParentStyle.row, ParentStyle.p20, { position: "absolute", bottom: 0 }]}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder="Tpe a Message ..." multiline={true} />
                    <Icon name="send" style={ParentStyle.plusIcon} />
                </View>
                <TouchableOpacity activeOpacity={0.8} style={ParentStyle.roundBtn}>
                    <Icon name="plus" style={ParentStyle.plusIcon} />
                </TouchableOpacity>
            </View>
        </Content>
    );
};
export default ChatDetails;
