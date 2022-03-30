import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Profile from "../pages/profile";
const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
