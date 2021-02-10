import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
import Product from '../components/Product';

export default function Home({navigation}) {
  const [options, setOptions] = useState('Ho Chi Minh');

  return (
    <ScrollView style={styles.container}>
      {/*=== Handle header ===*/}
      <View style={styles.styleHeader}>
        {/* Icon Menu */}
        <View style={{width: '10%'}}>
          <Image source={require('../images/1.png')} />
        </View>

        {/* Picker */}
        <View style={{width: '80%', alignItems: 'center'}}>
          <Picker
            selectedValue={options}
            style={{height: 50, width: 160}}
            onValueChange={(itemValue, itemIndex) =>
              setOptions({options: itemValue})
            }>
            <Picker.Item label="Ha Noi" value="Ha Noi" />
            <Picker.Item label="Ho Chi Minh" value="Ho Chi Minh" />
            <Picker.Item label="Da Nang" value="Da Nang" />
          </Picker>
        </View>

        {/* Icon Search */}
        <View style={{width: '10%'}}>
          <Image source={require('../images/search.png')} />
        </View>
      </View>

      {/*=== Title ===*/}
      <View style={styles.styleTitle}>
        <Text style={styles.styleText}>Food that</Text>
        <Text style={styles.styleText}>meets your needs</Text>
      </View>

      {/*=== ScrollView Option Food ===*/}
      <ScrollView
        horizontal
        style={{marginTop: 40}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.ActiveScrollViewOptionFood}>
          <Image
            source={require('../images/5.png')}
            style={styles.styleImageFood}
          />
          <Text style={styles.styleNameFood}>Burgers</Text>
        </View>

        <View style={styles.scrollViewOptionFood}>
          <Image
            source={require('../images/10.png')}
            style={styles.styleImageFood}
          />
          <Text style={styles.styleNameFood}>Burrito</Text>
        </View>

        <View style={styles.scrollViewOptionFood}>
          <Image
            source={require('../images/7.png')}
            style={styles.styleImageFood}
          />
          <Text style={styles.styleNameFood}>Salads</Text>
        </View>

        <View style={styles.scrollViewOptionFood}>
          <Image
            source={require('../images/6.png')}
            style={styles.styleImageFood}
          />
          <Text style={styles.styleNameFood}>Pizza</Text>
        </View>
      </ScrollView>

      {/* Handle NewProduct */}
      <View style={styles.containerNewProduct}>
        <View style={{width: '50%'}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            New Products
          </Text>
        </View>
        <View style={{width: '50%', alignItems: 'flex-end'}}>
          <Image source={require('../images/dots-three.png')} />
        </View>
      </View>

      {/* Product */}
      <View style={styles.rowProduct}>
        <Product
          image={require('../images/4.png')}
          title="Smokehouse"
          detail="Beef burger"
          calories="290"
          price="12.99"
          onPress={() => navigation.navigate('Detail')}
        />
        <Product
          image={require('../images/9.png')}
          title="Honey Chilli"
          detail="Tomato sandwiches"
          calories="350"
          price="10.99"
          marginTop={25}
        />
      </View>

      <View style={styles.rowProduct}>
        <Product
          image={require('../images/6.png')}
          title="Adios Pizza"
          detail="Baked pizza"
          calories="150"
          price="11.99"
        />
        <Product
          image={require('../images/10.png')}
          title="Burrito"
          detail="Rolled rice paper"
          calories="50"
          price="10.99"
          marginTop={25}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  styleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },

  styleTitle: {
    paddingHorizontal: 20,
    marginTop: 40,
  },

  styleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  ActiveScrollViewOptionFood: {
    backgroundColor: '#f9dd7a',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },

  scrollViewOptionFood: {
    backgroundColor: '#e5e4eb',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },

  styleImageFood: {
    height: 40,
    width: 40,
  },

  styleNameFood: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },

  containerNewProduct: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },

  rowProduct: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
  },
});
