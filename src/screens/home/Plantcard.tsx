import {Image, StyleSheet} from 'react-native';
import {Text, View} from '../../components/Themed';

const PlantCard = ({plant}) => {
  return (
    plant.default_image && (
      <View style={styles.container}>
        <Image
          source={{uri: plant.default_image.regular_url}}
          style={styles.thumbnail}
        />
        <Text type="bold" style={styles.commonName}>
          {plant.common_name}
        </Text>
        <Text style={styles.scientificName}>
          {plant.scientific_name.length > 0
            ? plant.scientific_name.join(', ')
            : plant.scientific_name}
        </Text>
        <Text style={styles.cycle}>Cycle: {plant.cycle}</Text>
        <Text style={styles.watering}>Watering: {plant.watering}</Text>
        {plant.sunlight && (
          <Text style={styles.sunlight}>
            Sunlight:{' '}
            {plant.sunlight.lenth > 0
              ? plant.sunlight.join(', ')
              : plant.sunlight}
          </Text>
        )}
      </View>
    )
  );
};

export default PlantCard;
const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
  },
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
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  commonName: {
    fontSize: 20,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  scientificName: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  cycle: {
    fontSize: 14,
    marginBottom: 5,
  },
  watering: {
    fontSize: 14,
    marginBottom: 5,
  },
  sunlight: {
    fontSize: 14,
  },
});
