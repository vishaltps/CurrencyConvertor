/** @format */

// import { AppRegistry } from 'react-native';
// import App from './App'; // Working
// // import App from './app/index';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import App from './app/index';

// export default App;

import { AppRegistry, YellowBox } from 'react-native';
import App from './app/index';
import { name as appName } from './app.json';
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent(appName, () => App);