import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './PatistoreCard_style';

const PatistoreCard = ({stores}) => {
    return (
        <View style= {styles.card_container}>
            <Image
            style={styles.image}
            source={{uri:stores.imgURL}}/>
            <Text style={styles.title}>{stores.title}</Text>
            <Text style={styles.price}>{stores.price}</Text>
            <Text style={styles.inStock}>{stores.inStock}</Text>
            
        </View>
    )
};

export default PatistoreCard;