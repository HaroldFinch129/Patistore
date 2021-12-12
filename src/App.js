import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native';
import patistore_data from './patistore_data.json';
import PatistoreCard from './components/patistoreCard/PatistoreCards';
const App = () => {
  const renderStore =({item}) => <PatistoreCard stores={item} />;
  
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
  
  headline:{
    fontSize:30,
    color:'black',
    fontWeight:'bold',  
  },
 
  
})

export default App;