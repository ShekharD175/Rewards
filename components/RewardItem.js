import { StyleSheet, Text, View, Image } from "react-native";

function RewardItem(props) {
        
    return (
        <View style={styles.containerView}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{ uri: props.reward.rewardTo.imageUrl }} />
            </View>
            <View style={styles.innerContainer}>
                <Text style={[styles.textStyleDescription, { fontWeight: "bold" }]}>
                  {props.reward.discription}
                </Text>
                <Text style={styles.textStyleValue}>
                  {props.reward.rewardTo.name} rewarded By {props.reward.rewardBy}
                </Text>
                <Text style={styles.textStyleValue}>
                  {props.reward.timeStamp}
                </Text>
            </View>
        </View>
  );
}

export default RewardItem;

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    // paddingHorizontal: 20
  },
  innerContainer: {
    flex: 4,
    padding: 5,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 15
  },
  imageStyle: {
    borderRadius: 30,
    height: 60,
    aspectRatio: "1"
  },
  textStyleDescription: {
    marginHorizontal: 5,
    fontSize: 15,
    marginVertical: 10
  },
  textStyleRewards: {
    marginHorizontal: 5,
    fontSize: 16
  },
  textStyleValue: {
    marginHorizontal: 5,
    marginVertical: 1,
    fontSize: 12,
    color: "#9c9a9a"
  }
});
