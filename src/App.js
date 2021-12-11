import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native';
import patistore_data from './patistore_data.json';

const App = () => {
  const renderStore =({item}) => <Text style={styles.title}>{item.title}</Text>
  
  return(
    <View style={styles.container}>
      <Text style={styles.headline}>Patistore</Text>
      <FlatList
      data={patistore_data}
      renderItem={renderStore}
      
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'wheat',
  },
  title:{
    color:'black',
    fontWeight:'bold',
    fontSize:20,
    
  },
  headline:{
    fontSize:30,
    color:'black',
    fontWeight:'bold',  
  },
})

export default App;