import { ImageBackground } from "react-native"
import { BarIndicator } from "react-native-indicators"

function Splash() {
    return (
        <>
            <ImageBackground
                source={require("../../assets/splash.png")}
                resizeMode='stretch'
                style={{ flex: 1, alignItems: "center", justifyContent: "center", transform: "scale" }}>
                <BarIndicator color="#FFF" style={{ top: 160 }} size={60} />
            </ImageBackground>
        </>
    )
}

export default Splash;