import { createSlice } from '@reduxjs/toolkit';

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState: {
    rewards:  [{
      rewardTo: {
        name: "Alex Brown",
        imageUrl: "https://randomuser.me/api/portraits/men/31.jpg"
      },
      rewardBy: "Jane Doe",
      timeStamp: "Feb 1, 2021",
      discription: "Thanks for your help in creating the product overview deck. Your help to show cases in those scenarios really helped in closing the loop on the story."
    }],
    userDetails: {
        imageUrl: "https://randomuser.me/api/portraits/women/31.jpg",
        userName: "Jane Doe",
        rewards: {
            given: 100,
            received: 250
        }
    },
    showAddRewards: true
  },
  reducers: {
    setReward(state, action) {
      console.log("UPDATING ARR: ");
      state.rewards = state.rewards.push(action.payload);
    },
    updateUserDetails(state, action) {

    },
    updateShowAddRewards(state, action) {
      state.showAddRewards = action.payload;
    }
  }
});

export const { setReward, updateUserDetails, updateShowAddRewards } = rewardsSlice.actions;
export default rewardsSlice.reducer;