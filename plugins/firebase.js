import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAAl1M88ecaI1sAZPn2V7Fv20KZ0FqPtE4',
  authDomain: 'nuxt-form-test.firebaseapp.com',
  databaseURL: 'nuxt-form-test.firebaseio.com',
  projectId: 'nuxt-form-test',
  storageBucket: 'nuxt-form-test.appspot.com'
};
if (!firebase.apps.length) firebase.initializeApp(config);
export const functions = firebase.functions();
