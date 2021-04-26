import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  fadeIn,
  slideOutLeft,
  splashIn,
  splashOut,
} from '../../assets/animations';

const style = StyleSheet.create({
  mainContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bgImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  logo: {
    width: 350,
    alignSelf: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  logoImg: {
    width: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default class SplashScreen extends Component {
  state = {
    close: false,
  };
  async componentDidMount() {
    await setTimeout(async () => {
      this.setState({out: true});
      await setTimeout(async () => {
        this.setState({close: undefined});
        await setTimeout(() => {
          this.props.closeSplash();
        }, 500);
      }, 1000);
    }, 3000);
  }
  render() {
    return (
      <Animatable.View
        delay={this.state.out ? 400 : 0}
        animation={this.state.close === false ? fadeIn : slideOutLeft}
        style={style.mainContent}>
        <StatusBar barStyle="light-content" backgroundColor="#fff" />
        <Animatable.View
          delay={this.state.out ? 0 : 400}
          animation={this.state.out ? splashOut : splashIn}
          style={style.logo}>
          <Image
            style={style.logoImg}
            source={require('../../assets/drawable/logo.png')}
          />
        </Animatable.View>
      </Animatable.View>
    );
  }
}
