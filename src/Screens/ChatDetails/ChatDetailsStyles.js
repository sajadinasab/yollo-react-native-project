import { StyleSheet } from "react-native";
import { Color, Fonts, Size, Height } from "Constants";

const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: Color.custom.light,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20
    },
    contactName: {
        fontFamily: Fonts.bold,
        fontSize: Size[15]
    },
    content: {
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
        height: Height - 70
    },
    headerIcon: {
        fontSize: Size[21],
        color: Color.custom.lightText
    },
    chatBox: {
        backgroundColor: Color.custom.light,
        padding: 20,
        borderRadius: 20,
        marginLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    chatBoxText: {
        fontFamily: Fonts.regular,
        color: "#666",
    },
    chatBoxTimeText: {
        fontFamily: Fonts.light,
        color: Color.custom.textColor,
        marginLeft: 20
    },
    inputContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flex: 3,
        backgroundColor: Color.custom.light,
        borderRadius: 25,
        marginRight: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
export default styles;