import React, { useContext, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import { Context as TrackContext } from '../../context-providers/TrackContext'
import TrackListComponent from '../../components/TrackListComponent'
import { withNavigationFocus } from 'react-navigation'

function TrackListScreen({ isFocused }) {
  const { state, boundActions } = useContext(TrackContext)

  useEffect(() => {
    if (isFocused) { boundActions.FetchTrack(); }

  }, [isFocused]);
  return (
    <View style={styles.MainListContainer}>
      {(state.tracks) ? (state.tracks.length !== 0) ? <FlatList
        data={state.tracks}
        keyExtractor={(item) => { item._id }}
        renderItem={({ item }) => {
          return (
            <TrackListComponent textTitle={item.name} trackId={item._id} />

          )
        }} /> :
        <View style={{ alignItems: 'center' }}><Text>No Available Tracks</Text></View> : <View style={{ alignItems: 'center' }}><Text>Something went wrong</Text>
        <ActivityIndicator size={'large'} /></View>}

    </View>
  )
}

const styles = StyleSheet.create({
  MainListContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 20
  }
})

TrackListScreen.navigationOptions = {
  title: 'Tracks',
  headerTitleAlign: 'center'
}

export default withNavigationFocus(TrackListScreen);