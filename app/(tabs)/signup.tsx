import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signedUp, setSignedUp] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    if (!signedUp) {
      setFormData({ ...formData, [name]: value });
    } else {
      setLoginData({ ...loginData, [name]: value });
    }
  };

  const handleSignup = () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
    } else {
      Alert.alert("Success", "Account created! Proceed to login.");
      setSignedUp(true);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleLogin = () => {
    if (loginData.email && loginData.password) {
      Alert.alert("Login", `Logging in with email: ${loginData.email}`);
    } else {
      Alert.alert("Error", "Please fill in both fields");
    }
  };

  if (signedUp) {
    // Login Form
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login to Your Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={loginData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={loginData.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Signup Form
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={formData.username}
        onChangeText={(text) => handleChange("username", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChangeText={(text) => handleChange("confirmPassword", text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#fff9e6",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
    color: "#4b3f35",
  },
  input: {
    width: "100%",
    padding: 14,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#aa995d",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#f8b500",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#4b3f35",
    fontWeight: "700",
  },
});
