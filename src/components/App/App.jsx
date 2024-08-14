import Profile from "../Profile/Profile";
import userData from "../../userData.json";

import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";

import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <Profile {...userData} />
      {/* <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      /> */}
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
      {/* <TransactionHistory
        id={transactions.id}
        type={transactions.type}
        amount={transactions.amount}
        currency={transactions.currency}
      /> */}
    </>
  );
}
