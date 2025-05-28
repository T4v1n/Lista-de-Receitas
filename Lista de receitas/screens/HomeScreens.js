import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import recipes from '../data/Recipes';
import RecipeCard from '../components/RecipeCard';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('Detalhes da Receita', { recipe: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FAF0E6',
    flex: 1,
  },
});

export default HomeScreen;