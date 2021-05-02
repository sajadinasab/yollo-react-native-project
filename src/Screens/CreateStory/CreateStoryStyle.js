import { StyleSheet } from "react-native";
import { Color, Fonts, Size, Height, Width } from "Constants";

const styles = StyleSheet.create({
    sendIcon: {
        color: Color.custom.gray,
        fontSize: Size[15]
    },
    bluePart: {
        backgroundColor: Color.custom.primaryBlue,
        flex: 2
    },
    yellowPart: {
        backgroundColor: Color.custom.yellow,
        flex: 1
    },
    redPart: {
        backgroundColor: Color.custom.red,
        flex: 1
    },
    titleUnderLine: {
        width: "100%",
        height: 5,
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 10,
        flexDirection: "row",
    },
    textInput: {
        flex: 1,
        marginLeft: 20,
    },
    imageGridContainer: {
        borderColor: Color.custom.light,
        borderWidth: 2,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        width: "100%",
        height: Height / 2,
        padding: 20
    },
    grids: {
        width: Width / 4,
        height: Width / 4,
        borderRadius: 25,
        marginHorizontal: 10,
        marginVertical: 5
    }
})
export default styles;