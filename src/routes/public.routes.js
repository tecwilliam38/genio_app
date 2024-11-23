import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signin";
import Splash from "../screens/splash/index";
import { useState } from "react";
import SignUpScreen from "../screens/signup";



const Stack = createNativeStackNavigator()

function PublicRoutes(){
    const { loading, setLoading } = useState(true);

    
    if(loading){
        setTimeout(() => {
            setLoading(false);
        }, 113000);
        return(<Splash/>)
    }

    return <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />        
        <Stack.Screen name="SignUp" component={SignUpScreen} />        
    </Stack.Navigator>
}

export default PublicRoutes;