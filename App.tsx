import { ButtonAnimated } from '@/components/ButtonAnimated';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18,
        }}
      >
        Dê um like no contúdo
      </Text>
      <ButtonAnimated />
      <StatusBar style='light' backgroundColor='#333' />
    </View>
  );
}
