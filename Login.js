import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient'; // Add gradient

export default function Login({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Gradient Background */}
      <LinearGradient
        colors={['#FF7A18', '#AF002D']}
        style={styles.gradient}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>

            <View style={styles.form}>
              <Text style={styles.inputLabel}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#aaa"
                value={form.email}
                onChangeText={(email) => setForm({ ...form, email })}
              />

              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#aaa"
                secureTextEntry={true}
                value={form.password}
                onChangeText={(password) => setForm({ ...form, password })}
              />
              
              <Text style={styles.forgotText}>Forgot your password?</Text>

              <TouchableOpacity
                onPress={() => {
                  // Handle sign in
                }}>
                <LinearGradient
                  colors={['#AF002D', '#FF7A18']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Sign in</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity
              onPress={() => navigation.navigate('register')}
              style={styles.footer}>
              <Text style={styles.footerText}>
                Don’t have an account? <Text style={styles.signupText}>Create</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  inputLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  forgotText: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
