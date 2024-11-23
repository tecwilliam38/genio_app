import { Text, View } from "react-native";
import { styles } from "./style.js";
import Button from "../button/button.js";

function Service(props) {
    const { service, containerText, containerButton, description, price } = styles;
    return (
        <>
            <View style={service}>
                <View style={containerText}>
                    <Text style={description}>{props.description}</Text>
                    <Text style={price}>
                        {
                            new Intl.NumberFormat("pt-BR", {
                                style: "currency", currency: "BRL"
                            }).format(props.price)
                        }

                    </Text>
                    <View style={containerButton}>
                        <Button text="Agendar" onPress={() => props.onPress(props.id_service)} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default Service;