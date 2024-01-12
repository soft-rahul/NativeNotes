import { useState } from "react";
import { View, Text, Button } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);
  const handlePress = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <View style={{ height: 1000, backgroundColor: "#000" }}>
      <Text> Count is : {count}</Text>
      <Button
        title="Update Value"
        onPress={handlePress}
        color="red"
        disabled={count === 10}
      />
    </View>
  );
};

export default App;
