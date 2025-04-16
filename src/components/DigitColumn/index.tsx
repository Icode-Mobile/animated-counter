import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface DigitColumnProps {
  digit: number;
}

const DIGIT_HEIGHT = 35;
const DIGIT_WIDTH = 20;

export const DigitColumn = ({ digit }: DigitColumnProps) => {
  const translateY = useSharedValue<number>(-digit * DIGIT_HEIGHT);
  const zoom = useSharedValue<number>(1); // 1 -> 1.6

  useEffect(() => {
    translateY.value = withTiming(-digit * DIGIT_HEIGHT, {
      duration: 200,
    });
    zoom.value = withSequence(
      withTiming(1.6, {
        duration: 250,
        easing: Easing.linear,
      }),
      withTiming(0.8, {
        duration: 250,
        easing: Easing.linear,
      }),
      withTiming(1, {
        duration: 250,
        easing: Easing.elastic(2),
      })
    );
  }, [digit]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [{ scale: zoom.value }],
  }));

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
      <Animated.View style={[animatedStyle]}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Animated.Text
            key={i}
            style={[
              {
                height: DIGIT_HEIGHT,
                textAlign: 'center',
                fontSize: 20,
                color: '#fff',
              },
              animatedTextStyle,
            ]}
          >
            {i}
          </Animated.Text>
        ))}
      </Animated.View>
    </View>
  );
};
