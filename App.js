import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, Pressable,  Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'



const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: 1, text: 'toyota' },
    { id: 2, text: 'mercedes' },
    { id: 3, text: 'porsche' },

  ])

  const handlePress = () => {
    if(text.length === 0){
      Alert.alert('wahtung','Поле не может быть пустым',['OK'])
    }else{
      setItems(previousItems => (
        [{ id: (previousItems.length + 1).toString(), text }, ...previousItems]
      ))
    }

  }
  const deletedItems = (id) => {
    const newList = items.filter((item) => item.id !== id)
    setItems(newList)
    // alert('df')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopping list</Text>
      </View>
      <View style={styles.addItem}>
        <TextInput style={styles.text} value={text} onChangeText={word => setText(word)} placeholder='Enter...' />
        {/* <Button title="Add" onPress={handlePress} style={styles.btn} /> */}
        <Icon name="add-to-list" size={30} color="black" onPress={handlePress}/>  
        
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (

          <Text style={styles.listItem}>{item.text}<Icon name="remove-user" size={30} color="white" onPress={() => deletedItems(item.id)}/>  </Text>

        )}

      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  header: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    padding: 10,
    fontSize: 20
  },
  addItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  text: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 6
  },
  listItem: {
    backgroundColor: 'black',
    padding: 8,
    margin: 10,
    borderRadius: 10,
    color: 'white'
  },
  btn:{
    margin:20
  },
  remove:{
    // paddingLeft:50
    width:50,
    height:300
  }
})