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
import LinearGradient from 'react-native-linear-gradient';

export default function Register({ navigation }) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#FF7A18', '#AF002D']}
        style={styles.gradient}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Create account</Text>

            <View style={styles.form}>
              <Text style={styles.inputLabel}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#aaa"
                value={form.username}
                onChangeText={(username) => setForm({ ...form, username })}
              />

              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
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

              <TouchableOpacity
                onPress={() => {
                  // Handle sign up
                }}>
                <LinearGradient
                  colors={['#AF002D', '#FF7A18']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Create</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.signupText}>Sign in</Text>
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
