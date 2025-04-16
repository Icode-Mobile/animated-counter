import { Text, View } from 'react-native';

interface DigitColumnProps {
  digit: number;
}

const DIGIT_HEIGHT = 35;
const DIGIT_WIDTH = 20;

export const DigitColumn = ({ digit }: DigitColumnProps) => {
  return (
    <View
      style={{
        height: DIGIT_HEIGHT,
        width: DIGIT_WIDTH,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: '#333',
      }}
    >
      <View style={{}}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Text
            key={i}
            style={{
              height: DIGIT_HEIGHT,
              textAlign: 'center',
              fontSize: 20,
              color: '#fff',
            }}
          >
            {i}
          </Text>
        ))}
      </View>
    </View>
  );
};
