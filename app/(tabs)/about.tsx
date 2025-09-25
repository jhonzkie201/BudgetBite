import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>About BudgetBite</Text>
        <Text style={styles.paragraph}>
          Welcome to BudgetBite, your friendly neighborhood food store where quality meets affordability. 
          At BudgetBite, we believe everyone deserves access to delicious, wholesome meals without breaking the bank. 
          Our mission is to bring you a curated selection of fresh, flavorful foods that satisfy your cravings and nourish your body.
        </Text>
        <Text style={styles.paragraph}>
          From mouthwatering pizzas and juicy burgers to authentic sushi and creamy pastas, BudgetBite offers a diverse range of dishes crafted with care. 
          We prioritize sourcing ingredients responsibly, partnering with local farmers and suppliers who share our commitment to quality and sustainability.
        </Text>
        <Text style={styles.paragraph}>
          Whether you're grabbing a quick lunch, planning a family dinner, or just indulging in your favorite comfort food, BudgetBite is here to serve you with a smile. 
          We continuously innovate our menu to reflect seasonal favorites and customer feedback, ensuring fresh tastes and exciting options every time you visit.
        </Text>
        <Text style={styles.paragraph}>
          Thank you for choosing BudgetBite — where every bite is a budget-friendly delight!
        </Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0F7FA', // soft teal background
  },
  container: {
    padding: 30,
    backgroundColor: '#ffffff', // pure white card
    margin: 20,
    borderRadius: 20,
    shadowColor: '#00796B', // deep teal shadow
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#004D40', // dark teal
    marginBottom: 25,
    textAlign: 'center',
    letterSpacing: 1,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 30,
    color: '#00695C', // medium teal
    marginBottom: 20,
    textAlign: 'justify',
    fontWeight: '500',
  },
  version: {
    fontSize: 16,
    color: '#004D40',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
  },
})
