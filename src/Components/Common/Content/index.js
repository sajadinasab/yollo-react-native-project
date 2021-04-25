import React from 'react';
import { SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
const Content = (props) => {
    let { children, style } = props;
    return (
        <SafeAreaView style={[styles.safeArea, style]}>
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView>
                    <>{children}</>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Content;
