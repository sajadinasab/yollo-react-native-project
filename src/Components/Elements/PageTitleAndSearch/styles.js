import { StyleSheet } from "react-native";
import { Color, Fonts, Size, Width } from "Constants";
const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: Color.custom.light,
        borderRadius: 25,
        padding: 17,
        textAlign: "center",
        marginTop: 20,
        fontFamily: Fonts.regular,
        fontSize: Size[17],
        color: Color.custom.textColor
    },
    searchContainer: {
        position: "relative",
        width: "85%"
    },
    searchView: {
        position: "absolute",
        top: 42,
        // transform: [{ translateX: Width / 3.3 }],
        zIndex: 2,
    },
    searchIcon: {
        color: Color.custom.textColor,
        fontSize: Size[21]
    }
})
export default styles