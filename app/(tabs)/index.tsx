// app/index.tsx or app/home.tsx
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const foodItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1601924582975-7e1b7e26e81e',
    description: 'Classic cheese and tomato pizza.',
  },
  {
    id: '2',
    name: 'Cheeseburger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    description: 'Juicy beef burger with cheddar and pickles.',
  },
  {
    id: '3',
    name: 'Sushi Platter',
    image: 'https://images.unsplash.com/photo-1562158070-7f9f0d4c0d5b',
    description: 'Assorted sushi rolls with fresh ingredients.',
  },
  {
    id: '4',
    name: 'Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1625948641150-dc1b9b935d92',
    description: 'Creamy pasta with bacon and parmesan.',
  },
  {
    id: '5',
    name: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    description: 'Toasted bread topped with ripe avocado and spices.',
  },
  {
    id: '6',
    name: 'Vegan Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
    description: 'Healthy bowl with grains, veggies, and plant protein.',
  },
  {
    id: '7',
    name: 'Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1542827634-04297c481c8b',
    description: 'Rich and moist chocolate layered cake.',
  },
  {
    id: '8',
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    description: 'Crisp romaine lettuce with creamy Caesar dressing.',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F9EBEA', dark: '#212022' }}
      headerImage={
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1555992336-03a23c16e5a9' }}
          style={styles.headerImage}
          contentFit="cover"
        />
      }
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>🍽️ BudgetBite</Text>
        <Text style={styles.subtitle}>Delicious meals, affordable prices</Text>
      </View>

      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/order?foodId=${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 220,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  scrollContent: {
    backgroundColor: '#FAF4ED',
    flexGrow: 1,
  },
  titleContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    fontWeight: '900',
    color: '#FF7755',
  },
  subtitle: {
    fontSize: 16,
    color: '#7B6D8D',
    marginTop: 6,
    fontStyle: 'italic',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F1DFDC',
    shadowColor: '#D6CFCB',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#FDEDE9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContent: {
    padding: 16,
    backgroundColor: '#FFF5F3',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
    color: '#403B36',
  },
  description: {
    fontSize: 14,
    color: '#7A7470',
  },
});
