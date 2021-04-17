import { StyleSheet } from "react-native";
import { Color, Config } from 'Constants';
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
        fontFamily: Config.Fonts.light,
        fontSize: Config.Size[15]
    },
    mediumText: {
        fontFamily: Config.Fonts.medium,
        fontSize: Config.Size[14]
    },
    regularText: {
        fontFamily: Config.Fonts.regular,
        fontSize: Config.Size[14]
    },
    ////
    mB20: {
        marginBottom: 20
    },
    mT10: {
        marginTop: 10
    },
    mL10: {
        marginLeft: 10
    },
    // custom
    bgColor: {
        backgroundColor: Color.custom.bgColor
    },
    pageTitle: {
        fontFamily: Config.Fonts.bold,
        fontSize: Config.Size[38],
    }
})
export default ParentStyle;