import React, { Component } from 'react';
import { View, Image, ImageBackground, Platform, Text, Keyboard, Animated } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ANIMATION_DURATION = 250;

class Logo extends Component {
    static propTypes = {
        tintColor: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
    }

    componentDidMount() {
        let showListener = "keyboardWillShow";
        let hideListener = "keyboardWillHide";
        if (Platform.OS === "android") {
            showListener = "keyboardDidShow";
            hideListener = "keyboardDidHide";
        }
        this.keyboardShowListner = Keyboard.addListener(showListener, this.keyboardShow)
        this.keyboardHideListner = Keyboard.addListener(hideListener, this.keyboardHide)
    };

    componentWillUnmount() {
        this.keyboardShowListner.remove();
        this.keyboardHideListner.remove();
    };

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION,
            })
        ]).start();
    };

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION,
            })
        ]).start()
    };

    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.containerImageWidth, height: this.containerImageWidth }
        ];

        const imageStyle = [
            styles.image,
            { width: this.imageWidth, height: this.imageWidth },
            this.props.tintColor ? { tintColor: this.props.tintColor } : null
        ]
        return (
            <View style={styles.container}>
                <Animated.Image resizeMode='contain' style={containerImageStyle} source={require('./images/background.png')} />
                <Animated.Image resizeMode='contain' style={imageStyle} source={require('./images/logo.png')} />
                <Text style={styles.text}>Currency Convertor</Text>
            </View>
        )
    }
}

export default Logo;