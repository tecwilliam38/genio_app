import { useContext, useEffect, useState } from "react";

import { View, Text, Image } from "react-native";
import icon from "../../constants/icon"
import api from "../../constants/api"
import Button from "../../components/button/button"

// Context
import { AuthContext } from "../../contexts/auth"
import { ProfileStyles } from "./style";

function AbaProfileScreen() {
    const { container, headerBg, buttonView, item, title, text } = ProfileStyles;
    const { setUser } = useContext(AuthContext);
    const [profileUser, setProfileUser] = useState({});

    async function UserProfile() {
        try {
            const response = await api.get("/users/profile");
            setProfileUser(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        UserProfile();
    }, [])

    function Logout() {
        setTimeout(() => {
            api.defaults.headers.common['authorization'] = "";
            setUser({});
        }, 1000);
    }

    return <View styles={container}>
        <Image source={icon.logo} style={headerBg} resizeMode="cover" />
        <View style={item}>
            <Text style={title}>Nome:</Text>
            <Text style={text}>{profileUser.name}</Text>
        </View>

        <View style={item}>
            <Text style={title}>E-mail:</Text>
            <Text style={text}>{profileUser.email}</Text>
        </View>
        <View style={buttonView}>
            <Button text="Desconectar" theme="danger" onPress={Logout} />
        </View>
    </View>
}

export default AbaProfileScreen;