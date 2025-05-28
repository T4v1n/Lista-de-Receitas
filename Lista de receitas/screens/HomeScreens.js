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
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <RecipeCard
            title={item.title}
            description={item.description}
            onPress={() => navigation.navigate('Detalhes da Receita', { recipe: item })}
          />
        )}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF0E6',
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    alignItems: 'center',  
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;