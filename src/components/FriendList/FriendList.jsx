import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.friendItem}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
