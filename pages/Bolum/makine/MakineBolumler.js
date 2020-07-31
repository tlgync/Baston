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

export class Alisilmamis extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/alisilmamis.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Dogalgaz extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/dogalgaz.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Dogalgaziki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/dogalgaz2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Dogalgaztablo extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/dogalgaztablo.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Enerjiteknoiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/enerjitekno2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Enerjiteknovize extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/enerjiteknovize.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Gaz extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/gaz.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Gazguc extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/gazguc.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Hasar extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/hasar.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Imal extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/imal.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Isil extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/isil.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Korozyon extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/korozyon.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Makeliki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/makel2not.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Makelsoru extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/makel2soru.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Makineelemanlari extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/makel.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Makineteorisi extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/makineteorisi.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Malzemeiki extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/malzeme2.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Robotlar extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/robotlar.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Toz extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/toz.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
export class Yaglama extends React.Component {
  render() {
    const source = {
      uri: 'http://baston.store/pdf/makine/yaglama.pdf',
      cache: true
    }
    return <Pdf source={source} style={styles.pdf} />
  }
}
