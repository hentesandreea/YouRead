import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Books from "./Books";
import Home from "./Home";
import BookDetails from "./BookDetails";
const Stack = createNativeStackNavigator()

function HomeStack(){
    return(
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={Home}/>
                <Stack.Screen name={'Books'} component={Books}/>
                <Stack.Screen name={'BookDetails'} component={BookDetails}/>
            </Stack.Navigator>
        )


}

export default HomeStack;