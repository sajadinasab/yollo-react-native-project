import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './HomeStyles';
import { Color } from "Constants";
import { ParentStyle } from "Styles";

const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={[ParentStyle.row, ParentStyle.alignItemsCenter]}>
                    <Image source={item.avatar} style={styles.pfImage} />
                    <View style={styles.nameContainer} >
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.lastSeenText}>1min ago</Text>
                    </View>
                </View>
                <Icon style={styles.moreIcon} name="more-vertical" />
            </View>
            <View style={styles.cardContent}>
                <Image style={styles.postImage} source={item.postImage} />
                <Text style={styles.description}>{item.decription}</Text>
                <View style={[ParentStyle.row, ParentStyle.mT10]}>
                    <View style={ParentStyle.rowCenterAlign}>
                        <FontAwesome style={[styles.bottomCardIcon, item.numberOfLikes > 0 ? { color: Color.custom.red } : { color: Color.custom.lightText }]} name={item.numberOfLikes > 0 ? "heart" : "heart-o"} />
                        <Text style={styles.bottomCardText}>{item.numberOfLikes}</Text>
                    </View>
                    <View style={ParentStyle.rowCenterAlign}>
                        <FontAwesome style={styles.bottomCardIcon} name="comment" />
                        <Text style={styles.bottomCardText}>{item.numberOfCm}</Text>
                    </View>
                    <View style={[ParentStyle.rowCenterAlign, ParentStyle.justifyContentEnd]}>
                        <Text style={styles.bottomCardText}>share</Text>
                        <FontAwesome style={[styles.bottomCardIcon, ParentStyle.mL10]} name="long-arrow-right" />
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Card;
