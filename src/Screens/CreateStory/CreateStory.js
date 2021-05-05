import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CameraRoll from "@react-native-community/cameraroll";
import _ from 'lodash';
import { RNCamera } from 'react-native-camera';

import { Content } from 'Components';
import { Images, Height, Color } from "Constants";
import styles from './CreateStoryStyle';
import { ParentStyle } from "Styles";

const CreateStory = (props) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        (async () => {
            let readFiles = await CameraRoll.getPhotos({ first: 20, after: "0", groupTypes: 'All' });
            console.log(readFiles);
            readFiles.edges.map((item, index) => {
                item.checked = false;
                item.id = index
            });
            setImages([...images, ...readFiles.edges]);
        })()
    }, []);
    const checkBoxCheck = (id) => {
        let copyImage = _.cloneDeep(images);
        let findIndex = copyImage.findIndex(item => item.id == id);
        copyImage[findIndex].checked = !copyImage[findIndex].checked;
        setImages(copyImage);
    }
    const showImages = () => {
        return (
            <FlatList
                style={styles.imageGridContainer}
                data={images}
                numColumns={3}
                renderItem={({ item, index }) => {
                    return (index == 0 ?
                        <Pressable style={[styles.grids, { overflow: "hidden" }]}>
                            <RNCamera
                                // ref={cam => {
                                //     camera = cam;
                                // }}
                                type={RNCamera.Constants.Type.back}
                                style={{ width: "100%", height: "100%" }}
                            />
                            <Icon name="camera" style={styles.cameraIcon} />
                        </Pressable>
                        :
                        <Pressable onPress={() => checkBoxCheck(item.id)} style={{ position: "relative" }}>
                            <Image key={index} source={{ uri: item.node.image.uri }} style={styles.grids} />
                            <Pressable onPress={() => checkBoxCheck(item.id)} style={[styles.checkBox, item.checked ? { backgroundColor: Color.custom.primaryBlue } : {}]} >
                                {item.checked && <Icon name="check" style={styles.checkBoxIcon} />}
                            </Pressable>
                        </Pressable>
                    )
                }
                }
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
                {showImages()}
            </Content>
        </View>
    );
};
export default CreateStory;
