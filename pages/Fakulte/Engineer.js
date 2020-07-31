import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView
} from 'react-native'

const windowWidth = Dimensions.get('window').width
//const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2FFEA',
    width: windowWidth
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 57,
    borderRadius: 40,
    backgroundColor: '#F2FFEA',
    marginTop: 10
  },
  uni: {
    color: '#406354',
    fontWeight: 'bold',
    fontSize: 15
  }
})

function Engineer({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('Elektrik')}
      >
        <Text style={styles.uni}>Elektrik Elektronik Mühendisliği</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('Insaat')}
      >
        <Text style={styles.uni}>İnşaat Mühendisliği</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('Makine')}
      >
        <Text style={styles.uni}>Makine Mühendisliği</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('Enerjisistemleri')}
      >
        <Text style={styles.uni}>Enerji Sistemleri Mühendisliği</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('Cevre')}
      >
        <Text style={styles.uni}>Çevre Mühendisliği</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Engineer
