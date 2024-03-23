import userData from "../userData.json"
import Profile from "../profile/Profile";
import friends from "../friends.json"
import FriendsList from "../friendslist/FriendsList";
import TransactionHistory from "../transactionHistory/TransactionHistory";
import transactions from "../transactionHistory.json";
import "./App.module.css"


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
