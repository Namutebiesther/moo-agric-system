import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PlantFAQCard from './PlantFAQCard';
import {Text} from '../../components/Themed';

const PlantFAQ = () => {
  const [plantFAQs, setPlantFAQs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://perenual.com/api/article-faq-list?key=sk-qOb965a31462a6e733770&page=1',
        );
        const data = await response.json();
        setPlantFAQs(data.data);
      } catch (error) {
        console.error('Error fetching plant FAQs data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <Text type="bold" style={{margin: 5}}>
        Plants Frequently asked questions
      </Text>
      {plantFAQs.map(faq => (
        <PlantFAQCard key={faq.id} faq={faq} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
  },
});

export default PlantFAQ;
