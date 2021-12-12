import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    card_container:{
        backgroundColor: 'white',
    },
    image:{
        height: Dimensions.get('window').height/2,
        width: Dimensions.get('window').width/2,
        margin:20,
        borderRadius:10,
        

    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        
      },
    price:{
        color:'black',
        fontWeight:'bold',
        fontSize:10,},
    inStock:{
        color:'red',
        fontWeight:'bold',
        fontSize:20,
    },
}
)