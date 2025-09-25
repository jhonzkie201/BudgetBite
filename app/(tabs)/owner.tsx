import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function OwnerApp() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    if (formData.email && formData.password) {
      setIsLoggedIn(true); // ✅ Proceed to portal
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({ email: '', password: '' });
  };

  // ✅ If logged in, show Owner Portal
  if (isLoggedIn) {
    return (
      <View style={styles.portalContainer}>
        <Text style={styles.portalTitle}>👑 Welcome, Owner!</Text>
        <Text style={styles.portalSubtitle}>This is your admin dashboard.</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ✅ Otherwise, show login form
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owner Portal</Text>
      <Text style={styles.subtitle}>Sign in with your credentials</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="owner@business.com"
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

// ✅ Styles for both login + portal
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#121212' },
  title: { fontSize: 32, fontWeight: '900', color: '#fff', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#bbb', marginBottom: 30, textAlign: 'center' },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 14, color: '#ccc', marginBottom: 6, fontWeight: '600' },
  input: { width: '100%', padding: 14, fontSize: 16, borderRadius: 10, borderWidth: 1.5, borderColor: '#2e7d32', backgroundColor: '#1e1e1e', color: '#fff' },
  button: { width: '100%', padding: 15, borderRadius: 10, backgroundColor: '#2e7d32', alignItems: 'center', marginTop: 10 },
  buttonText: { fontSize: 18, color: '#fff', fontWeight: '800', letterSpacing: 1 },

  // Portal styles
  portalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', padding: 20 },
  portalTitle: { fontSize: 28, fontWeight: '900', color: '#fff', marginBottom: 10 },
  portalSubtitle: { fontSize: 16, color: '#bbb', marginBottom: 30 },
  logoutButton: { backgroundColor: '#c62828', padding: 12, borderRadius: 8 },
  logoutButtonText: { fontSize: 16, color: '#fff', fontWeight: '700' },
});
