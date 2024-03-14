import React from 'react'
import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native'
import { styles } from './styles'
import { useFonts, PaytoneOne_400Regular } from '@expo-google-fonts/paytone-one';
import { Botao } from '../../components/botao';
import { IPage } from '../../../App';

export function Slide1({ setPage }: IPage) {
    const slide = require('../../assets/eivibg2.png')
    const image1 = require('../../assets/ei1.png')
    const image2 = require('../../assets/eii.png')
    return (
        <ImageBackground style={styles.container} source={slide} >

            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between'
            }}>


                <View>
                    <Image style=
                        {styles.img1} source={image1}></Image>
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
                            width: 275,
                            height: 204,
                            marginTop: 40,
                        }}

                        source={image2} />

                </View>


                <View>
                    <Botao onPressI={() => setPage(1)} cor={true} />
                    <Botao onPressI={() => setPage(2)} cor={false} />
                </View>


            </View>

        </ImageBackground>
    )
}


