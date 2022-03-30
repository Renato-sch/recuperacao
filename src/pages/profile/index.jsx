import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Saitama from "../../assets/saitama.png";
import { style } from "./styles";

export default function Profile() {
  const { goBack } = useNavigation();

  const handleBack = () => goBack();

  return (
    <View style={style.container}>
      <View style={style.icon}>
        <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
          <AntDesign name="arrowleft" size={18} color="#291e1c" />
        </TouchableOpacity>
      </View>
      <Image style={style.img} source={Saitama} />
      <View style={style.formatText}>
        <Text style={style.title}>
          Nome: <Text style={style.color}>Saitama</Text>
        </Text>
        <Text style={style.title}>
          Apelido: <Text style={style.color}>Careca de capa, Sensei</Text>
        </Text>
        <Text style={style.title}>
          Altura:<Text style={style.color}> 1,75</Text>
        </Text>
        <Text style={style.title}>
          Peso:<Text style={style.color}> 70 kg</Text>
        </Text>
      </View>
      <View style={style.formatText}>
        <Text style={style.title}>
          Localização: <Text style={style.color}> Cidade Z</Text>
        </Text>
        <Text style={style.title}>
          Parceiros: <Text style={style.color}> Genos</Text>
        </Text>
        <Text style={style.title}>
          Dublador japonês:<Text style={style.color}> Makoto Furukawa</Text>
        </Text>
        <Text style={style.title}>
          Dublador ingles:<Text style={style.color}> Max Mittelman</Text>
        </Text>
      </View>
    </View>
  );
}
