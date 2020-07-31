import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

import Pdf from 'react-native-pdf'

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

export class Arapca extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/edebiyat/arapca.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Cagataycabir extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/edebiyat/cagataycabir.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Cagataycaiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/edebiyat/cagataycaiki.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Cumhuriyet extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/edebiyat/cumhuriyet.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Eskiturk extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/edebiyat/eskiturk.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Kipcak extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/edebiyat/kipcak.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
