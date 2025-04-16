import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { DigitColumn } from '../DigitColumn';

interface ButtonAnimatedProps {}

const ITEM_HEIGHT = 40;

export const ButtonAnimated = ({}: ButtonAnimatedProps) => {
  const [count, setCount] = useState<number>(0);

  const digits = count
    .toString()
    .padStart(count < 10 ? 1 : count < 100 ? 2 : 3, '0')
    .split('')
    .map(Number);

  const handleChangeLike = () => {
    if (count < 999) setCount(count + 1);
  };

  return (
    <View
      style={{
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 110,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginTop: 10,
        overflow: 'hidden',
        height: ITEM_HEIGHT,
        alignItems: 'center',
      }}
    >
      <TouchableOpacity activeOpacity={0.7} onPress={handleChangeLike}>
        <Feather name='thumbs-up' size={20} color='#ddd' />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#333',
          padding: 10,
          borderRadius: 10,
        }}
      >
        {digits.map((digit, i) => (
          <DigitColumn key={i} digit={digit} />
        ))}
      </View>
    </View>
  );
};
