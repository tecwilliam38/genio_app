import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import AbaProfileScreen from "../abaprofile";
import { COLORS } from "../../constants/theme";

// Abas
import AbaCalendar from "../abacalendar";
import icon from "../../constants/icon";
import AbaHome from "../abahome";

const Tab = createBottomTabNavigator();

function Main() {
    return <Tab.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Tab.Screen name="Calendar" component={AbaCalendar} options={{
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
                return <Image source={icon.home} style={
                    {
                        width: 25,
                        height: 25,
                        opacity: focused ? 1 : 0.3
                    }
                } />
            }
        }} />

        <Tab.Screen name="Home" component={AbaHome} options={{
            headerTitleAlign: "center",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icon.calendar} style={
                    {
                        width: 25,
                        height: 25,
                        opacity: focused ? 1 : 0.3,
                        color: focused ? COLORS.red : COLORS.red,
                    }
                } />
            }
        }} />
        <Tab.Screen name="Profile" component={AbaProfileScreen} options={{
            headerTitleAlign: "center",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icon.profile}  style={
                    {
                        width: 25,
                        height: 25,
                        opacity: focused ? 1 : 0.3,
                        color: focused ? COLORS.red : COLORS.red,
                    }
                } />
            }
        }} />
    </Tab.Navigator>
}

export default Main;