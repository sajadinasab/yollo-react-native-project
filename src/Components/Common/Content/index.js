import React from 'react';
import { SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
const Content = (props) => {
    let { children, style } = props;
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container, style}>
                <KeyboardAvoidingView>
                    <>{children}</>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Content;
