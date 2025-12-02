import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  const { itemId, userName } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>This is the details page.</Text>

      {itemId && <Text>Item ID: {itemId}</Text>}
      {userName && <Text>User Name: {userName}</Text>}

      <View style={{ height: 10 }} />

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <View style={{ height: 10 }} />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});
