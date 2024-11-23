import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/theme";

// Pages
// import SignInScreen from "../screens/signin";
import Main from "../screens/main";
import ServicesScreen from "../screens/services";
import Schedule from "../screens/schedule";
import { Image, StyleSheet } from "react-native";


const Stack = createNativeStackNavigator()

function ProtectedRoutes() {
    const headerBg = require("../assets/logoBg.png");
    return <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Main" component={Main} />
       
        <Stack.Screen name="Services" component={ServicesScreen}
            options={{
                headerBackground: () => (
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={headerBg}
                    />
                ),
                headerTitle: "Serviços",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTintColor: COLORS.white,
            }} />
        
        <Stack.Screen name="Agenda" component={Schedule} options={{
            headerTitle: "Fazer uma reserva",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTintColor: COLORS.blue
        }} />
    </Stack.Navigator>
}

export default ProtectedRoutes;