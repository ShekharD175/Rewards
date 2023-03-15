import { View, StyleSheet, Text, Pressable, FlatList, NativeModules } from "react-native"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import RewardItem from "./RewardItem";
import { updateShowAddRewards } from "../redux/slice/rewardsSlice";

function RewardListing() {

    const [rewardsSelected, setRewardsSelected] = useState(true);
    const rewards = useSelector(state => state.rewards.rewards);
    const dispatch = useDispatch();

    const { ReactOneCustomMethod } = NativeModules;

    const getRewardsData = () => {

        ReactOneCustomMethod.getPhoneID().then((res) => {
            console.log(res);
            console.log("RESULT...!!!");
        }).catch((err) => {
            console.error(err);
        });

        if(!rewardsSelected) {
            return (
                rewards.filter((item) => {
                    return (item.rewardTo.name == "Jane Doe")
                })
            )
        }
        else {
            return rewards
        }
    }

    return(
        <View style={styles.containerStyle}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={[styles.pressableStyle,{backgroundColor: rewardsSelected ? "white" : "#e4e2df"}]}
                    onPress={() => setRewardsSelected(true)}>
                    <Text style={styles.buttonTitleStyle}>Feed</Text>
                </Pressable>
                <Pressable 
                    style={[styles.pressableStyle,{backgroundColor: !rewardsSelected ? "white" : "#e4e2df"}]}
                    onPress={() => setRewardsSelected(false)}>
                    <Text style={styles.buttonTitleStyle}>My Rewards</Text>
                </Pressable>
            </View>
            <FlatList
                data={getRewardsData()}
                extraData={getRewardsData()}
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