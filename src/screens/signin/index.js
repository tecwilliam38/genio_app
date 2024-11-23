import { View, Text, StatusBar, ImageBackground, Image, KeyboardAvoidingView, TouchableOpacity, Alert } from "react-native";
import { Input } from "react-native-elements";
import { SignInStyles } from "./style"
import Icon from "react-native-vector-icons/FontAwesome"
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useContext, useState } from "react";
import Button from "../../components/button/button";
import { AuthContext } from "../../contexts/auth"
import api from "../../constants/api"

function SignInScreen(props) {
    const { container, containerLogo, logo, titleText, bodyStyle, keyboardStyle, containerInput,
        input, footer, footerText, footerLink } = SignInStyles;

    const fundo = require("../../assets/bgLogin.png");
    const iconLogo = require("../../assets/icon.png");

    const { setUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(true);

    // const [email, setEmail] = useState("williamfrs_33@hotmail.com");
    // const [password, setPassword] = useState("091@William");
    // const [email, setEmail] = useState("lorenna_leal@hotmail.com");
    // const [password, setPassword] = useState("123456");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function HandleSignin(params) {
        try {
            const response = await api.post("/users/login", {
                email,
                password,
            });
            if (response.data) {
                //Guarda o token no cabeçário para reaproveitar na aplicação:
                api.defaults.headers.common['authorization'] = "Bearer " + response.data.token;
                setUser(response.data)
            }           
        } catch (error) {
            if (error.response?.data.error)
                console.log(error.response.data.error);
        }
    }

    function ClickSignUp() {
        props.navigation.navigate("SignUp")
    }


    return <ImageBackground source={fundo} style={container}>
        <StatusBar hidden={true} />
        <View style={container}>
            <View style={containerLogo}>
                <Image source={iconLogo} resizeMode="cover" style={logo} />
            </View>
            <Text style={titleText}>Gênio do Corte</Text>
            <View style={bodyStyle} >
                <KeyboardAvoidingView behavior='padding'
                    style={keyboardStyle}>
                    <Input
                        placeholderTextColor={"#fff"}
                        style={{ color: "#fff", marginLeft: 10, width: '100%' }}
                        placeholder='E-mail'
                        value={email}
                        onChangeText={setEmail}
                        leftIcon={<Icon
                            name='envelope'
                            size={22}
                            color='#fff'
                        />}
                    />
                    <Input
                        placeholder='Password'
                        placeholderTextColor={"#fff"}
                        style={{ color: "#fff", marginLeft: 10 }}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={showPass}
                        leftIcon={
                            <IconEntypo
                                name={showPass ? "eye-with-line" : "eye"}
                                size={22}
                                color='#fff'
                                onPress={() => setShowPass(!showPass)}
                            />
                        }
                    />
                    <Button onPress={HandleSignin} text="Login" theme="primary" />
                    <View style={footer}>
                        <Text style={footerText}>Não tenho conta. </Text>
                        <TouchableOpacity onPress={ClickSignUp} >
                            <Text style={footerLink}
                            >Criar conta agora.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
    </ImageBackground>
}

export default SignInScreen;