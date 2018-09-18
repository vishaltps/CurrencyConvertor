
// // Working
// import React from 'react';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
// EStyleSheet.create({
//     $primaryBlue: '#4F6D7A',
//     $primaryWhite: '#FFFFFF',
//     $border: '#E2E2E2'
// });
// export default () => <Home />;


// // Not Working
// import React from 'react';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './app/screens/Home';

// EStyleSheet.build({
//     $primaryBlue: '#4F6D7A',
// });
// export default () => <Home />;

import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';


EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD90',
    $primaryPurple: '#9E768F',

    $white: '#FFFFFF',
    $border: '#E2E2E2',
    $lightGrey: "#F0F0F0",
    $inputText: "#797979",
    $darkText: "#343434",
});

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <Navigator onNavigationStateChange={null} />
        </AlertProvider>
    </Provider>
);
