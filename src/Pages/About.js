import React from 'react';
import "./About.css";
import myImage from '../Assets/taisepic.jpg';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native'

function About() {
  return (
    <div className="title">
      Let me introduce myself!
        <SafeAreaView style ={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <Image 
            source={myImage} style={styles.image} 
          />
        <Text style={styles.text}> 
          Test
        </Text>
        </View>
      </SafeAreaView>
      <div className="text">
        I am a third year Computer Science major enrolled in the Bachelors of Science Degree program at University of Florida! I am looking for opportunities to grow as an individual and learn skills that are necessary to become a software engineer. Few interests I have include working with backend software and APIs. 
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 200/2
  },
  text:{
    fontSize: 20,
    textAlign: 'center'
  }
});

export default About;