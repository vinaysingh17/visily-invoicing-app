import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/colors';

export default function ExistingBills() {
  const {width, height} = Dimensions.get('screen');

  const Card = () => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 5,
          borderColor: '#ccc',
          borderWidth: 0.8,
        }}>
        <View style={style.card}>
          <Text style={style.textStyle}>Lorem ipsum is the best question ever in this world. Strix is the best company</Text>
        </View>
        <View style={style.card}>
          <Text style={style.textStyle2}>8 Aug</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Icon name="edit" size={24} style={{paddingHorizontal: 4}} />
            <Icon
              name="delete"
              color={COLORS.themeColor}
              size={24}
              style={{paddingHorizontal: 4}}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <ScrollView style={{padding: 10, marginBottom: 10}}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for Question"
          />
        </View>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          borderColor: COLORS.themeColor,
          borderWidth: 1,
          alignSelf: 'center',
          position: 'absolute',
          top: height / 1.45,
          elevation: 20,
          padding: 10,
          borderRadius: 30,
        }}>
        <Icon name="add" color={COLORS.themeColor} size={28} />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 2,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,0.9)',
    // width: '90%'
  },
  textStyle2: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,0.75)',
  },
  categoriesListContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    // width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    // marginHorizontal: 5,
    // marginVertical: 10,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
