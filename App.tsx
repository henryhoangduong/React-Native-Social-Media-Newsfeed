//Họ và tên: Dương Huy Hoàng
//MSSV:21522087
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeLayout from "./layout/HomeLayout";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
