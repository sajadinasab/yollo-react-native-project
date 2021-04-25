import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './ChatDetailsStyles';
import { Color, Size } from "Constants";
import { ParentStyle } from "Styles";
import { Content } from 'Components';

const ChatDetails = (props) => {
    const Data = props.route.params.Data;
    return (
        <View style={ParentStyle.bglight}>
            <View style={styles.header}>
                <View style={ParentStyle.flex1}>
                    <Icon onPress={() => props.navigation.goBack()} style={styles.headerIcon} name="chevron-left" />
                </View>
                <View style={[ParentStyle.flex1, { alignItems: "center" }]}>
                    <Text style={styles.contactName}>{Data.contactName}</Text>
                </View>
                <View style={[ParentStyle.flex1, { alignItems: "flex-end" }]}>
                    <Icon style={styles.headerIcon} name="more-vertical" />
                </View>
            </View>
            <Content style={styles.content}>
                <View style={ParentStyle.row}>
                    <Image source={Data.contactImg} style={styles.contactImg} />
                    <View style={styles.chatBox}>
                        <Text style={styles.chatBoxText}>Add your feedback! </Text>
                        <Text style={styles.chatBoxTimeText}>9:15</Text>
                    </View>
                </View>
            </Content>
        </View>
    );
};
export default ChatDetails;
