import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import RegisterScreen from "./Register"
import Kabinet from "./Kabinet"
import { loginUser } from './firebase';


export default function App(){

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showRegister, setShowRegister] = useState(false)
  const [showKabinet, setShowKabinet] = useState(false)

  const handleLogin = async () => {  
    setLoading(true) 
    const result = await loginUser(email, password)
    if (email === '' || password === '') {
      alert('Заполните все поля');
    } else {
      setShowKabinet(true);
    }
  };

  if (showKabinet) {
    return <Kabinet userLogin={email}  goBackToLogin = {() => setShowKabinet(false)}/>;
  }

  if (showRegister) {
    return <RegisterScreen goBack={() => setShowRegister(false)} />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#0F172A' }}>
      <Text style={{ fontSize: 32, fontFamily: 'System', fontWeight: '900', letterSpacing: 0.5, textAlign: 'center', color: '#FFFFFF', marginBottom: 8 }}>
        ФИТНЕС-КЛУБ
      </Text>
      
      <Text style={{ fontSize: 14, fontFamily: 'System', fontWeight: '400', textAlign: 'center', color: '#94A3B8', marginBottom: 40 }}>
        Добро пожаловать на тренировку
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#64748B"
        placeholder="Email"
        keyboardType="numeric"
        style={{
          backgroundColor: '#1E293B',
          width: '100%',
          height: 56,
          borderRadius: 16,
          paddingHorizontal: 20,
          marginBottom: 16,
          fontSize: 16,
          fontFamily: 'System',
          color: '#FFFFFF',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        }}
      />

      <TextInput
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        placeholderTextColor="#64748B"
        placeholder="Пароль"
        style={{
          backgroundColor: '#1E293B',
          width: '100%',
          height: 56,
          borderRadius: 16,
          paddingHorizontal: 20,
          marginBottom: 28,
          fontSize: 16,
          fontFamily: 'System',
          color: '#FFFFFF',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          width: '100%',
          height: 56,
          backgroundColor: '#38BDF8',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <Text style={{ color: '#0F172A', fontSize: 16, fontFamily: 'System', fontWeight: '700' }}>
          Войти
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowRegister(true)}
        style={{
          width: '100%',
          height: 56,
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: '#334155',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#94A3B8', fontSize: 16, fontFamily: 'System', fontWeight: '600' }}>
          Создать аккаунт
        </Text>
      </TouchableOpacity>
    </View>
  );
}