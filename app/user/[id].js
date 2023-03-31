import { useSearchParams } from 'expo-router';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import users from '../../assets/data/users';
import { useState } from 'react';
import UserProfileHeader from '../../src/components/UserProfileHeader';
import posts from '../../assets/data/posts';
import Post from '../../src/components/Post';
import { FontAwesome5 } from '@expo/vector-icons';

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useSearchParams();

  const user = users.find((u) => u.id === id);

  if (!user) {
    return <Text>User not found!</Text>;
  }

  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />

        <View
          style={{
            backgroundColor: 'gainsboro',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <FontAwesome5 name="lock" size={50} color="gray" />
          <Text
            style={{
              backgroundColor: 'royalblue',
              height: 50,
              borderRadius: 25,
              overflow: 'hidden',
              padding: 15,
              color: 'white',
              margin: 20,
            }}
          >
            Subscribe to see user's posts
          </Text>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      ListHeaderComponent={() => (
        <UserProfileHeader
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});
export default ProfilePage;
