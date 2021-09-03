import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [displayedText, setDisplayedText] = useState(undefined);

  const OutputText = () => (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25}}>{displayedText}!!!</Text>
    </View>
  );

  if (displayedText) {
    return <OutputText />;
  }

  return (
    <View testID="welcome" style={styles.root}>
      <TouchableOpacity
        style={styles.button}
        testID="hello_button"
        onPress={() => setDisplayedText('Hello')}>
        <Text style={styles.buttonText}>Tap to display Hello!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button, backgroundColor: '#b71540'}}
        testID="world_button"
        onPress={() => setDisplayedText('World')}>
        <Text style={styles.buttonText}>Tap to display World!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 350,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006266',
    marginBottom: 32,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',

    padding: 10,
  },
});
