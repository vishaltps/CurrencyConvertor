import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
const INPUT_HEIGHT = 50;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({

    $buttonBackgroundColorBase: '#F0F0F0',
    $buttonBackgroundColorModifier: 0.1,
    container: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    containerDisabled: {
        backgroundColor: "#F0F0F0"
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$primaryBlue',
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: "#797979"
    },
    border: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '#E2E2E2',
    },

});