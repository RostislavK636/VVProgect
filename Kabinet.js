import { useState } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import History from "./History"

function Kabinet({ userLogin, goBackToLogin }){
  const [showHistory, setShowHistory] = useState(false)
  
  const handleHistory = () => {  
    if (userLogin === '') {
      Alert.alert('Ошибка', 'Пользователь не авторизован');
    } else {
      setShowHistory(true);
    }
  };

  if(showHistory){
    return <History userLogin = {userLogin} goBackToLK = {() => setShowHistory(false)}/>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#0F172A' }}>
      <Text style={{ fontSize: 32, fontFamily: 'System', fontWeight: '900', letterSpacing: 0.5, textAlign: 'center', color: '#FFFFFF', marginBottom: 8 }}>
        ЛИЧНЫЙ КАБИНЕТ
      </Text> 
      
      <Text style={{ fontSize: 16, fontFamily: 'System', fontWeight: '500', textAlign: 'center', color: '#94A3B8', marginBottom: 40 }}>
        Номер карты: <Text style={{ color: '#38BDF8', fontWeight: '700' }}>{userLogin}</Text>
      </Text>

      <TouchableOpacity
        onPress={handleHistory}
        style={{
          width: '100%',
          height: 56,
          backgroundColor: '#38BDF8',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16,
          shadowColor: '#38BDF8',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <Text style={{ color: '#0F172A', fontSize: 16, fontFamily: 'System', fontWeight: '700' }}>
          История посещений
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={goBackToLogin}
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
          Выйти из аккаунта
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Kabinet;
