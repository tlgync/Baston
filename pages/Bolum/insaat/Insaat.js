import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
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

function Insaat({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Autocad')}>
          <Text style={styles.uni}>Autocad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Fiziknu')}>
          <Text style={styles.uni}>Fizik 2 (N.U.)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Fizikafo')}>
          <Text style={styles.uni}>Fizik 2 (A.F.O)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Kalkulus')}>
          <Text style={styles.uni}>Kalkülüs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Kalkulusiki')}>
          <Text style={styles.uni}>Kalkülüs 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Matiki')}>
          <Text style={styles.uni}>Matematik 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Mukavemetiki')}>
          <Text style={styles.uni}>Mukavemet 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Olcmebilgisi')}>
          <Text style={styles.uni}>Ölçme Bilgisi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Statik')}>
          <Text style={styles.uni}>Statik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Tarih')}>
          <Text style={styles.uni}>Tarih</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Turkdiliiki')}>
          <Text style={styles.uni}>Türk Dili 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Yapi')}>
          <Text style={styles.uni}>Yapı Malzemesinin Sınıflandırılması</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Yapistatigi')}>
          <Text style={styles.uni}>Yapı Statiği 1</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Insaat;
