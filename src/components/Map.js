import Map, { Circle, Polyline } from 'react-native-maps'
import React, { useContext } from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { Context as LocationContext } from '../context-providers/LocationContext'

export default Maps = () => {
    const { state } = useContext(LocationContext)
    if (!state.currentLocation) {
        return <View style={{ alignItems: 'center', margin: 30 }}>
            <ActivityIndicator size="large" />
            <Text>MAP UNAVIALABLE</Text>
        </View>
    }
    return (
        <View style={{ margin: 10 }}>
            <Map
                initialRegion={{
                    ...state.currentLocation.cords,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{ height: 500 }}>
                <Circle center={{
                    ...state.currentLocation.cords,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                    radius={150}
                    strokeColor='white'
                    fillColor='black' />
                <Polyline
                 style={{}}
                 coordinates={state.location.map(
                    (loc)=>{
                        return{
                            latitude:loc.cords.latitude,
                            longitude:loc.cords.longitude
                        }
                    }
                 )}
                 strokeColor='black'
                 strokeWidth={3}
                 lineDashPattern={[1]}/>

            </Map>
        </View>
    )
}