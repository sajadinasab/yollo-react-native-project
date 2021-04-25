import { StyleSheet } from "react-native";
import { Color, Fonts, Size } from "Constants";

const styles = StyleSheet.create({
    headIcon: {
        color: Color.custom.gray,
        fontSize: Size[19]
    },
    content: {
        paddingLeft: 30,
        paddingVertical: 20
    },
    tabText: {
        fontFamily: Fonts.bold,
        fontSize: Size[15],
    },
    tabActive: {
        width: "100%",
        height: 4,
        backgroundColor: Color.custom.primaryBlue,
        borderRadius: 25,
        marginTop: 5
    },
    tabContainer: {
        margin: 20
    },
    secTitleContainer: {
        marginVertical: 20,
        marginRight: 35,
        alignItems: "center"
    },
    secTitle: {
        fontFamily: Fonts.medium,
        fontSize: Size[15],
        color: Color.custom.lightText
    },
    newsTitle: {
        fontFamily: Fonts.bold,
        fontSize: Size[15],
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 25
    },
    newsdesc: {
        fontFamily: Fonts.regular,
        fontSize: Size[14],
        color: Color.custom.textColor,
        paddingRight: 10,
        width: 220,
    },
    newsImage: {
        width: 100,
        height: 100,
        borderRadius: 25
    }
})
export default styles