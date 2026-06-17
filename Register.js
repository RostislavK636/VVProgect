import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {registerUser} from './firebase'

function RegisterScreen ({goBack}) {
  const [loading, setLoading] = useState(false)
  const handleRegister = async () => {
    const normalizedEmail = email.trim();
    const normalizedFields = [level, name, password, phone, fname, normalizedEmail];

    if (normalizedFields.some((field) => field.trim() === '')){
      Alert.alert('Ошибка', 'Заполните все поля');
      return;
    }

    setLoading(true);
    const result = await registerUser(normalizedEmail, password);
    setLoading(false);

    if (result.success) {
      Alert.alert('Готово', 'Аккаунт создан');
      goBack();
    } else {
      Alert.alert('Ошибка регистрации', result.error);
    }
  }
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [fname, setFname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return(
    <ScrollView 
      style={{ flex: 1, backgroundColor: '#0F172A' }}
      contentContainerStyle={{ padding: 24, paddingTop: 60, paddingBottom: 40 }}
    >
      <Text style={{ fontSize: 32, fontFamily: 'System', fontWeight: '900', letterSpacing: 0.5, textAlign: 'center', color: '#FFFFFF', marginBottom: 8 }}>
        РЕГИСТРАЦИЯ
      </Text>
      <Text style={{ fontSize: 14, fontFamily: 'System', fontWeight: '400', textAlign: 'center', color: '#94A3B8', marginBottom: 32 }}>
        ЗАПИШИТЕСЬ В ЗАЛ
      </Text>

      <TextInput
        placeholderTextColor="#64748B"
        placeholder="Фамилия"
        value={fname}
        onChangeText={setFname}
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
        placeholderTextColor="#64748B"
        placeholder="Имя"
        value={name}
        onChangeText={setName}
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
        keyboardType="phone-pad"
        placeholderTextColor="#64748B"
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
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
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#64748B"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
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
        placeholderTextColor="#64748B"
        placeholder="Пароль"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
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
        placeholderTextColor="#64748B"
        placeholder="Уровень подготовки"
        value={level}
        onChangeText={setLevel}
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
        disabled={loading}
        onPress={handleRegister}
        style={{
          width: '100%',
          height: 56,
          backgroundColor: '#38BDF8',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 12,
          shadowColor: '#38BDF8',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 4,
          opacity: loading ? 0.6 : 1
        }}
      >
        <Text style={{ color: '#0F172A', fontSize: 16, fontFamily: 'System', fontWeight: '700'}}>
        {loading ? 'ПОДОЖДИТЕ...' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={goBack}
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
          Назад к авторизации
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default RegisterScreen;
