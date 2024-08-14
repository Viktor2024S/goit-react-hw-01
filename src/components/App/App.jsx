import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
import TransactionHistory from "../FriendListItem/FriendListItem";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory {...transactions} />
    </>
  );
}
