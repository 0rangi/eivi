import { StyleSheet, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface IBSlider extends TouchableOpacityProps {
    onPressI: () => void
    cor: boolean
}

export function Botao({ onPressI, cor }: IBSlider) {

    return (
        <>
            {cor ?
                <TouchableOpacity style={styles.bolaCor} onPress={onPressI} />
                :
                <TouchableOpacity style={styles.bola} onPress={onPressI} />
            }
        </>
    )
}