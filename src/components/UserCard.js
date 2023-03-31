import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import { Link } from 'expo-router';

export default function UserCard({ user }) {
  return (
    <Link href={`/user/${user.id}`} asChild>
      <Pressable>
        <ImageBackground
          source={{ uri: user.coverImage }}
          style={styles.userCard}
        >
          <View style={styles.overlay} />
          {/* Image */}
          <Image src={user.avatar} style={styles.userImage} />

          {/* Name & handle */}
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: '500',
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <Text style={{ color: 'white' }}>@{user.handle}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: 'gray',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',

    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    ...StyleSheet.absoluteFillObject,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
    marginRight: 20,
  },
});
