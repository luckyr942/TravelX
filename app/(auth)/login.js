import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity, KeyboardAvoidingView,Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        if(email && password) {
            router.push("/(tabs)/home");
        }else{
            alert("Please fill all the details");
        }
    };

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
               <View style={styles.content}>
                 {/* Back Button */}
                 <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                 <Ionicons name="chevron-back" size={28} color="#1A1A1A" />
                 </TouchableOpacity>

                 <Text style = {styles.title}>Welcome Back!</Text>
                 <Text style = {styles.subtitle}>Go where you feel most alive.</Text>

                 <View style= {styles.form}>
                    {/* Email inpput */}
                    <View style = {styles.inputGroup}>
                        <Ionicons name = "mail-outline" size = {20} color='#7D7D7D'/>
                        <TextInput
                            placeholder="Email Address"
                            style = {styles.input}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputGroup}>
                        <Ionicons name = "lock-closed-outline" size={20} color="7D7D7D"/>
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity
                        style={[styles.loginButton, (!email || !password) && {opacity:0.6},]}
                        onPress={handleLogin}
                        disabled={!email ||!password}
                    >
                        <Text style={styles.loginText}>Login</Text>

                     </TouchableOpacity>
                 </View>
          </View>
        </KeyboardAvoidingView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF' },
    content: { flex: 1, paddingHorizontal: 25 },
    backButton: { marginTop: 20, marginBottom: 30 },
    title: { fontSize: 32, fontWeight: '800', color: '#1A1A1A' },
    subtitle: { fontSize: 16, color: '#7D7D7D', marginTop: 10, lineHeight: 24 },
    form: { marginTop: 50 },
    inputGroup: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#F5F7FA', 
        borderRadius: 15, 
        paddingHorizontal: 15, 
        height: 60, 
        marginBottom: 20 
    },
    input: { flex: 1, marginLeft: 10, fontSize: 16, color: '#1A1A1A' },
    loginButton: { 
        backgroundColor: '#2F80ED', 
        height: 60, 
        borderRadius: 15, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,
        elevation: 4,
        shadowColor: '#2F80ED',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 }
    },
    loginText: { color: '#FFF', fontSize: 18, fontWeight: '700' }
});