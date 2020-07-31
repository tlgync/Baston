// REACT
import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// PAGES
import Engineer from './pages/Fakulte/Engineer.js'
import Fenedebiyat from './pages/Fakulte/Fenedebiyat.js'
import HomeScreen from './pages/HomeScreen.js'
import FacultiesScreen from './pages/Faculty.js'

import Edebiyat from './pages/Bolum/edebiyat/Edebiyat.js'

//Edebiyat Dersler
import {
  Arapca,
  Cagataycabir,
  Cagataycaiki,
  Cumhuriyet,
  Eskiturk,
  Kipcak
} from './pages/Bolum/edebiyat/EdebiyatBolumler.js'

//muhendislik elektronik
import Elektrik from './pages/Bolum/elektrik/Elektrik.js'
import {
  Sayisalkontrol,
  Enerjiiletimi,
  Haberlesme,
  Guc
} from './pages/Bolum/elektrik/ElektrikBolumler.js'

//Insaat muhendisligi
import Insaat from './pages/Bolum/insaat/Insaat.js'
import {
  Autocad,
  Fiziknu,
  Fizikafo,
  Kalkulus,
  Kalkulusiki,
  Matiki,
  Mukavemetiki,
  Olcmebilgisi,
  Statik,
  Tarih,
  Turkdiliiki,
  Yapi,
  Yapistatigi
} from './pages/Bolum/insaat/InsaatBolumler.js'

//Makine muhendisligi
import Makine from './pages/Bolum/makine/Makine.js'
import {
  Alisilmamis,
  Dogalgaz,
  Dogalgaziki,
  Dogalgaztablo,
  Yaglama,
  Enerjiteknoiki,
  Enerjiteknovize,
  Gaz,
  Gazguc,
  Hasar,
  Isil,
  Imal,
  Korozyon,
  Makeliki,
  Makelsoru,
  Makineelemanlari,
  Makineteorisi,
  Malzemeiki,
  Robotlar,
  Toz
} from './pages/Bolum/makine/MakineBolumler.js'

//Enerji Sistemleri Muhendisligi
import Enerjisistemleri from './pages/Bolum/enerjisistemleri/Enerjisistemleri.js'
import {
  Akiskanlariki,
  Akiskanlarsoru,
  Hidrolik,
  Isitransferi,
  Isitransfericalisma,
  Isitransferitablo,
  Kalkulustwo,
  Malzemebilgisi,
  Temelelektrik,
  Termodinamik,
  Tesisat,
  Tesisatcalisma
} from './pages/Bolum/enerjisistemleri/EnerjisistemleriBolumler.js'

//Cevre Muhendisligi
import Cevre from './pages/Bolum/cevre/Cevre.js'
import {
  Anaerobik,
  Aritma,
  Aritmatesisi,
  Bti,
  Cevremikro,
  Cevreselmodelleme,
  Cmkiki,
  Desalinasyon,
  Girisimcilik,
  Havakirliligi,
  Hidro,
  Icmesulari,
  Ileritemel,
  Istatistik,
  Mikro,
  Temizenerji,
  Zemin
} from './pages/Bolum/cevre/CevreBolumler.js'

const Stack = createStackNavigator()

function App() {
  
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#406354" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Anasayfa',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Fakulte"
            component={FacultiesScreen}
            options={{
              title: 'Fakülteler',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Muh"
            component={Engineer}
            options={{
              title: 'Mühendislik ve Mimarlık Fakültesi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Fen"
            component={Fenedebiyat}
            options={{
              title: 'Fen Edebiyat Fakültesi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          {/* Edebiyat Bolumu */}
          <Stack.Screen
            name="Edebiyat"
            component={Edebiyat}
            options={{
              title: 'Edebiyat Bölümü',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          {/* Edebiyat Dersi */}
          <Stack.Screen
            name="Arapca"
            component={Arapca}
            options={{
              title: 'Arapca',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Cagatayca1"
            component={Cagataycabir}
            options={{
              title: 'Çağatayca 1',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Cagatayca2"
            component={Cagataycaiki}
            options={{
              title: 'Çağatayca 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Cumhuriyet"
            component={Cumhuriyet}
            options={{
              title: 'Cumhuriyet',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Eskiturk"
            component={Eskiturk}
            options={{
              title: 'Eski Türk',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Kipcak"
            component={Kipcak}
            options={{
              title: 'Kıpçak',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          {/* muhendislik bolumu */}
          {/* elektrik */}
          <Stack.Screen
            name="Elektrik"
            component={Elektrik}
            options={{
              title: 'Elektrik Elektronik Mühendisliği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Sayisalkontrol"
            component={Sayisalkontrol}
            options={{
              title: 'Sayısal Kontrol Sistemleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Enerjiiletimi"
            component={Enerjiiletimi}
            options={{
              title: 'Enerji İletimi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Haberlesme"
            component={Haberlesme}
            options={{
              title: 'Haberleşme Sistemleri Teorisi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Guc"
            component={Guc}
            options={{
              title: 'Güç Elektroniği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />

          {/* insaat muhendisligi */}
          <Stack.Screen
            name="Insaat"
            component={Insaat}
            options={{
              title: 'İnşaat Mühendisliği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Autocad"
            component={Autocad}
            options={{
              title: 'Autocad',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Fiziknu"
            component={Fiziknu}
            options={{
              title: 'Fizik 2 (N.U.)',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Fizikafo"
            component={Fizikafo}
            options={{
              title: 'Fizik 2 (A.F.Ö.)',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Kalkulus"
            component={Kalkulus}
            options={{
              title: 'Kalkülüs',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Kalkulusiki"
            component={Kalkulusiki}
            options={{
              title: 'Kalkülüs 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Matiki"
            component={Matiki}
            options={{
              title: 'Matematik 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Mukavemetiki"
            component={Mukavemetiki}
            options={{
              title: 'Mukavemet 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Olcmebilgisi"
            component={Olcmebilgisi}
            options={{
              title: 'Ölçme Bilgisi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Statik"
            component={Statik}
            options={{
              title: 'Statik',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Tarih"
            component={Tarih}
            options={{
              title: 'Tarih',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Turkdiliiki"
            component={Turkdiliiki}
            options={{
              title: 'Türk Dili 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Yapi"
            component={Yapi}
            options={{
              title: 'Yapı Malzemesinin Sınıflandırılması',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Yapistatigi"
            component={Yapistatigi}
            options={{
              title: 'Yapı Statiği 1',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />

          {/* Makine muhendisligi */}
          <Stack.Screen
            name="Makine"
            component={Makine}
            options={{
              title: 'Makine Mühendisliği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Alisilmamis"
            component={Alisilmamis}
            options={{
              title: 'Alışılmamış İmal Usülleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Dogalgaz"
            component={Dogalgaz}
            options={{
              title: 'Doğalgaz Uygulamaları',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Dogalgaziki"
            component={Dogalgaziki}
            options={{
              title: 'Doğalgaz Uygulamaları 2.Not',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Dogalgaztablo"
            component={Dogalgaztablo}
            options={{
              title: 'Doğalgaz Uygulamaları Tabloları',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Yaglama"
            component={Yaglama}
            options={{
              title: 'Endüstriyel Yağlama Teknikleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Enerjiteknoiki"
            component={Enerjiteknoiki}
            options={{
              title: 'Enerji Teknolojileri 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Enerjiteknovize"
            component={Enerjiteknovize}
            options={{
              title: 'Enerji Teknolojileri 2 (Vize Not)',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Gaz"
            component={Gaz}
            options={{
              title: 'Gaz Türbinleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Gazguc"
            component={Gazguc}
            options={{
              title: 'Gaz Türbinleri Güç Santralleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Hasar"
            component={Hasar}
            options={{
              title: 'Hasar Kriterleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Isil"
            component={Isil}
            options={{
              title: 'Isıl Sistem Teknikleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Imal"
            component={Imal}
            options={{
              title: 'İmal Usülleri',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Korozyon"
            component={Korozyon}
            options={{
              title: 'Korozyon',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Makeliki"
            component={Makeliki}
            options={{
              title: 'Makine Elemanları 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Makelsoru"
            component={Makelsoru}
            options={{
              title: 'Makine Elemanları Sorular',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Makineelemanlari"
            component={Makineelemanlari}
            options={{
              title: 'Makine Elemanları',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Makineteorisi"
            component={Makineteorisi}
            options={{
              title: 'Makine Teorisi ve Dinamiği Sorular',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Malzemeiki"
            component={Malzemeiki}
            options={{
              title: 'Malzeme Bilgisi 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Robotlar"
            component={Robotlar}
            options={{
              title: 'Robotlar',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Toz"
            component={Toz}
            options={{
              title: 'Toz Metalurjisine Giriş Sorular',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          {/* Enerji  sistemleri muhendisligi */}
          <Stack.Screen
            name="Enerjisistemleri"
            component={Enerjisistemleri}
            options={{
              title: 'Enerji Sistemleri Mühendisliği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Akiskanlariki"
            component={Akiskanlariki}
            options={{
              title: 'Akışkanlar Mekaniği 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Akiskanlarsoru"
            component={Akiskanlarsoru}
            options={{
              title: 'Akışkanlar Mekaniği Sorular',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Hidrolik"
            component={Hidrolik}
            options={{
              title: 'Hidrolik Panömatik  Sistemler',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Isitransferi"
            component={Isitransferi}
            options={{
              title: 'Isı Transferi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Isitransfericalisma"
            component={Isitransfericalisma}
            options={{
              title: 'Isı Transferi Çalışma',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Isitransferitablo"
            component={Isitransferitablo}
            options={{
              title: 'Isı Transferi Tabloları',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Kalkulusikii"
            component={Kalkulustwo}
            options={{
              title: 'Kalkülüs 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Malzemebilgisi"
            component={Malzemebilgisi}
            options={{
              title: 'Malzeme Bilgisi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Temelelektrik"
            component={Temelelektrik}
            options={{
              title: 'Temel Elektrik-Elektronik',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Termodinamik"
            component={Termodinamik}
            options={{
              title: 'Termodinamik',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Tesisat"
            component={Tesisat}
            options={{
              title: 'Tesisat Teknolojisi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Tesisatcalisma"
            component={Tesisatcalisma}
            options={{
              title: 'Tesisat Teknolojisi Çalışma',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          {/* Cevre Muhendisli */}
          <Stack.Screen
            name="Cevre"
            component={Cevre}
            options={{
              title: 'Çevre Mühendisliği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Anaerobik"
            component={Anaerobik}
            options={{
              title: 'Anaerobik Prosesler',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Aritma"
            component={Aritma}
            options={{
              title: 'Arıtma Çamurları',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Aritmatesisi"
            component={Aritmatesisi}
            options={{
              title: 'Arıtma Tesisi İşletimi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Bti"
            component={Bti}
            options={{
              title: 'Bti',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Cevremikro"
            component={Cevremikro}
            options={{
              title: 'Çevre Mikrobiyolojisi',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Cevreselmodelleme"
            component={Cevreselmodelleme}
            options={{
              title: 'Çevresel Modelleme',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Cmkiki"
            component={Cmkiki}
            options={{
              title: 'ÇMK 2',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Desalinasyon"
            component={Desalinasyon}
            options={{
              title: 'Desalinasyon Prosesler',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />

          <Stack.Screen
            name="Girisimcilik"
            component={Girisimcilik}
            options={{
              title: 'Girişimcilik',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Havakirliligi"
            component={Havakirliligi}
            options={{
              title: 'Hava Kirliliği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Hidro"
            component={Hidro}
            options={{
              title: 'Hidrolik',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Icmesulari"
            component={Icmesulari}
            options={{
              title: 'İçme Sularının Arıtılması',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Ileritemel"
            component={Ileritemel}
            options={{
              title: 'İleri Temel İşlemler',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Istatistik"
            component={Istatistik}
            options={{
              title: 'İstatistik',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Mikro"
            component={Mikro}
            options={{
              title: 'Mikrobiyoloji Çıkmış Sorular',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Temizenerji"
            component={Temizenerji}
            options={{
              title: 'Temiz Enerji',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
          <Stack.Screen
            name="Zemin"
            component={Zemin}
            options={{
              title: 'Zemin Mekaniği',
              headerStyle: {
                backgroundColor: '#406354'
              },
              headerTintColor: '#F2FFEA',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
