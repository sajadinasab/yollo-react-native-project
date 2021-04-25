import { StyleSheet } from "react-native";
import { Color, Fonts, Size } from 'Constants';
const ParentStyle = StyleSheet.create({
    ///// global
    row: {
        flex: 1,
        flexDirection: "row"
    },
    rowSpaceBetween: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rightAlign: {
        textAlign: "right",
    },
    rowCenterAlign: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    justifyContentEnd: {
        justifyContent: "flex-end"
    },
    alignItemsCenter: {
        alignItems: "center"
    },
    flex1: {
        flex: 1,
    },
    ///text
    lightText: {
        fontFamily: Fonts.light,
        fontSize: Size[15]
    },
    mediumText: {
        fontFamily: Fonts.medium,
        fontSize: Size[14]
    },
    regularText: {
        fontFamily: Fonts.regular,
        fontSize: Size[14]
    },
    ////
    m30: {
        margin: 30
    },
    mB20: {
        marginBottom: 20
    },
    mT10: {
        marginTop: 10
    },
    mT20: {
        marginTop: 20
    },
    mL10: {
        marginLeft: 10
    },
    mL20: {
        marginLeft: 20
    },
    mR30: {
        marginRight: 30
    },
    // custom
    bgColor: {
        backgroundColor: Color.custom.bgColor
    },
    pageTitle: {
        fontFamily: Fonts.bold,
        fontSize: Size[38],
    },
    roundBtn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: Color.custom.light,
        margin: 30,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    badge: {
        backgroundColor: Color.custom.light,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 50
    },
    badgeText: {
        fontFamily: Fonts.bold,
        fontSize: Size[14],
    },
    plusIcon: {
        color: "#020202",
        fontSize: Size[17]
    },
})
export default ParentStyle;