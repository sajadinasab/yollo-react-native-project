import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import styles from './ChatStyle';
import { Color } from "Constants";
import { ParentStyle } from "Styles";
import { subStrText } from 'Utilities'

const ChatList = ({ item, size, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate("ChatDetails", { Data: item })} style={[ParentStyle.row, ParentStyle.mT20]}>
            <View style={{ position: "relative", flex: 1.1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                {item.unReadMassage > 0 && <View style={styles.notifBadge}>
                    <Text style={styles.notifBadgeText}>{item.unReadMassage}</Text>
                </View>}
                {item.online && <View style={styles.onlineDot}></View>}
                <Image source={item.contactImg} style={{ width: size, height: size, borderRadius: size }} />
            </View>
            <View style={styles.listBody}>
                <View>
                    <Text style={styles.title}>{item.contactName}</Text>
                    <Text style={styles.text}>{subStrText(item.massage, 30)}</Text>
                </View>
                <Text style={styles.lastSeen}>{item.lastSeen}</Text>
            </View>
        </Pressable>
    );
};
export default ChatList;
