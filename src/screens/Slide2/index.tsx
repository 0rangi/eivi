import React from 'react'
import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native'
import { styles } from './styles'
import { useFonts, PaytoneOne_400Regular } from '@expo-google-fonts/paytone-one';

export function Slide2() {
    const slide = require('../../assets/eivibg2.png')
    const image2 = require('../../assets/quadro.png')
    const image1 = require('../../assets/chat.png')
    return (
        <ImageBackground style={styles.container} source={slide} >

            <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'space-between'
            }}>

                 <View>
                    <Text style={styles.text}>

                    Crie uma  {'\n'} comunidade!
                    
                    </Text>
                </View>

                <View>
                        <Image style= {styles.view} source={image1}></Image>
                </View>


                     <View>

                         <Image style= {{
                             width:327,
                             height:206,
                              marginTop:30, 
                              marginBottom:20,
                          }} source={image2}/>
                     </View>

                  <View></View>
                 

            </View>

        </ImageBackground>
    )
}


