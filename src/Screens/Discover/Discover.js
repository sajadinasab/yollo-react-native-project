import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

import { Content, PageTitleAndSearch } from 'Components';
import styles from './DiscoverStyle';
import { ParentStyle } from "Styles";
import { Data, Width } from 'Constants';
import { subStrText } from 'Utilities';
import Tab from './Tab';

const Discover = (props) => {
    const [state, setState] = useState({
        all: {
            active: true
        },
        image: {
            active: false
        },
        news: {
            active: false
        }
    })

    const _renderItem = ({ item, index }) => {
        return (
            <Image source={item} style={styles.image} />
        )
    }

    const _renderNews = ({ item, index }) => {
        return (
            <View style={[ParentStyle.row, { paddingHorizontal: 30 }]}>
                <Image source={item.img} style={styles.newsImage} />
                <View style={ParentStyle.mL20}>
                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <Text style={styles.newsTitle}>{item.cat}</Text>
                    <Text style={styles.newsdesc}>{subStrText(item.description, 60)}</Text>
                </View>
            </View>
        )
    }
    return (
        <Content style={ParentStyle.bgColor}>
            <View style={ParentStyle.header}>
                <TouchableOpacity activeOpacity={0.8} style={ParentStyle.roundBtn}>
                    <Icon name="dot-circle-o" style={styles.headIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={ParentStyle.roundBtn}>
                    <Icon name="heart" style={styles.headIcon} />
                </TouchableOpacity>
            </View>
            <PageTitleAndSearch pageTitle="Discover" />
            <View style={styles.content}>
                <Tab state={state} setState={setState} />

                {state.all.active || state.image.active ? <View style={{ flex: 1 }}>
                    <View style={[ParentStyle.rowSpaceBetween, styles.secTitleContainer]}>
                        <Text style={styles.secTitle}>TRENDING PHOTOS</Text>
                        <View style={ParentStyle.badge}>
                            <Text style={ParentStyle.badgeText}>See More</Text>
                        </View>
                    </View>
                    <Carousel
                        containerCustomStyle={ParentStyle.mB20}
                        layout={"default"}
                        data={Data.discoverImages}
                        sliderWidth={Width}
                        loop={true}
                        itemWidth={150}
                        renderItem={_renderItem}
                    />
                    <Carousel
                        layout={"default"}
                        data={Data.discoverImages}
                        sliderWidth={Width}
                        loop={true}
                        itemWidth={150}
                        renderItem={_renderItem}
                    />
                </View> : null}
                {state.all.active || state.news.active ? <View>
                    <View style={[ParentStyle.rowSpaceBetween, styles.secTitleContainer]}>
                        <Text style={styles.secTitle}>NEWS</Text>
                    </View>
                    <Carousel
                        layout={"default"}
                        data={Data.discoverNews}
                        sliderWidth={Width}
                        itemWidth={Width - 100}
                        loop={true}
                        renderItem={_renderNews}
                        layoutCardOffset={20}
                    />
                </View> : null}
            </View>
        </Content>
    );
};
export default Discover;
