import { StyleSheet, Text, View, Image } from "react-native";

function ProfileItem(props) {
    
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    
    const getRewardsItem = () => {
        return(
            <Text style={styles.textStyleRewards}>Given <B>${props.rewards.given.toString()}</B> / Recieved <B>${props.rewards.received.toString()}</B></Text>
        )
    }
    return (
        <View style={styles.containerView}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{ uri: props.imageUrl }} />
            </View>
            <View style={styles.innerContainer}>
                <Text style={[styles.textStyleName, { fontWeight: "bold" }]}>
                {props.userName}
                </Text>
                {getRewardsItem()}
            </View>
        </View>
  );
}

export default ProfileItem;

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    height: 150,
    // paddingHorizontal: 20
  },
  innerContainer: {
    flex: 3,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#C0C0C0"
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20
  },
  imageStyle: {
    borderRadius: 40,
    height: 80,
    aspectRatio: "1"
  },
  textStyleName: {
    marginHorizontal: 10,
    fontSize: 18
  },
  textStyleRewards: {
    marginHorizontal: 10,
    fontSize: 16
  }
});
