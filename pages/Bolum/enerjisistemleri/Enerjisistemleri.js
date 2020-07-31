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

function Enerjisistemleri({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Akiskanlariki')}>
          <Text style={styles.uni}>Akışkanlar Mekaniği 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Akiskanlarsoru')}>
          <Text style={styles.uni}>Akışkanlar Mekaniği Soru</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Hidrolik')}>
          <Text style={styles.uni}>Hidrolik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Isitransferi')}>
          <Text style={styles.uni}>Isı Transferi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Isitransfericalisma')}>
          <Text style={styles.uni}>Isı Transferi Çalışma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Isitransferitablo')}>
          <Text style={styles.uni}>Isı Transferi Tablolar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Kalkulusikii')}>
          <Text style={styles.uni}>Kalkülüs 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Malzemebilgisi')}>
          <Text style={styles.uni}>Malzeme Bilgisi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Temelelektrik')}>
          <Text style={styles.uni}>Temel Elektrik-Elektronik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Termodinamik')}>
          <Text style={styles.uni}>Termodinamik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Tesisat')}>
          <Text style={styles.uni}>Tesisat Teknolojisi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Tesisatcalisma')}>
          <Text style={styles.uni}>Tesisat Teknolojisi Çalışma</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Enerjisistemleri;
