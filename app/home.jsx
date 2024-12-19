// import React from 'react';
// import { View, Text } from 'react-native';

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>Welcome to Home!</Text>
//     </View>
//   );
// }

// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

// export default function Home({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Welcome to Sign Language App</Text>
//       </View>

//       {/* Main Content */}
//       <View style={styles.mainContent}>
//         {/* Welcome Text */}
//         <Text style={styles.welcomeText}>Learn Sign Language Easily!</Text>
        
//         {/* Image */}
//         <Image
//           style={styles.image}
//           source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Flogo-home-png&psig=AOvVaw0EJ2ya7gPk_QnQ7Dw8jF92&ust=1729229573260000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNik6aXYlIkDFQAAAAAdAAAAABAJ' }} 
//         />

//         {/* Get Started Button */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => alert('Start Learning!')}
//         >
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     backgroundColor: '#7C3AED',
//     paddingVertical: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerTitle: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   mainContent: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   welcomeText: {
//     fontSize: 20,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 30,
//     resizeMode: 'contain',
//   },
//   button: {
//     backgroundColor: '#7C3AED',
//     paddingVertical: 15,
//     paddingHorizontal: 60,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <View style={styles.greetings}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/50' }} 
            style={styles.profilePic} 
          />
          <Text style={styles.greetingText}>Hello, Christian Edbert</Text>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="qr-code-outline" size={24} color="black" style={{ marginLeft: 15 }} />
        </View>
      </View>

      {/* Account balance card */}
      <View style={styles.accountCard}>
        <Text style={styles.accountNumber}>2144 5555 36</Text>
        <Text style={styles.accountLabel}>Savings Account</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceAmount}>Rp. 869,699.06</Text>
          <Ionicons name="eye-outline" size={20} color="gray" />
        </View>
      </View>

      {/* Top services */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Top services</Text>
        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceItem}>
              <FontAwesome name={service.icon} size={30} color="#7D3C98" />
              <Text style={styles.serviceLabel}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Quick transfer */}
      <View style={styles.quickTransferSection}>
        <Text style={styles.sectionTitle}>Quick transfer - Beneficiary</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.beneficiaries}>
          {beneficiaries.map((beneficiary, index) => (
            <View key={index} style={styles.beneficiaryItem}>
              <Image 
                source={{ uri: 'https://via.placeholder.com/50' }} 
                style={styles.beneficiaryPic} 
              />
              <Text style={styles.beneficiaryName}>{beneficiary.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Recent transactions */}
      <View style={styles.transactionsSection}>
        <View style={styles.transactionsHeader}>
          <Text style={styles.sectionTitle}>Recent transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        {/* Placeholder for transaction items */}
        {transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <View style={styles.transactionDetails}>
              <MaterialIcons name="account-balance-wallet" size={24} color="#7D3C98" />
              <Text style={styles.transactionText}>{transaction.details}</Text>
            </View>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const services = [
  { label: 'Send money', icon: 'send' },
  { label: 'Buy airtime', icon: 'mobile-phone' },
  { label: 'Buy data', icon: 'wifi' },
  { label: 'Electricity bill', icon: 'lightbulb-o' },
  { label: 'Pay bills', icon: 'credit-card' },
  { label: 'Foreign curr.', icon: 'money' },
  { label: 'Lifestyle', icon: 'heart' },
  { label: 'More', icon: 'ellipsis-h' }
];

const beneficiaries = [
  { name: 'Pak Anang' },
  { name: 'Franco' },
  { name: 'Aji' },
  { name: 'Matct' },
];

const transactions = [
  { details: 'Payment for groceries', amount: '- Rp 12,000' },
  { details: 'Received from Franco', amount: '+ Rp 50,000' },
  { details: 'Electricity bill', amount: '- Rp 5,500' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  greetings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountCard: {
    backgroundColor: '#7D3C98',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  accountNumber: {
    fontSize: 18,
    color: '#FFF',
  },
  accountLabel: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  servicesSection: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  quickTransferSection: {
    marginVertical: 15,
  },
  beneficiaries: {
    flexDirection: 'row',
  },
  beneficiaryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  beneficiaryPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  beneficiaryName: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  transactionsSection: {
    marginVertical: 15,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  seeAllText: {
    color: '#7D3C98',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#7D3C98',
  },
  transactionDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionText: {
    marginLeft: 10,
    fontSize: 14,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
