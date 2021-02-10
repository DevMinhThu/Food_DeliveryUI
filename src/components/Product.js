import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

export default function Product(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: '#f5f5fa',
        height: 280,
        width: 180,
        borderRadius: 20,
        marginRight: 13,
        marginTop: props.marginTop,
      }}>
      <View style={styles.detailProduct}>
        <Image
          source={require('../images/3.png')}
          style={{height: 25, width: 20}}
        />
        <Text style={{paddingHorizontal: 10, fontWeight: 'bold', fontSize: 16}}>
          {props.calories} Calories
        </Text>
      </View>

      <Image source={props.image} style={styles.imageProduct} />
      <Text style={styles.nameFood}>{props.title}</Text>
      <Text style={styles.detailFood}>{props.detail}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  detailProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },

  imageProduct: {
    height: 105,
    alignSelf: 'center',
    width: 130,
    marginTop: 15,
    marginBottom: 15,
  },

  nameFood: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },

  detailFood: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#848385',
  },
});
