import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import Pdf from 'react-native-pdf';

const styles = StyleSheet.create({
    pdf: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  })

  export class Enerjiiletimi extends React.Component {
    render() {
      const source = {
        uri: 'http://baston.store/pdf/elektrikelektronik/enerjiiletimi.pdf',
        cache: true,
      };
      return (
          <Pdf
            source={source}
            style={styles.pdf}
          />
      );
    }
  }
  export class Guc extends React.Component {
    render() {
      const source = {
        uri: 'http://baston.store/pdf/elektrikelektronik/guc.pdf',
        cache: true,
      };
      return (
          <Pdf
            source={source}
            style={styles.pdf}
          />
      );
    }
  }
  export class Haberlesme extends React.Component {
    render() {
      const source = {
        uri: 'http://baston.store/pdf/elektrikelektronik/haberlesmesistem.pdf',
        cache: true,
      };
      return (
          <Pdf
            source={source}
            style={styles.pdf}
          />
      );
    }
  }
  export class Sayisalkontrol extends React.Component {
    render() {
      const source = {
        uri: 'http://baston.store/pdf/elektrikelektronik/sayisalkontrol.pdf',
        cache: true,
      };
      return (
          <Pdf
            source={source}
            style={styles.pdf}
          />
      );
    }
  }