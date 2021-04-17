import { Dimensions } from 'react-native';
const _size = (((Dimensions.get('window').height) + (Dimensions.get('window').width)) / 10);
export default {
    BaseUrl: 'http://192.168.200.16/',

    ImageUrl: 'http://192.168.200.16/salamat_panel/attachment/',

    AppName: 'Yollo',

    PagingLimit: 10,

    Fonts: {
        regular: 'ProductSans-Regular',
        medium: 'ProductSans-Medium',
        bold: 'ProductSans-Bold',
        light: 'ProductSans-Light',
        thin: 'ProductSans-Thin',
    },
    Size: {
        130: Math.round(_size / 0.85),
        120: Math.round(_size),
        100: Math.round(_size / 1.15),
        90: Math.round(_size / 1.3),
        80: Math.round(_size / 1.5),
        70: Math.round(_size / 1.7),
        60: Math.round(_size / 2),
        50: Math.round(_size / 2.4),
        45: Math.round(_size / 2.5),
        40: Math.round(_size / 3),
        38: Math.round(_size / 3.2),
        35: Math.round(_size / 3.5),
        30: Math.round(_size / 4),
        27: Math.round(_size / 4.5),
        24: Math.round(_size / 5),
        23: Math.round(_size / 5.3),
        21: Math.round(_size / 6),
        19: Math.round(_size / 6.5),
        17: Math.round(_size / 7),
        15: Math.round(_size / 8),
        14: Math.round(_size / 9),
        13: Math.round(_size / 9.5),
        12: Math.round(_size / 10),
        11: Math.round(_size / 11),
        10: Math.round(_size / 12),
        9: Math.round(_size / 13),
        7: Math.round(_size / 15),
        6: Math.round(_size / 19),
        5: Math.round(_size / 24),
    },

    Width: Math.round(Dimensions.get('window').width),
    Height: Math.round(Dimensions.get('window').height),

}
