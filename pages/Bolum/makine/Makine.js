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

function Makine({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Alisilmamis')}>
          <Text style={styles.uni}>Alışılmamış İmal Usülleri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Dogalgaz')}>
          <Text style={styles.uni}>Doğalgaz Uygulamaları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Dogalgaziki')}>
          <Text style={styles.uni}>Doğalgaz Uygulamaları 2.Not</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Dogalgaztablo')}>
          <Text style={styles.uni}>Doğalgaz Uygulamaları Tabloları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Yaglama')}>
          <Text style={styles.uni}>Endüstriyel Yağlama Teknikleri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Enerjiteknoiki')}>
          <Text style={styles.uni}>Enerji Teknolojileri 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Enerjiteknovize')}>
          <Text style={styles.uni}>Enerji Teknolojileri 2 (Vize Not)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Gaz')}>
          <Text style={styles.uni}>Gaz Türbinleri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Gazguc')}>
          <Text style={styles.uni}>Gaz Türbinleri Güç Santralleri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Hasar')}>
          <Text style={styles.uni}>Hasar Kriterleri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Imal')}>
          <Text style={styles.uni}>İmal Usülleri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Isil')}>
          <Text style={styles.uni}>Isıl Sistem Teknikleri</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Korozyon')}>
          <Text style={styles.uni}>Korozyon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Makeliki')}>
          <Text style={styles.uni}>Makine Elemanları 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Makelsoru')}>
          <Text style={styles.uni}>Makine Elemanları Sorular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Makineelemanlari')}>
          <Text style={styles.uni}>Makine Elemanları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Makineteorisi')}>
          <Text style={styles.uni}>Makine Teorisi ve Dinamiği Sorular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Malzemeiki')}>
          <Text style={styles.uni}>Malzeme Bilgisi 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Robotlar')}>
          <Text style={styles.uni}>Robotlar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Toz')}>
          <Text style={styles.uni}>Toz Metalurjisine Giriş Sorular</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Makine;
