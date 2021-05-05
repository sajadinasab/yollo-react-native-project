import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';

import styles from './DiscoverStyle';
import { ParentStyle } from "Styles";

const Tab = ({ state, setState }) => {

    const activeTab = (tabName) => {
        switch (tabName) {
            case "all": {
                setState(prev => ({
                    ...prev,
                    all: {
                        active: true
                    },
                    image: {
                        active: false
                    },
                    news: {
                        active: false
                    }
                }))
            }
                break;
            case "image": {
                setState(prev => ({
                    ...prev,
                    all: {
                        active: false
                    },
                    image: {
                        active: true
                    },
                    news: {
                        active: false
                    }
                }))
            }
                break;
            case "news": {
                setState(prev => ({
                    ...prev,
                    all: {
                        active: false
                    },
                    image: {
                        active: false
                    },
                    news: {
                        active: true
                    }
                }))
            }
                break;
        }
    }

    return (
        <View style={ParentStyle.row}>
            <Pressable style={styles.tabContainer} onPress={() => activeTab("all")}>
                <Text style={styles.tabText}>All</Text>
                {state.all.active && <View style={styles.tabActive}></View>}
            </Pressable>
            <Pressable style={styles.tabContainer} onPress={() => activeTab("image")}>
                <Text style={styles.tabText}>Images</Text>
                {state.image.active && <View style={styles.tabActive}></View>}
            </Pressable>
            <Pressable style={styles.tabContainer} onPress={() => activeTab("news")}>
                <Text style={styles.tabText}>News</Text>
                {state.news.active && <View style={styles.tabActive}></View>}
            </Pressable>
        </View>
    );
};
export default Tab;
