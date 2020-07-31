import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView
} from 'react-native';



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

function Edebiyat({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Arapca')}>
          <Text style={styles.uni}>Arapça</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Cagatayca1')}>
          <Text style={styles.uni}>Çağatayca 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Cagatayca2')}>
          <Text style={styles.uni}>Çağatayca 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Cumhuriyet')}>
          <Text style={styles.uni}>Cumhuriyet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Eskiturk')}>
          <Text style={styles.uni}>Eski Türk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Kipcak')}>
          <Text style={styles.uni}>Kıpçak</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Edebiyat;
