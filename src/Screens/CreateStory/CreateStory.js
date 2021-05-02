import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CameraRoll from "@react-native-community/cameraroll";

import { Content } from 'Components';
import { Images, Height } from "Constants";
import styles from './CreateStoryStyle';
import { ParentStyle } from "Styles";

const CreateStory = (props) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        (async () => {
            let readFiles = await CameraRoll.getPhotos({ first: 20, after: "20", groupTypes: 'All' });
            setImages(readFiles.edges);
        })()
    }, []);

    const showImages = () => {
        return (
            <FlatList
                style={styles.imageGridContainer}
                data={images}
                numColumns={3}
                renderItem={({ item, index }) => (
                    <View style={{ position: "relative" }}>
                        <Image key={index} source={{ uri: item.node.image.uri }} style={styles.grids} />

                    </View>
                )}

                keyExtractor={(item, index) => index.toString()}
            />
        )
    }

    return (
        <View>
            <View style={[ParentStyle.header, ParentStyle.bgColor]}>
                <View style={ParentStyle.flex1}>
                    <Icon onPress={() => props.navigation.goBack()} style={ParentStyle.plusIcon} name="times" />
                </View>
                <View style={[ParentStyle.flex1, { alignItems: "center" }]}>
                    <Text style={ParentStyle.headerTitle}>Create Story</Text>
                    <View style={styles.titleUnderLine}>
                        <View style={styles.bluePart}></View>
                        <View style={styles.yellowPart}></View>
                        <View style={styles.redPart}></View>
                    </View>
                </View>
                <View style={[ParentStyle.flex1, { alignItems: "flex-end" }]}>
                    <TouchableOpacity activeOpacity={0.8} style={ParentStyle.roundBtn}>
                        <FontAwesome name="send" style={styles.sendIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <Content style={[ParentStyle.contentNoBottomTab, { padding: 0 }]}>
                <View style={[ParentStyle.row, ParentStyle.p20]}>
                    <Image source={Images.userImage} style={ParentStyle.contactImg} />
                    <TextInput style={[ParentStyle.input, styles.textInput]} placeholder="Add a Caption ..." multiline={true} />
                </View>
                <View style={{ height: Height / 3 }}></View>

                {/* <View style={styles.imageGridContainer}> */}
                {showImages()}
                {/* </View> */}
            </Content>
        </View>
    );
};
export default CreateStory;
