import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Color } from "Constants";
import styles from './styles';
import { ParentStyle } from "Styles";
const PageTitleAndSearch = ({ pageTitle = "" }) => {
    return (
        <View style={ParentStyle.alignItemsCenter}>
            <Text style={ParentStyle.pageTitle}>{pageTitle}</Text>
            <View style={styles.searchContainer}>
                <Icon name="search" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="search"
                    placeholderTextColor={Color.custom.textColor}
                />
            </View>
        </View>
    );
};
export default PageTitleAndSearch;