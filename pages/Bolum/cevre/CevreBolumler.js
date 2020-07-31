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

export  class Anaerobik extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/anaerobikprosesler.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Aritma extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/aritmacamurlari.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Aritmatesisi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/aritmatesisi.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Bti extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/bti.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Cevremikro extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/cevremikrobiyolojisi.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Cevreselmodelleme extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/cevreselmodelleme.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Cmkiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/cmk2.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Desalinasyon extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/desalinasyonprosesler.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Girisimcilik extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/girisimcilik.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Havakirliligi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/havakirliligi.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Hidro extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/hidrolik.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Icmesulari extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/icmesulari.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Ileritemel extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/ileritemelislemler.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Istatistik extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/istatistik.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Mikro extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/mikrobiyolojisorular.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Temizenerji extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/temizenerji.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
export  class Zemin extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/cevre/zeminmekanigi.pdf',
      cache: true
    }
    return (
      <Pdf
        source={source}
        style={styles.pdf}
      />
    )
  }
}
