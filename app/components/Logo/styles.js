import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export const imageSizes = {
    $smallContainerSize: imageWidth / 2,
    $smallImageSize: imageWidth / 4,
    $largeContainerSize: imageWidth,
    $largeImageSize: imageWidth / 2,
};

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'imageSizes.$largeContainerSize',
        height: 'imageSizes.$largeContainerSize',
    },
    image: {
        width: 'imageSizes.$largeImageSize',
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: -0.5,
        paddingTop: 20,
        color: '#FFFFFF',
    }

});