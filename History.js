import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

function History({ userLogin, goBackToLK }) {
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: '#0F172A' }}
      contentContainerStyle={{ padding: 24, paddingTop: 60, paddingBottom: 40 }}
    >
      <Text style={{ fontSize: 28, fontFamily: 'System', fontWeight: '900', letterSpacing: 0.5, textAlign: 'center', color: '#FFFFFF', marginBottom: 8 }}>
        ИСТОРИЯ ПОСЕЩЕНИЙ
      </Text> 
      
      <Text style={{ fontSize: 15, fontFamily: 'System', fontWeight: '500', textAlign: 'center', color: '#94A3B8', marginBottom: 32 }}>
        Карта: <Text style={{ color: '#38BDF8', fontWeight: '700' }}>{userLogin}</Text>
      </Text>

      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B', 
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16, 
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}>
        <Text style={{ fontSize: 16, fontFamily: 'System', fontWeight: '700', color: '#FFFFFF' }}>
          23.05.2026
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'System', fontWeight: '500', color: '#38BDF8' }}>
          16:30 - 20:00
        </Text>
      </View>

      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B', 
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16, 
        marginBottom: 12,
      }}>
        <Text style={{ fontSize: 16, fontFamily: 'System', fontWeight: '700', color: '#FFFFFF' }}>
          23.05.2026
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'System', fontWeight: '500', color: '#38BDF8' }}>
          16:30 - 20:00
        </Text>
      </View>


      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B', 
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16, 
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}>
        <Text style={{ fontSize: 16, fontFamily: 'System', fontWeight: '700', color: '#FFFFFF' }}>
          23.05.2026
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'System', fontWeight: '500', color: '#38BDF8' }}>
          16:30 - 20:00
        </Text>
      </View>

      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B', 
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16, 
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}>
        <Text style={{ fontSize: 16, fontFamily: 'System', fontWeight: '700', color: '#FFFFFF' }}>
          23.05.2026
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'System', fontWeight: '500', color: '#38BDF8' }}>
          16:30 - 20:00
        </Text>
      </View>

 
      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B', 
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16, 
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}>
        <Text style={{ fontSize: 16, fontFamily: 'System', fontWeight: '700', color: '#FFFFFF' }}>
          23.05.2026
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'System', fontWeight: '500', color: '#38BDF8' }}>
          16:30 - 20:00
        </Text>
      </View>

      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E293B', 
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16, 
        marginBottom: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      }}>
        <Text style={{ fontSize: 16, fontFamily: 'System', fontWeight: '700', color: '#FFFFFF' }}>
          23.05.2026
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'System', fontWeight: '500', color: '#38BDF8' }}>
          16:30 - 20:00
        </Text>
      </View>

      <TouchableOpacity
        onPress={goBackToLK}
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
          Назад в кабинет
        </Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

export default History;
