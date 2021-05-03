import React, { useRef, useState } from 'react';
import { Text, View, TextInput, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Color, Width } from "Constants";
import styles from './styles';
import { ParentStyle } from "Styles";
const SearchIconAnim = ({ children, inputFocus, inputValue, style }) => {
    const iconAnim = useRef(new Animated.Value(Width / 3.3)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        if (inputFocus) {
            Animated.timing(
                iconAnim,
                {
                    toValue: Width / 25,
                    duration: 1000,
                }
            ).start();
        } else if (!inputFocus && !inputValue) {
            Animated.timing(
                iconAnim,
                {
                    toValue: Width / 3.3,
                    duration: 1000,
                }
            ).start();
        }
    }, [inputFocus])

    return (
        <Animated.View
            style={{
                ...style,
                left: iconAnim,
            }}
        >
            {children}
        </Animated.View>
    );
}

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