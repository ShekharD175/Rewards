import { View, StyleSheet} from "react-native"
import { useSelector } from "react-redux";
import ProfileItem from "../components/ProfileItem";
import RewardListing from "../components/RewardListing";
import GiveRewardScreen from "./GiveRewardScreen";

function RewardsScreen() {

    const userDetails = useSelector(state => state.rewards.userDetails)
    const showAddRewards = useSelector(state => state.rewards.showAddRewards)

    return(
        <View style={styles.containerStyle}>
            <ProfileItem
                userName={userDetails.userName}
                rewards={userDetails.rewards}
                imageUrl={userDetails.imageUrl}>
            </ProfileItem>
            <RewardListing/>
            {showAddRewards && <GiveRewardScreen />}
        </View>
    )
}

export default RewardsScreen;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
})