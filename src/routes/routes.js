import { useContext, useState } from 'react';
import ProtectedRoutes from './private.routes';
import PublicRoutes from './public.routes';
import { AuthContext } from '../contexts/auth';
import { ImageBackground, Text, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';
import Splash from '../screens/splash';

function Routes(props) {
    // const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);


    // {
    //     !loading ?
    //     ""
    //     :
    //     setTimeout((props) => {
    //         setLoading(false);
    //     }, 5000)
    //     return <Splash />
    // }


    return user.id_user ? <ProtectedRoutes />
        : <PublicRoutes />

}

export default Routes;
// if (loading) {
//     setTimeout(() => {
//         setLoading(false);
//     }, 5000);
//     return <Splash />
// }