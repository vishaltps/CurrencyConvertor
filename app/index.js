
// Working
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
EStyleSheet.create({
    $primaryBlue: '#4F6D7A',
    $primaryWhite: '#FFFFFF',
    $border: '#E2E2E2'
});
export default () => <Home />;


// Not Working
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './app/screens/Home';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
});
export default () => <Home />;