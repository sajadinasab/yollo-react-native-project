import { StyleSheet } from "react-native";
import { Color, Fonts, Size } from "Constants";
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
    searchIcon: {
        position: "absolute",
        top: 42,
        left: "37%",
        zIndex: 2,
        color: Color.custom.textColor,
        fontSize: Size[21]
    },
    card: {
        marginTop: 20,
    },
    pfImage: {
        width: 70,
        height: 70,
        borderRadius: 70
    },
    nameText: {
        fontFamily: Fonts.bold,
        fontSize: Size[15]
    },
    lastSeenText: {
        fontFamily: Fonts.light,
        fontSize: Size[15],
        color: Color.custom.lightText
    },
    nameContainer: {
        marginLeft: 10
    },
    moreIcon: {
        fontSize: Size[17],
        color: Color.custom.lightText
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardContent: {
        marginTop: 20
    },
    postImage: {
        width: "100%",
        height: 350,
        borderRadius: 25
    },
    description: {
        textAlign: "justify",
        padding: 5,
        color: Color.default.text,
        marginTop: 10
    },
    bottomCardIcon: {
        fontSize: Size[21],
        color: Color.custom.lightText
    },
    bottomCardText: {
        marginLeft: 5,
        fontFamily: Fonts.medium,
    }
})
export default styles