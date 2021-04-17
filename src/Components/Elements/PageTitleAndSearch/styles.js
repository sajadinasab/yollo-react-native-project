import { StyleSheet } from "react-native";
import { Color, Config } from "Constants";
const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: Color.custom.light,
        borderRadius: 25,
        padding: 17,
        textAlign: "center",
        marginTop: 20,
        fontFamily: Config.Fonts.regular,
        fontSize: Config.Size[17],
        color: Color.custom.textColor
    },
    searchContainer: {
        position: "relative",
        width: "85%"
    },
    searchIcon: {
        position: "absolute",
        top: 42,
        left: "37%",
        zIndex: 2,
        color: Color.custom.textColor,
        fontSize: Config.Size[21]
    },
})
export default styles