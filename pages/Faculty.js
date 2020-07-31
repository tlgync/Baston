import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions, View, SafeAreaView} from 'react-native';



const windowWidth = Dimensions.get('window').width;
//const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2FFEA',
    width: windowWidth,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    height: 57,
    borderRadius: 40,
    backgroundColor: '#F2FFEA',
    marginTop: 10,
  },
  uni: {
    color: '#406354',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

function FacultiesScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('Muh')}>
        <Text style={styles.uni}>Mühendislik ve Mimarlık Fakültesi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate('Fen')}>
        <Text style={styles.uni}>Fen Edebiyat Fakültesi</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default FacultiesScreen;
