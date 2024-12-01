//Họ và tên: Dương Huy Hoàng
//MSSV:21522087
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import UserHeader from "./UserHeader";
import { icons } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export interface PostProps {
  userName?: string;
  avatar?: string;
  caption?: string;
  image?: string;
  like?: number;
  cmt?: number;
  share?: number;
}

type IconProp = {
  name: keyof typeof icons;
  color?: string;
};
const Icon = ({ name, color = "black", ...rest }: IconProp) => {
  const IconComponent = icons[name];
  return <IconComponent color={color} {...rest} />;
};

const Post = ({
  userName = "Henry",
  avatar = "https://thumbs.dreamstime.com/b/generative-ai-young-smiling-man-avatar-man-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-d-vector-people-279560903.jpg",
  caption = "Have fun with friend",
  image = "https://www.meetup.com/blog/wp-content/uploads/2022/01/pexels-matheus-bertelli-3856033-945x630.jpg",
  cmt = 0,
  share = 0,
  like = 0,
}: PostProps) => {
  const [like_, setLike] = useState(like);
  const [share_, setShare] = useState(share);
  const [cmt_, setCmt] = useState(cmt);
  const [islike, setIsLike] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isCmt, setIsCmt] = useState(false);
  return (
    <View style={styles.root}>
      <View style={styles.userHeader}>
        <UserHeader name={userName} avatar={avatar} />
      </View>
      <View style={styles.caption}>
        <Text style={{ fontSize: 16 }}>{caption}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={[{ width: "100%" }]}>
        <View style={styles.likesharecmtinfo}>
          <Text style={{ color: "#9d9e9f" }}>{like_} likes</Text>
          <Text style={{ color: "#9d9e9f" }}>{cmt_} comments</Text>
          <Text style={{ color: "#9d9e9f" }}>{share_} shares</Text>
        </View>
      </View>
      <View
        style={{ width: "100%", backgroundColor: "#e0dbdb", height: 1 }}
      ></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setIsLike(!islike);
            if (islike) {
              setLike(like_ - 1);
            } else {
              setLike(like_ + 1);
            }
          }}
        >
          <Icon name={"ThumbsUp"} color={islike ? "#0866FF" : "black"} />
          <Text style={{ color: islike ? "#0866FF" : "black" }}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setIsCmt(true);
            setCmt(cmt_ + 1);
          }}
        >
          <Icon name={"MessageSquare"} color={isCmt ? "#0866FF" : "black"} />
          <Text style={{ color: isCmt ? "#0866FF" : "black" }}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsShare(true);
            setShare(share_ + 1);
          }}
          style={styles.btn}
        >
          <Icon name={"ExternalLink"} color={isShare ? "#0866FF" : "black"} />
          <Text style={{ color: isShare ? "#0866FF" : "black" }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    height: 500,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  userHeader: {
    width: "100%",
    justifyContent: "center",
  },
  caption: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    marginVertical: 10,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  likesharecmtinfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
