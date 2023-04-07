import { Stack } from 'expo-router';
import { API, Amplify, DataStore, Hub } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { useEffect } from 'react';
import { User } from '../src/models';

Amplify.configure(awsconfig);

const CreateUserMutation = `
mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    handle
    bio
    subscriptionPrice
  }
}
`;

export default function RootLayout() {
  useEffect(() => {
    const removeListener = Hub.listen('auth', async (data) => {
      if (data.payload.event === 'signIn') {
        const userInfo = data.payload.data.attributes;
        console.log(JSON.stringify(userInfo, null, 2));

        // DataStore.save(new User({ id: userInfo.sub, name: userInfo.name }));

        // save user to database
        const newUser = {
          id: userInfo.sub,
          name: userInfo.name,
          handle: userInfo.nickname,
          subscriptionPrice: 0,
        };
        await API.graphql({
          query: CreateUserMutation,
          variables: { input: newUser },
        });
      }
    });

    return () => {
      // cleanup function
      removeListener();
    };
  }, []);

  return (
    <Authenticator.Provider>
      <Authenticator>
        <Stack screenOptions={{ headerShown: false }} />
      </Authenticator>
    </Authenticator.Provider>
  );
}
