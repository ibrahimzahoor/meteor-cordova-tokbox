// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.example.opentok',
  name: 'meteor-opentok',
  description: 'POC for opentok cordova',
  author: 'Ibrahim Zahoor',
  email: 'ibrahim@qbatch.com',
  website: 'http://ibrahimzahoor.me'
});
// Set up resources such as icons and launch screens.
// App.icons({
//   'iphone': 'icons/icon-60.png',
//   'iphone_2x': 'icons/icon-60@2x.png',
//   // ... more screen sizes and platforms ...
// });
// App.launchScreens({
//   'iphone': 'splash/Default~iphone.png',
//   'iphone_2x': 'splash/Default@2x~iphone.png',
//   // ... more screen sizes and platforms ...
// });
// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('cordova-plugin-opentokjs', {
//   apiKey: '45643482',
//   sessionId: '2_MX40NTY0MzQ4Mn5-MTQ3MjEzMDY4NTA2MH5TZmNhdEl4enVQb1R5RUJwcE5QWW5meFd-fg',
//   token: 'T1==cGFydG5lcl9pZD00NTY0MzQ4MiZzaWc9ZGYzNzRhOWYxZTcyMjRhMTQ3ZDVlZDdjMjFhODM1MzhkOWU3ZDNlMTpzZXNzaW9uX2lkPTJfTVg0ME5UWTBNelE0TW41LU1UUTNNakV6TURZNE5UQTJNSDVUWm1OaGRFbDRlblZRYjFSNVJVSndjRTVRV1c1bWVGZC1mZyZjcmVhdGVfdGltZT0xNDcyMTMwNzM1Jm5vbmNlPTAuNDgwNDIyNjAxMTAzNzgyNjUmcm9sZT1zdWJzY3JpYmVyJmV4cGlyZV90aW1lPTE0NzIxMzQzMzQ='
// });
//
// App.setPreference('OpentokClientVersion', 'v2')
