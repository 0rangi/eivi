import { Dispatch, SetStateAction, useState } from 'react'
import { Slide2 } from './src/screens/Slide2'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, PaytoneOne_400Regular } from '@expo-google-fonts/paytone-one';

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}

export default function App() {


  const [page, setPage] = useState(1)

  let [fontsLoaded] = useFonts({
    PaytoneOne_400Regular
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <Slide2 />
  );
}




