/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'



const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2FFEA',
    width: windowWidth,
    height: windowHeight
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: (windowHeight * 5) / 10,
    marginTop: (windowHeight * 1) / 10
  },
  logo: {
    width: (windowWidth * 7) / 10,
    height: (windowHeight * 5) / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    width: windowWidth,
    backgroundColor: '#F2FFEA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (windowWidth * 9) / 10,
    height: 57,
    marginBottom: (windowHeight * 1) / 10,

    borderBottomWidth: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24
  },
  uni: {
    color: '#406354',
    fontWeight: 'bold',
    fontSize: 13
  }
})

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.logo} source={require('../src/logo.png')} />
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Fakulte')}
          >
            <Text style={styles.uni}>Süleyman Demirel Üniversitesi</Text>
          </TouchableOpacity>
        </View>
      </View>
      
        
    </View>
  )
}

export default HomeScreen
