//Họ và tên: Dương Huy Hoàng
//MSSV:21522087
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Post from "../components/Post";
import { PostProps } from "../components/Post";

const data: PostProps[] = [
  {
    userName: "Henry",
    avatar:
      "https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg",
    caption: "Have fun with friend",
    image: "https://roadtrip.vn/files/2022/09/road-trip-ladakh-768x768.jpg",
    like: 10,
    cmt: 15,
    share: 20,
  },
  {
    userName: "David Johnson",
    avatar:
      "https://fiverr-res.cloudinary.com/videos/so_0.379904,t_main1,q_auto,f_auto/yqkqrmhjwpqqgznzmpen/create-your-personalized-animated-talking-avatar-using-powerful-ai.png",
    caption: "Have fun with friend",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2022/01/pexels-matheus-bertelli-3856033-945x630.jpg",
    like: 10,
    cmt: 15,
    share: 20,
  },
  {
    userName: "Taylor Swift",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6hc0wGQGTtgqvdSoLqpQfpMrTLZVkl0wUQ&s",
    caption: "Have fun with friend",
    image:
      "https://www.smartertravel.com/wp-content/uploads/2020/02/AdobeStock_254276986-1200x627.jpeg",
    like: 10,
    cmt: 15,
    share: 20,
  },
  {
    userName: "Tony Parker",
    avatar:
      "https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg",
    caption: "Have fun with friend",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGOJM6Z7_YCz1h-34F3s1iY_pOgX4xhp0yA&s",
    like: 10,
    cmt: 15,
    share: 20,
  },
];

const HomeLayout = () => {
  return (
    <View style={[styles.root]}>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.ScrollView}
      >
        <View style={{ height: 50 }}></View>
        {data.map((item, index) => {
          return <Post {...item} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#EAEFF2",
    paddingBottom: 20,
  },
  ScrollView: {
    backgroundColor: "#EAEFF2",
    gap: 10,
    alignItems: "center",
    width: "100%",
  },
});
