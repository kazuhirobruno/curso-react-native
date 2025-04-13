import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Animated, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

// export default function App() {
//   // const larAnimada = useRef(new Animated.Value(150)).current
//   const larAnimada = useRef(new Animated.Value(0)).current
//   const altAnimada = useRef(new Animated.Value(50)).current
//   // const opacityAnimada = useRef(new Animated.Value(1)).current

//   const [showText, setShowText] = useState<boolean>(false)

//   useEffect(() => {
//     // Animated.timing(larAnimada, {
//     //   toValue: 300,
//     //   duration: 2000,
//     //   useNativeDriver: false
//     // }).start()

//     // Animated.sequence([
//     //   Animated.timing(larAnimada, {
//     //     toValue: 300,
//     //     duration: 2000,
//     //     useNativeDriver: false
//     //   }),
//     //   Animated.timing(altAnimada, {
//     //     toValue: 200,
//     //     duration: 2000,
//     //     useNativeDriver: false
//     //   }),
//     //   Animated.timing(opacityAnimada, {
//     //     toValue: 0,
//     //     duration: 1000,
//     //     useNativeDriver: false
//     //   })
//     // ]).start()

//     // Animated.parallel([
//     //   Animated.timing(larAnimada, {
//     //     toValue: 300,
//     //     duration: 2000,
//     //     useNativeDriver: false
//     //   }),
//     //   Animated.timing(altAnimada, {
//     //     toValue: 200,
//     //     duration: 2000,
//     //     useNativeDriver: false
//     //   }),
//     // ]).start()

//     // Animated.sequence([
//     //   Animated.timing(opacityAnimada, {
//     //     toValue: 1,
//     //     duration: 2000,
//     //     useNativeDriver: false
//     //   }),
//     //   Animated.parallel([
//     //     Animated.timing(larAnimada, {
//     //       toValue: 300,
//     //       duration: 2000,
//     //       useNativeDriver: false
//     //     }),
//     //     Animated.timing(altAnimada, {
//     //       toValue: 200,
//     //       duration: 1000,
//     //       useNativeDriver: false
//     //     }),
//     //   ]),
//     //   Animated.timing(opacityAnimada, {
//     //     toValue: 0,
//     //     duration: 2000,
//     //     useNativeDriver: false
//     //   }),
//     // ]).start()

//     // Animated.loop(
//     //   Animated.timing(larAnimada, {
//     //     toValue: 300,
//     //     duration: 2000,
//     //     useNativeDriver: false
//     //   })
//     // ).start()
    
//     // Animated.loop(
//     //   Animated.sequence([
//     //     Animated.timing(larAnimada, {
//     //       toValue: 300,
//     //       duration: 2000,
//     //       useNativeDriver: false
//     //     }),
//     //     Animated.timing(larAnimada, {
//     //       toValue: 150,
//     //       duration: 2000,
//     //       useNativeDriver: false
//     //     })
//     //   ])
//     // ).start()

//     // Animated.timing(larAnimada, {
//     //   toValue: 100,
//     //   duration: 4000,
//     //   useNativeDriver:false
//     // }).start()
//     Animated.sequence([
//       Animated.timing(larAnimada, {
//         toValue: 100,
//         duration: 5000,
//         useNativeDriver: false
//       }),
//       Animated.timing(altAnimada, {
//         toValue: 100,
//         duration: 5000,
//         useNativeDriver: false
//       })
//     ]).start(() => {
//       setShowText(true)
//     })
//   }, [])

//   let percentLarg = larAnimada.interpolate({
//     inputRange: [0, 100],
//     outputRange: ['0%', '100%']
//   })

//   let percentAlt = altAnimada.interpolate({
//     inputRange: [50, 100],
//     outputRange: ['5%', '100%']
//   })

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={{ 
//           width: percentLarg,
//           height: percentAlt,
//           // height: altAnimada,
//           // width: larAnimada,
//           // opacity: opacityAnimada,
//           backgroundColor: '#4169e1',
//           justifyContent: 'center',
//           // borderRadius: 50
//         }}
//       >
//         {showText && (
//           <Text style={{
//             textAlign: 'center',
//             fontSize: 22,
//             color: '#fff'
//           }}>Carregando...</Text>
//         )}
//       </Animated.View>
//     </SafeAreaView>
//   );
// }

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {
  const buttonRef = useRef(null)

  const handleClick = () => {
    buttonRef?.current?.shake()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation='pulse'
        iterationCount={Infinity}
        duration={5000}
      >Sujeito programador</Animatable.Text>

      <ButtonAnimated 
        style={styles.button}
        animation="pulse"
        ref={buttonRef}
        onPress={handleClick}
      >
        <Text style={{ color: '#fff' }}>Animar</Text>
      </ButtonAnimated>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25
  },
  button: {
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  }
});