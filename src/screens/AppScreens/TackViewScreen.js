import React, { useContext } from 'react'
import Map, { Circle, Polyline, } from 'react-native-maps'
import { Text, View, StyleSheet,Dimensions} from 'react-native'
import { Context as TrackContext } from '../../context-providers/TrackContext'
export default function TackViewScreen(props) {
  const trackId = props.navigation.state.params.trackId
  const { state } = useContext(TrackContext)
  const track = state.tracks.find(
    (trackItem) => {
      return trackItem._id === trackId

    }
  )
  console.log(track)
  return (
    <View style={styles.MainViewContainer}>
      <Text style={styles.TitleLayout}>{track.name}</Text>
      <View style={{ flex: 1 }}>
        <Map
          initialRegion={{
            ...track.locations[0].cords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width:Dimensions.get('window').width,
          height:500 }}>
          <Polyline
            coordinates={track.locations.map(
              (loc) => {
                return {
                  latitude: loc.cords.latitude,
                  longitude: loc.cords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }
              }
            )}
            strokeColor='black'
            strokeWidth={3}
            lineDashPattern={[1]} />

        </Map>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  MainViewContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor:'white'
  },
  TitleLayout:
  {
    fontSize: 22,
    fontWeight: 'bold'
  }
})
TackViewScreen.navigationOptions = {
  title: 'Hike',
  headerTitleAlign: 'center'
}
