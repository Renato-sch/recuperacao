import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Saitama from "../../assets/saitama.png";
import { style } from "./styles";

export default function Home() {
  const { navigate } = useNavigation();

  const handleNavigation = () => navigate("Profile");

  return (
    <View style={style.container}>
      <Image style={style.img} source={Saitama} />
      <View style={style.viewButton}>
        <TouchableOpacity
          onPress={handleNavigation}
          activeOpacity={0.7}
          style={style.button}
        >
          <Text style={style.text}>Clique aqui para conhecer nosso heroi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
