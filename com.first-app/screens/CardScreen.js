import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Cards',
  };

  

  render() {
    return (
        
      <ScrollView style={styles.container}>
        <Card style={styles.cardContainer}
            //title='Caption Header'
            image={require('../assets/images/1.jpg')}>
            <Text style={styles.cardHeaderText}>
              New Chrome Extension Tune
            </Text>
            <Text style={styles.cardDescriptionText}>
                New chrome extension Tune is an experimental toolkit. Its is developed by Google's Jigsaw team.
            </Text>
            <View style={styles.cardButtonContainer}>
              <View style={styles.cardButton}>
                <Button
                    icon={<Icon type="font-awesome" name='share-alt' color='#ffffff' />}
                    backgroundColor='#c3c1c1'
                    buttonStyle={styles.button}
                    title=' Share' />
              </View>
              <View style={styles.cardButton}>
                <Button
                    icon={<Icon type="font-awesome" name='thumbs-o-up' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={styles.button}
                    title=' Like' />
              </View>
            </View>
        </Card>
        <Card style={styles.cardContainer}
            //title='Some Header Info'
            image={require('../assets/images/2.jpg')}>
            <Text style={styles.cardHeaderText}>
              Google Algorithm Updates
            </Text>
            <Text style={styles.cardDescriptionText}>
              Google has a long history of famous algorithm updates, search index changes and refreshes.
            </Text>
            <View style={styles.cardButtonContainer}>
              <View style={styles.cardButton}>
                <Button
                    icon={<Icon type="font-awesome" name='share-alt' color='#ffffff' />}
                    backgroundColor='#c3c1c1'
                    buttonStyle={styles.button}
                    title=' Share' />
              </View>
              <View style={styles.cardButton}>
                <Button
                    icon={<Icon type="font-awesome" name='thumbs-o-up' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={styles.button}
                    title=' Like' />
              </View>
            </View>
        </Card>
        <Card style={styles.cardContainer}
            //title='Lorem Ipsum Header'
            image={require('../assets/images/3.jpg')}>
            <Text style={styles.cardHeaderText}>
              Apple-Spotify Competition
            </Text>
            <Text style={styles.cardDescriptionText}>
              Spotify has filed an official complaint against Apple in Europe, contending that Apple unfairly limits choice and competition through the rules of its app store.
            </Text>
            <View style={styles.cardButtonContainer}>
              <View style={styles.cardButton}>
                <Button
                    icon={<Icon type="font-awesome" name='share-alt' color='#ffffff' />}
                    backgroundColor='#c3c1c1'
                    buttonStyle={styles.button}
                    title=' Share' />
              </View>
              <View style={styles.cardButton}>
                <Button
                    icon={<Icon type="font-awesome" name='thumbs-o-up' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={styles.button}
                    title=' Like' />
              </View>
            </View>
        </Card>
        <Card style={styles.cardContainer}
            //title='News Header'
            image={require('../assets/images/4.jpg')}>
            <Text style={styles.cardHeaderText}>
              Mozilla's new file share service: Firefox Send
            </Text>
            <Text style={styles.cardDescriptionText}>
              Introducing Firefox Send, providing free file transfers while keeping your personal information private.
            </Text>
            <View style={styles.cardButtonContainer}>
              <View style={styles.cardButton}>
                <Button 
                    icon={<Icon type="font-awesome" name='share-alt' color='#ffffff' />}
                    backgroundColor='#c3c1c1'
                    buttonStyle={styles.button}
                    title=' Share' />
              </View>
              <View style={styles.cardButton}>
                <Button
                    icon={<Icon type="font-awesome" name='thumbs-o-up' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={styles.button}
                    title=' Like' />
              </View>
            </View>
            
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  cardButton: {
    flex: 1
  },
  button: {
    borderRadius: 0,
    width: '95%'
  },
  cardContainer:{
    backgroundColor: '#c5c7ca',
    borderRadius: 3
  },
  cardButtonContainer: {
    // width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeaderText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 7
  },
  cardDescriptionText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'left',
  },
});

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
   ]
