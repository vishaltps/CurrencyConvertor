import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 19,
        marginRight: 11
    },
    text: {
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: 14
    }
})

export default styles;