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
import {Input, Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
});

interface Props {}
interface State {
  test: string;
  test2: number;
}

export default class App extends React.Component<Props, State> {
  state: State = {
    test: 'ff',
    test2: 213,
  };

  render(): JSX.Element {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={styles.container}>
            <Text>{this.state.test}</Text>
            <Text>{this.state.test2}</Text>
            <Input placeholder="fdfdfdf"></Input>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// 함수형 컴포넌트 구현
// const App = ({}: Props) => {};
// export default App;
