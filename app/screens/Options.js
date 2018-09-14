import React, { Component } from 'react';
import { View, StatusBar, ScrollView, Platform, Linking } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List'
import PropTypes from 'prop-types';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS == 'ios' ? 'ios' : 'android';

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func
    }

    handleThemePress = () => {
        this.props.navigation.navigate("Themes")
    }

    handleSitesPress = () => {
        Linking.openURL("httpdds://fixer.io").catch(() => this.props.alertWithType("error", "Sorry!", "fixer io is not available"))
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Themes"
                    onPress={this.handleThemePress}
                // customIcon={
                //     <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
                // }
                />
                <Separator />
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitesPress}
                // customIcon={
                //     <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
                // }
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default connectAlert(Options);