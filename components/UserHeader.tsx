//Họ và tên: Dương Huy Hoàng
//MSSV:21522087
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

interface UserHeaderProps {
  name?: string;
  avatar?: string;
}

const UserHeader = ({
  name = "Henry",
  avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMl1uN124bLwPkEt7VC1HxLtsBHEyE5vHITA&s",
}: UserHeaderProps) => {
  return (
    <View style={[styles.root]}>
      <Avatar.Image size={60} source={{ uri: avatar }} />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
