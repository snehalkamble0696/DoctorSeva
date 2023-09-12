import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import ClinicNavigator from './src/Navigation/MainNavigator';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import AppointmentReducer from './src/store/reducers/appointmentReducer';
import AuthReducer from './src/store/reducers/AuthReducer';
import PatientReducer from './src/store/reducers/PatientReducer';
// import ReduxThunk from 'redux-thunk';



const rootReducer = combineReducers({
  appointment:AppointmentReducer,
  auth:AuthReducer,
  patient:PatientReducer,
});

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk)); 
export default function App() {
  return (
    // <Provider store={store}>
    // <View style={styles.screen}>
    <ClinicNavigator />
    
    // </View>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
});
