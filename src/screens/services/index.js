import { FlatList, Text, View, Image, Alert, ImageBackground } from "react-native";
import { styles } from "./style.js";
import icon from "../../constants/icon";
import Service from "../../components/service/index";
import api from "../../constants/api";
import { useEffect, useState } from "react";

function ServicesScreen(props) {

    const iconBarber = props.route.params.icon;
    const { id_barber, name, specialty } = props.route.params;
    const bgBanner = require('../../assets/logoBg.png');
    const [barberServices, setBarberServices] = useState([]);

    function ClickService(id_service) {
        props.navigation.navigate("Agenda", { id_barber, id_service })
    }

    async function LoadServices() {
        try {
            const response = await api.get("/barbers/" + id_barber + "/services");
            if (response.data) {
                setBarberServices(response.data)
            }
        } catch (error) {
            if (error.response?.data.error)
                console.log(error.response.data.error);
        }
    }

    useEffect(() => {
        LoadServices();
    }, [])

    return <View style={styles.container}>

        <ImageBackground source={bgBanner} resizeMode="cover" >
            <View style={styles.banner}>
                <Image source={iconBarber == "M" ? icon.female : icon.male} resizeMode="cover" />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.specialty}>{specialty}</Text>
                <Text style={styles.specialty}>{barberServices?.description}</Text>
            </View>
        </ImageBackground>
        <FlatList data={barberServices}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                  <Service
                             id_service={item.id_service}
                             description={item.description}
                             price={item.price}
                             onPress={ClickService} 
                            />                  
                )
            }} />
    </View>
}

export default ServicesScreen;