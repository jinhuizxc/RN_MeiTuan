/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native'

import RootScene from './src/RootScene';

export default class RN_MeiTuan extends PureComponent {
    render() {
        return (
            <RootScene />
        );
    }
}

AppRegistry.registerComponent('RN_MeiTuan', () => RN_MeiTuan);
