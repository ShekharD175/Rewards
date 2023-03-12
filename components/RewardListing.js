import { View, StyleSheet, Text, Pressable, FlatList } from "react-native"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import RewardItem from "./RewardItem";
import { updateShowAddRewards } from "../redux/slice/rewardsSlice";

function RewardListing() {

    const [rewardsSelected, setRewardsSelected] = useState(false);
    const rewards = useSelector(state => state.rewards.rewards);
    const dispatch = useDispatch();

    return(
        <View style={styles.containerStyle}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={[styles.pressableStyle,{backgroundColor: rewardsSelected ? "#e4e2df" : "white"}]}
                    onPress={() => setRewardsSelected(true)}>
                    <Text style={styles.buttonTitleStyle}>Feed</Text>
                </Pressable>
                <Pressable 
                    style={[styles.pressableStyle,{backgroundColor: !rewardsSelected ? "#e4e2df" : "white"}]}
                    onPress={() => setRewardsSelected(false)}>
                    <Text style={styles.buttonTitleStyle}>My Rewards</Text>
                </Pressable>
            </View>
            <FlatList
                data={rewards}
                extraData={rewards}
                renderItem={(item) => {
                    return (
                        <RewardItem reward={item.item}/>
                    )
                }}/>
            <View style={styles.bottomContainerStyle}>
                <Pressable style={styles.addButtonStyle} onPress={() => dispatch(updateShowAddRewards(true))}>
                    <Text style={styles.plusTextStyle}>+</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RewardListing;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        height: 50,
    },
    pressableStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    buttonTitleStyle: {
        fontSize: 16,
        fontWeight: '600'
    },
    bottomContainerStyle: {
        height: 90,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    addButtonStyle: {
        backgroundColor: 'black',
        width: 50,
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusTextStyle: {
        fontSize: 35,
        color: "white"
    }
})