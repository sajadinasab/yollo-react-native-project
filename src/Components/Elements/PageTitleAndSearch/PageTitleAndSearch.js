import React, { useRef, useState } from 'react';
import { Text, View, TextInput, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Color } from "Constants";
import styles from './PageTitleAndSearchStyle';
import { ParentStyle } from "Styles";
import SearchIconAnim from './SearchIconAnim'

const PageTitleAndSearch = ({ pageTitle = "" }) => {
    const [inputFocus, setInputFocused] = useState(false);
    const [state, setState] = useState({
        inputValue: ""
    })
    return (
        <View style={ParentStyle.alignItemsCenter}>
            <Text style={ParentStyle.pageTitle}>{pageTitle}</Text>
            <View style={styles.searchContainer}>
                <SearchIconAnim style={styles.searchView} inputFocus={inputFocus} inputValue={state.inputValue}>
                    <Icon name="search" style={styles.searchIcon} />
                </SearchIconAnim>
                <TextInput
                    style={styles.searchInput}
                    placeholder="search"
                    placeholderTextColor={Color.custom.textColor}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    onChangeText={text => setState(prev => ({ ...prev, inputValue: text }))}
                />
            </View>
        </View>
    );
};
export default PageTitleAndSearch;