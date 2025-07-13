// Equalizer.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

const Bar = ({ delay }: { delay: number }) => {
  const height = useSharedValue(10);

  React.useEffect(() => {
    const animate = () => {
      height.value = withRepeat(
        withTiming(30, {
          duration: 400,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
    };

    const timeout = setTimeout(animate, delay);

    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  return <Animated.View style={[styles.bar, animatedStyle]} />;
};

const Equalizer = () => {
  return (
    <View style={styles.barContainer}>
      <Bar delay={0} />
      <Bar delay={250} />
      <Bar delay={400} />
    </View>
  );
};

export default Equalizer;

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 25,
  },
  bar: {
    width: 5,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
});
