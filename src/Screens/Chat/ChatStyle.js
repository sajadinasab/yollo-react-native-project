import { StyleSheet } from "react-native";
import { Color, Fonts, Size } from "Constants";

const styles = StyleSheet.create({
    title: {
        fontFamily: Fonts.bold,
        fontSize: Size[17]
    },
    listBody: {
        alignItems: "center",
        marginLeft: 30,
        borderBottomColor: Color.custom.lightText,
        borderBottomWidth: 1,
        flex: 4,
        paddingBottom: 20,
        flexDirection: "row"
    },
    notifBadge: {
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: Color.custom.primaryBlue,
        position: "absolute",
        zIndex: 2,
        right: -8,
        top: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    notifBadgeText: {
        color: "#fff",
        fontSize: Size[12]
    },
    onlineDot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: Color.custom.primaryBlue,
        position: "absolute",
        zIndex: 2,
        left: 0
    },
    lastSeen: {
        color: Color.custom.lightText,
        marginBottom: 20
    },
    avatarContainer: {
        position: "relative",
        flex: 1.1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    }
})
export default styles;