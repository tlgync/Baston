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

export class Autocad extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/autocad.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Fizikafo extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/fizik2afo.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Fiziknu extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/fizik2nu.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Kalkulus extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/kalkulus.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Kalkulusiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/kalkulus2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Matiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/matematik2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Mukavemetiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/mukavemet2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Olcmebilgisi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/olcmebilgisi.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Statik extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/statik.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Tarih extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/tarih2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Turkdiliiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/turkdili2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Yapi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/yapimalzeme.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Yapistatigi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/insaat/yapistatigi.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
