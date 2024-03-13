import {StyleSheet, TouchableOpacityProps} from "react-native";
import {TouchableOpacity} from "react-native";
import {styles} from "./styles";


export function Botao(rest: TouchableOpacityProps) {

return(
    <TouchableOpacity style={styles.bola} {...rest} />
)

}