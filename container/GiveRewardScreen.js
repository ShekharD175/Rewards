import { View, StyleSheet, Modal, Text, TextInput, Pressable, Alert} from "react-native"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setReward, updateShowAddRewards } from "../redux/slice/rewardsSlice"

function GiveRewardScreen() {

    const [rewardTo, setRewardTo] = useState("")
    const [rewardAmount, setRewardAmount] = useState("")
    const [rewardMessage, setRewardMessage] = useState("")
    var dispatch = useDispatch();

    const onGivePress = () => {
        if(validateInputs()) {
            const reward = {
                rewardTo: {
                  name: rewardTo,
                  imageUrl: "https://randomuser.me/api/portraits/men/31.jpg",
                  rewardAmount: rewardAmount,
                },
                rewardBy: "Jane Doe",
                timeStamp: "Feb 1, 2021",
                discription: rewardMessage
            }
            dispatch(setReward(reward));
            dispatch(updateShowAddRewards(false));
        } 
    }

    const validateInputs = () => {
        if(rewardTo.trim().length == 0) {
            Alert.alert("Please check the \"Reward To\" value") 
            return false;
        }
        else if(rewardAmount.trim().length == 0) {
            Alert.alert("Please check the \"Reward Amount\" value");
            return false;
        }
        else if(rewardMessage.trim().length == 0) {
            Alert.alert("Please check the \"Reward Message\" value");
            return false;
        }
        else {
            return true;
        }
    }

    return(
        <Modal>
            <View style={{flex: 1, backgroundColor: "#0000006D"}}>
                <View style={styles.containerStyle}>
                    <Text style={styles.titleTextStyle}>Give reward</Text>
                    <View style={styles.inputContainerStyle}>
                        <Text style={styles.inputTextStyle}>To</Text>
                        <TextInput onChangeText={(value)=> setRewardTo(value)} style={styles.inputStyle}/>
                    </View>
                    <View style={styles.inputContainerStyle}>
                        <Text style={styles.inputTextStyle}>Amout</Text>
                        <TextInput onChangeText={(value)=> setRewardAmount(value)} style={styles.inputStyle}/>
                    </View>
                    <View style={styles.inputContainerStyle}>
                        <Text style={styles.inputTextStyle}>Message</Text>
                        <TextInput onChangeText={(value)=> setRewardMessage(value)} style={[styles.inputStyle,{height: 100}]}/>
                    </View>
                    <Pressable style={styles.buttonStyle} onPress={onGivePress}>
                        <Text style={styles.giveTextStyle}>Give</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.cancelButtonStyle} onPress={() => dispatch(updateShowAddRewards(false))}>
                    <Text style={styles.cancelTextStyle}>X</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

export default GiveRewardScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'black',
        marginTop:"40%",
        borderRadius: 30,
        alignItems: 'center',
    },
    titleTextStyle: {
        color: "white",
        fontSize: 25,
        marginVertical: 15,
        fontWeight: '500'
    },
    inputStyle: {
        height: 55,
        width: "100%",
        borderWidth: 1,
        borderColor: "#e0aa58",
        padding: 10,
        color: 'white'
    },
    inputContainerStyle: {
        width: "90%", 
        alignItems: 'center',
        marginVertical: 10
    },
    inputTextStyle: { 
        margin: 5, 
        alignSelf: 'flex-start',
        color: "#e0aa58"
    },
    giveTextStyle: {
        fontSize: 20,
        fontWeight: '600'
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginVertical: 20,
        height: 50,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButtonStyle: {
        position: 'absolute',
        bottom: 40,
        width: 40, 
        height: 40, 
        right: 30
    },
    cancelTextStyle: {
        color:'white', 
        fontSize: 25
    }
})