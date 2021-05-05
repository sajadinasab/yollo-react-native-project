import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';

import { Width } from "Constants";

const SearchIconAnim = ({ children, inputFocus, inputValue, style }) => {
    const iconAnim = useRef(new Animated.Value(Width / 3.3)).current

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
export default SearchIconAnim;