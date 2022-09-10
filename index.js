/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import HomeCC from './src/Home.CC';
import HomeFC from './src/Home.FC';

AppRegistry.registerComponent(appName, () => HomeCC);
