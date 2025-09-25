import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';

const foodData: Record<string, { name: string; image: string; price: number }> = {
  '1': {
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1601924582975-7e1b7e26e81e',
    price: 12.99,
  },
  '2': {
    name: 'Cheeseburger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    price: 10.49,
  },
  '3': {
    name: 'Sushi Platter',
    image: 'https://images.unsplash.com/photo-1562158070-7f9f0d4c0d5b',
    price: 18.99,
  },
  '4': {
    name: 'Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1625948641150-dc1b9b935d92',
    price: 14.99,
  },
  '5': {
    name: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    price: 8.99,
  },
  '6': {
    name: 'Vegan Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
    price: 13.99,
  },
  '7': {
    name: 'Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1542827634-04297c481c8b',
    price: 6.49,
  },
  '8': {
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    price: 9.49,
  },
};

export default function OrderScreen() {
  const { foodId } = useLocalSearchParams();
  const router = useRouter();
  const food = foodData[String(foodId)];

  const handleOrder = () => {
    if (food) {
      Alert.alert('✅ Order Confirmed', `You ordered: ${food.name} — ₱${food.price.toFixed(2)}`);
    }
  };

  if (food) {
    // Show order form for selected food
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🍽️ Order Your Meal</Text>
        <Image source={{ uri: food.image }} style={styles.image} />
        <Text style={styles.foodName}>{food.name}</Text>
        <Text style={styles.foodPrice}>₱{food.price.toFixed(2)}</Text>

        <TextInput placeholder="Your Name" style={styles.input} />
        <TextInput placeholder="Delivery Address" style={styles.input} multiline />
        <TextInput placeholder="Payment Method (e.g., GCash)" style={styles.input} />

        <Button title="Confirm Order" onPress={handleOrder} />
      </ScrollView>
    );
  }

  // If no valid foodId → show food list instead
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍔 Food Menu</Text>

      {Object.entries(foodData).map(([id, item]) => (
        <TouchableOpacity
          key={id}
          style={styles.card}
          onPress={() => router.push(`/order?foodId=${id}`)}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodPrice}>₱{item.price.toFixed(2)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#FF6B6B',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 12,
  },
  foodName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
  },
  foodPrice: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 4,
  },
  input: {
    backgroundColor: '#F4F4F4',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardContent: {
    paddingHorizontal: 4,
  },
});
