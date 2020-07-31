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
          onPress={() => navigation.navigate('Anaerobik')}>
          <Text style={styles.uni}>Anaerobik Prosesler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Aritma')}>
          <Text style={styles.uni}>Arıtma Çamurları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Aritmatesisi')}>
          <Text style={styles.uni}>Arıtma Tesisi işletimi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Bti')}>
          <Text style={styles.uni}>Bti</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Cevremikro')}>
          <Text style={styles.uni}>Çevre Mikrobiyolojisi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Cevreselmodelleme')}>
          <Text style={styles.uni}>Çevresel Modelleme</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Cmkiki')}>
          <Text style={styles.uni}>ÇMK 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Desalinasyon')}>
          <Text style={styles.uni}>Desalinasyon Prosesler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Girisimcilik')}>
          <Text style={styles.uni}>Girişimcilik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Havakirliligi')}>
          <Text style={styles.uni}>Hava Kirliliği</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Hidro')}>
          <Text style={styles.uni}>Hidrolik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Icmesulari')}>
          <Text style={styles.uni}>İçme Sularının Arıtılması</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Ileritemel')}>
          <Text style={styles.uni}>İleri Temel İşlemler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Istatistik')}>
          <Text style={styles.uni}>İstatistik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Mikro')}>
          <Text style={styles.uni}>Mikrobiyoloji Çıkmış Sorular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Temizenerji')}>
          <Text style={styles.uni}>Temiz Enerji</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('Zemin')}>
          <Text style={styles.uni}>Zemin Mekaniği</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Insaat;
