import { Link } from 'expo-router';
import { StyleSheet, View, FlatList } from 'react-native';
import users from '../assets/data/users';
import UserCard from '../src/components/UserCard';

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href={'/newPost'}>New post</Link>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
  },
});
