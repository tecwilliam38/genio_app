import { Alert, Text, TouchableOpacity } from "react-native";
import { ButtonStyles } from "./style.js";

function Button(props) {
    return (
        <TouchableOpacity
            style={[ButtonStyles.btn,
            props.theme == "danger" ?
                ButtonStyles.danger : ButtonStyles.primary]}
            onPress={props.onPress} >
            <Text style={ButtonStyles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;