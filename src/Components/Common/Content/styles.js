import { StyleSheet } from "react-native";
import { Config } from 'Constants';
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        minHeight: Config.Height - Config.Height / 6
    },
    container: {
        flex: 1,
        minHeight: Config.Height,
    },
})
export default styles;