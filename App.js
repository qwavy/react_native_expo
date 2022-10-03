import { Button, View, Text, StyleSheet, TextInput } from 'react-native'

const App = () => {

  const click = () => {
    console.log('d')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopping List</Text>
      </View>
      <View>
        <TextInput placeholder='Enter ...'/>
        <Button title='add'/>
      </View>
    </View>
  )
}
export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60
  },
  header:{
    backgroundColor: 'purple',
    justifyContent: ' center',
    alignItems:'center'
  },
  headerText: {
    color:'white',
    padding:10,
    fontSize:20
  }
})