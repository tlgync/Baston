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

export class Akiskanlariki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/akiskanlar2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Akiskanlarsoru extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/akiskanlarsoru.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Hidrolik extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/hidrolik.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Isitransferi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/isitransferi.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Isitransfericalisma extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/isitransfericalisma.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Isitransferitablo extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/isitransferitablo.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Kalkulustwo extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/kalkulus2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Malzemebilgisi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/malzemebilgisi.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Temelelektrik extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/temelelektrik.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Termodinamik extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/termodinamik2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Tesisat extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/tesisat.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Tesisatcalisma extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/enerjisistemleri/tesisatcalisma.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
