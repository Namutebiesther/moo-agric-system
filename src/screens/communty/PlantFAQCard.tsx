import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';

const PlantFAQCard = ({faq}) => {
  return (
    faq.default_image && (
      <View style={styles.container}>
        <Image
          source={{uri: faq.default_image.medium_url}}
          style={styles.image}
        />
        <Text style={styles.question}>{faq.question}</Text>
        <Text style={styles.answer}>{faq.answer}</Text>
        <View style={styles.tagsContainer}>
          {faq.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default PlantFAQCard;
