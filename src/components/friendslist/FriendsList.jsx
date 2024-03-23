
import css from './FriendsList.module.css';
import FriendsListItem from "../friendslist-item/FriendsListItem";


const FriendsList = ({ friends }) => {
    return (
      <ul className={css.list}>
        {friends.map((friend) => {
          return (
            <FriendsListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}
            />
          );
        })}
      </ul>
    );
  };
  
  export default FriendsList;