import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import HomeStack from "./screens/app/HomeStack";
import Favourites from "./screens/app/Favourites";
import Profile from "./screens/app/Profile";
import {useState} from "react";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login} options={{headerShown: true}}/>
            <Stack.Screen name={'Register'} component={Register} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'HomeStack'} component={HomeStack}/>
            {/*<Tab.Screen name={'Favourites'} component={Favourites}/>*/}
            {/*<Tab.Screen name={'Profile'} component={Profile}/>*/}
        </Tab.Navigator>
    )
}

export default function App() {
    const [isLogged, setIsLogged] = useState(false)
    return (
        <NavigationContainer>{
            isLogged ?
                <BottomTab />
                :
                <StackNav/>
        }
        </NavigationContainer>
    );
}

