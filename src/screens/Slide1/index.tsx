import React from 'react'
import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native'
import { styles } from './styles'
import { useFonts, PaytoneOne_400Regular } from '@expo-google-fonts/paytone-one';

export function Slide1() {
    const slide = require('../../assets/eivibg2.png')
    const image1 = require('../../assets/ei1.png')
    const image2 = require('../../assets/eii.png')
    return (
        <ImageBackground style={styles.container} source={slide} >

            <View>

                <View>
                        <Image style=
                        {{
                            width:288,
                            height:288,
                           marginTop:70,
                           marginLeft:60,
                           marginRight:40,
                           marginBottom: 20,
                            justifyContent: 'center'

                        }} source={image1}></Image>
                </View>


                <View>
                    <Text
                    style={styles.text}
                    >
                    Se conecte às pessoas próximas a você com o
“EiVi”
                    </Text>
                </View>


                <View>

                <Image 
                style=
                {{
                    width:275,
                    height:204,
                    marginTop:20,
                    marginLeft:65,
                    marginRight:40,
                 
                   
                    justifyContent: 'center'

                }} 
                
                source={image2}/>

                </View>

            </View>

            <View>

            </View>

        </ImageBackground>
    )
}


