import React from "react";
import { Dimensions, Image, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              "https://wagonsclub.oss-cn-beijing.aliyuncs.com/static/carousel/carousel1_bg.jpg"
          }}
          style={{ width: Dimensions.get("window").width, height: 1000 }}
        />
      </View>
    );
  }
}
