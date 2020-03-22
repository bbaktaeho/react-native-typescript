/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightblue,
  },
});

interface Props {}
interface State {
  test: string;
  test2: any;
}

export default class App extends React.Component {
  state: any = {
    test: 'ff',
    test2: 'fff',
  };

  render(): JSX.Element {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>{this.state.test}</Text>
          <Text>{this.state.test2}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

// 함수형 컴포넌트 구현
// const App = ({}: Props) => {};
// export default App;
