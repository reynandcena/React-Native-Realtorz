import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigation";
import Filter from "../screens/Filter";
import Notifications from "../screens/Notifications";
import Map from "../screens/Map";
import Details from "../screens/Details";
import ChatWindow from "../screens/ChatWindow";
import PastTours from "../screens/PastTours";
import RecentlyViewed from "../screens/RecentlyViewed";
import EditProfile from "../screens/EditProfile";
import MyListings from "../screens/MyListings";
import AddNewProperty1 from "../screens/AddNewProperty1";

const StackNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
            }}
            initialRouteName="HomeScreen"
        >
            
            <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="ChatWindow" component={ChatWindow} />
            <Stack.Screen name="PastTours" component={PastTours} />
            <Stack.Screen name="RecentlyViewed" component={RecentlyViewed} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="MyListings" component={MyListings} />
            <Stack.Screen name="ANP1" component={AddNewProperty1} />

        </Stack.Navigator>
    )
}

export default StackNavigation