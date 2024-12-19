// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground,
//   Image,
//   Alert,
// } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// export default function Index() {
//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     password: '',
//     mobile: '',
//   });
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSignIn = () => {
//     if (!form.username || !form.password) {
//       alert('Please fill out both fields');
//       return;
//     }
//     console.log('Username:', form.username);
//     console.log('Password:', form.password);
//     // Show alert for successful login
//     Alert.alert('Login Successful', 'You have logged in');
//   };

//   const handleRegister = () => {
//     if (!form.username || !form.password || !form.email || !form.mobile) {
//       alert('Please fill out all fields');
//       return;
//     }
//     console.log('Username:', form.username);
//     console.log('Password:', form.password);
//     console.log('Email:', form.email);
//     console.log('Mobile:', form.mobile);
//     // Show alert for successful registration
//     Alert.alert('Registration Successful', 'Your account has been created');
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
//       {/* Background Gradient */}
//       <ImageBackground
//         source={{ uri: 'https://assets.withfra.me/gradient_background.png' }}
//         style={{ flex: 1 }}
//         resizeMode="cover"
//       >
//         <KeyboardAwareScrollView contentContainerStyle={styles.container}>
//           <View style={styles.formContainer}>
//             <Text style={styles.title}>{isLogin ? 'Login' : 'Create Account'}</Text>

//             {/* Username Field */}
//             <TextInput
//               placeholder="Username"
//               placeholderTextColor="#9CA3AF"
//               style={styles.input}
//               value={form.username}
//               onChangeText={(username) => setForm({ ...form, username })}
//             />

//             {/* Password Field */}
//             <TextInput
//               placeholder="Password"
//               placeholderTextColor="#9CA3AF"
//               secureTextEntry
//               style={styles.input}
//               value={form.password}
//               onChangeText={(password) => setForm({ ...form, password })}
//             />

//             {/* Additional fields for registration */}
//             {!isLogin && (
//               <>
//                 {/* Email Field */}
//                 <TextInput
//                   placeholder="E-mail"
//                   placeholderTextColor="#9CA3AF"
//                   style={styles.input}
//                   keyboardType="email-address"
//                   value={form.email}
//                   onChangeText={(email) => setForm({ ...form, email })}
//                 />

//                 {/* Mobile Field */}
//                 <TextInput
//                   placeholder="Mobile"
//                   placeholderTextColor="#9CA3AF"
//                   style={styles.input}
//                   keyboardType="phone-pad"
//                   value={form.mobile}
//                   onChangeText={(mobile) => setForm({ ...form, mobile })}
//                 />
//               </>
//             )}

//             {/* Submit Button */}
//             <TouchableOpacity
//               onPress={isLogin ? handleSignIn : handleRegister}
//               style={styles.button}
//             >
//               <Text style={styles.buttonText}>{isLogin ? 'Sign in' : 'Create'}</Text>
//             </TouchableOpacity>

//             {/* Forgot Password Link */}
//             {isLogin && (
//               <TouchableOpacity onPress={() => alert('Forgot password pressed')}>
//                 <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
//               </TouchableOpacity>
//             )}

//             {/* Social Media Login Options */}
//             <View style={styles.socialContainer}>
//               <Text style={styles.socialText}>Or create account using social media</Text>
//               <View style={styles.socialIcons}>
//                 <TouchableOpacity style={styles.socialButton}>
//                   <Image
//                     source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
//                     style={styles.icon}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.socialButton}>
//                   <Image
//                     source={{ uri: 'https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=l1HvTt1fIsaMmQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftwitter-logo-png-logo-twitter-in-png-2500.png&ehk=qSLAOlUdmImpXk6Jj6NUgKgK5gv%2fq1TGUwvlzdeBiNA%3d&risl=&pid=ImgRaw&r=0' }}
//                     style={styles.icon}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.socialButton}>
//                   <Image
//                     source={{ uri: 'https://th.bing.com/th/id/R.7e557f1c0864829c54c300d15bee69f4?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0' }}
//                     style={styles.icon}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           {/* Toggle between Sign In and Sign Up */}
//           <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
//             <Text style={styles.switchText}>
//               {isLogin
//                 ? "Don't have an account? Create"
//                 : 'Already have an account? Sign in'}
//             </Text>
//           </TouchableOpacity>
//         </KeyboardAwareScrollView>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 24,
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     borderRadius: 24,
//     paddingVertical: 40,
//     paddingHorizontal: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#111827',
//     textAlign: 'center',
//     marginBottom: 24,
//   },
//   input: {
//     height: 50,
//     borderColor: '#E5E7EB',
//     borderWidth: 1,
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     marginBottom: 16,
//     backgroundColor: '#F9FAFB',
//     color: '#111827',
//   },
//   button: {
//     backgroundColor: '#7C3AED',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     color: '#7C3AED',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   socialContainer: {
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   socialText: {
//     fontSize: 16,
//     color: '#6B7280',
//     marginBottom: 16,
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '60%',
//   },
//   socialButton: {
//     backgroundColor: '#F3F4F6',
//     padding: 12,
//     borderRadius: 30,
//     marginHorizontal: 8,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   switchText: {
//     textAlign: 'center',
//     color: '#7C3AED',
//     marginTop: 16,
//     fontSize: 16,
//   },
// });


import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouter } from 'expo-router'; // Gunakan router dari expo-router

export default function Index() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter(); // Untuk navigasi

  const handleSignIn = () => {
    if (!form.username || !form.password) {
      alert('Please fill out both fields');
      return;
    }
    Alert.alert('Login Successful', 'You have logged in');
    router.push('/home'); // Pindah ke halaman home
  };

  const handleRegister = () => {
    if (!form.username || !form.password || !form.email || !form.mobile) {
      alert('Please fill out all fields');
      return;
    }
    Alert.alert('Registration Successful', 'Your account has been created');
    setIsLogin(true); // Kembali ke form login setelah registrasi sukses
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ImageBackground
        source={{ uri: 'https://assets.withfra.me/gradient_background.png' }}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>{isLogin ? 'Login' : 'Create Account'}</Text>

            <TextInput
              placeholder="Username"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={form.username}
              onChangeText={(username) => setForm({ ...form, username })}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.input}
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
            />

            {!isLogin && (
              <>
                <TextInput
                  placeholder="E-mail"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  keyboardType="email-address"
                  value={form.email}
                  onChangeText={(email) => setForm({ ...form, email })}
                />

                <TextInput
                  placeholder="Mobile"
                  placeholderTextColor="#9CA3AF"
                  style={styles.input}
                  keyboardType="phone-pad"
                  value={form.mobile}
                  onChangeText={(mobile) => setForm({ ...form, mobile })}
                />
              </>
            )}

            <TouchableOpacity
              onPress={isLogin ? handleSignIn : handleRegister}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{isLogin ? 'Sign in' : 'Create'}</Text>
            </TouchableOpacity>

            {isLogin && (
              <TouchableOpacity onPress={() => alert('Forgot password pressed')}>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
              </TouchableOpacity>
            )}

            <View style={styles.socialContainer}>
              <Text style={styles.socialText}>Or create account using social media</Text>
              <View style={styles.socialIcons}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
                    }}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={{
                      uri: 'https://pluspng.com/img-png/twitter-logo-png-logo-twitter-in-png-2500.png',
                    }}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={{
                      uri: 'https://pngimg.com/uploads/google/google_PNG19635.png',
                    }}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>
              {isLogin ? "Don't have an account? Create" : 'Already have an account? Sign in'}
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
    color: '#111827',
  },
  button: {
    backgroundColor: '#7C3AED',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#7C3AED',
    fontSize: 16,
    textAlign: 'center',
  },
  socialContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  socialText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialButton: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 30,
    marginHorizontal: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  switchText: {
    textAlign: 'center',
    color: '#7C3AED',
    marginTop: 16,
    fontSize: 16,
  },
});

