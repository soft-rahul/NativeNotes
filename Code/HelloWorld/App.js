import { View, Text, Image } from "react-native";
import ImgIcon from "./assets/adaptive-icon.png";

const App = () => {
  const number = 100;
  return (
    <View style={{ height: 1000, backgroundColor: "#fff" }}>
      <View style={{ height: 100, backgroundColor: "orange" }}></View>
      <View style={{ height: 100, backgroundColor: "white" }}></View>
      <View style={{ height: 100, backgroundColor: "green" }}></View>
      <Text> {number}</Text>
      <View>
        <Image source={ImgIcon} style={{ height: 200, width: 200 }} />
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          style={{ height: 300, width: 300 }}
        />
      </View>
    </View>
  );
};

export default App;
