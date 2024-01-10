import { View, Text } from "react-native";

const App = () => {
  const number = 100;
  return (
    <View style={{ height: 1000, backgroundColor: "#fff" }}>
      <View style={{ height: 100, backgroundColor: "orange" }}></View>
      <View style={{ height: 100, backgroundColor: "white" }}></View>
      <View style={{ height: 100, backgroundColor: "green" }}></View>
      <Text> {number}</Text>
    </View>
  );
};

export default App;
