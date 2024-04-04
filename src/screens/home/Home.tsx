import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  TextInput,
  Switch,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import PlantCard from './Plantcard';
import {Text, View} from '../../components/Themed';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [plantData, setPlantData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // State variables for filters
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [edible, setEdible] = useState(true);
  const [poisonous, setPoisonous] = useState(false);
  const [cycle, setCycle] = useState('annual');
  const [watering, setWatering] = useState('frequent');
  const [sunlight, setSunlight] = useState('full_sun');
  const [indoor, setIndoor] = useState(false);
  const [hardiness, setHardiness] = useState('1');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const apiKey = 'sk-qOb965a31462a6e733770';
      const page = 1;
      const queryParams = new URLSearchParams();

      // Function to conditionally append parameters if the value is not an empty string
      const appendIfNotEmpty = (param, value) => {
        if (value !== '' && value !== false) {
          queryParams.append(param, value);
        }
      };

      appendIfNotEmpty('key', apiKey);
      appendIfNotEmpty('page', page);
      appendIfNotEmpty('q', query);
      appendIfNotEmpty('order', order);
      appendIfNotEmpty('edible', edible);
      //   appendIfNotEmpty('poisonous', poisonous);
      //   appendIfNotEmpty('cycle', cycle);
      //   appendIfNotEmpty('watering', watering);
      //   appendIfNotEmpty('sunlight', sunlight);
      //   appendIfNotEmpty('indoor', indoor);
      //   appendIfNotEmpty('hardiness', hardiness);

      const url = `https://perenual.com/api/species-list?${queryParams.toString()}`;
      console.log(url);

      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPlantData(data.data);
      }
    } catch (error) {
      console.error('Error fetching plant data:', error);
    } finally {
      setIsRefreshing(false);
      setLoading(false);
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      {/* UI Controls for Filters */}
      <View style={styles.filterContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 7,
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={styles.input}
            value={query}
            placeholderTextColor={'gray'}
            placeholder="Search a plant..."
            onChangeText={text => setQuery(text)}
          />
          <TouchableOpacity style={{marginRight: 15}} onPress={fetchData}>
            <Ionicon name="search" size={30} color={'green'} />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.switchContainer}>
            <Text>Edible:</Text>
            <Switch value={edible} onValueChange={value => setEdible(value)} />
          </View>

          <View style={styles.switchContainer}>
            <Text>Poisonous:</Text>
            <Switch
              value={poisonous}
              onValueChange={value => setPoisonous(value)}
            />
          </View>
        </View>

        {/* Add similar controls for other filters */}
        {/* ... */}
      </View>

      {/* Display Plant Cards */}
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        plantData.map(plant => <PlantCard key={plant.id} plant={plant} />)
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 16,
  },
  filterContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingHorizontal: 8,
    color: 'black',
    borderRadius: 7,
    width: '85%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default Home;
