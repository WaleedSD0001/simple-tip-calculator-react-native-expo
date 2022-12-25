import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [amount, setAmount] = useState(0)
  const [percent, setPercent] = useState(0)
  const [calculated, setCalculated] = useState(0)

  const calculateTipF = (val) => {
    setAmount(val)
    const res = (amount * percent) / 100
    setCalculated(res)
  }

  const calculateTipS = (val) => {
    setPercent(val)
    const res = (amount * percent) / 100
    setCalculated(res)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} keyboardType='numeric' placeholder='Enter an amount...' onChangeText={(e)=> calculateTipF(e)} />
      
      <View style={styles.percentInf}>
        <TextInput style={styles.percent} keyboardType='numeric' placeholder='0' onChangeText={(e)=> calculateTipS(e)} value={percent} />
        <Text style={styles.percentText}>%</Text>
      </View>

      <View>
        <Text style={styles.res}>{calculated}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ced6e0'
  },
  input: {
    backgroundColor: "#fff",
    width: 165,
    height: 30,
    paddingStart: 10,
    borderRadius: 3,
    fontSize: 12
  },
  percent: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    paddingStart: 11.5,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    fontSize: 12
  },
  percentInf: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  percentText: {
    backgroundColor: '#7d5fff',
    color: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
    paddingStart: 10,
    paddingEnd: 10,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  res: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: 60,
    height: 30,
    paddingTop: 6,
    textAlign: 'center',
    borderRadius: 3,
    fontSize: 12,
    color: '#333'
  },
});
