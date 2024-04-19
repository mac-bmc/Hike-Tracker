
import React, { useContext, useCallback } from 'react'
import { Text, View, StatusBar, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import Maps from '../../components/Map'
import { Context as LocationContext } from '../../context-providers/LocationContext';
import useLocationHooks from '../../hooks/useLocationHooks';
import useTrackHooks from '../../hooks/useTrackHooks';
import CustomTextInput from '../../components/CustomTextInputComponent';
import { ControlButton } from '../../components/ControlButton';
import { Ionicons } from '@expo/vector-icons';

function TrackCreateScreen({ isFocused }) {
  const { state, boundActions } = useContext(LocationContext)
  const callback = useCallback((location) => boundActions.AddTrackRecording(location, state.isRecording), [state.isRecording])
  const [err] = useLocationHooks(callback, isFocused || state.isRecording)
  const [SaveTrack, error] = useTrackHooks(state.name, state.location)
  return (
    <KeyboardAvoidingView>
      <View style={styles.MainScreenContainer}>
        <CustomTextInput placeholder="Enter Track Title" onChange={boundActions.ChangeName} value={state.name} />
        {error ? <Text style={{ color: 'red', marginVertical: 10, marginHorizontal: 20 }}>{error}</Text> : null}
        <Maps />
        <View >

          <View style={styles.ControlButtonContainer}>
            {state.isRecording === false ? <ControlButton title="Start" callback={boundActions.StartTrackRecording} />
              : <ControlButton title="Stop" callback={boundActions.StopTrackRecording} />}
            {(state.isRecording === false && state.location.length) ? <ControlButton title="Save"
              callback={SaveTrack} /> : null}

          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  MainScreenContainer: {
    marginTop: StatusBar.currentHeight,
    flexDirection: 'column'
  },
  ControlContainerLayout: {
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 20
  },
  ControlButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})



TrackCreateScreen.navigationOptions = () => {
  return {
    title:"Create",
    tabBarIcon: () => (
      <Ionicons name="add-circle" size={24} color="white" />
    ),
  };
};
export default withNavigationFocus(TrackCreateScreen);