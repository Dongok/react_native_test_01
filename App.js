/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {Component,useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {Text,View,Image,Button,Div} from 'react-native';
import {Linking} from 'react-native';
import { GAMBannerAd,BannerAdSize,InterstitialAd, TestIds, AdEventType,AppOpenAd, RewardedAd,RewardedAdEventType } from 'react-native-google-mobile-ads';

function banner() {  
  return (  
    <GAMBannerAd
    unitId="ca-app-pub-3940256099942544/6300978111"
    //unitId="/6499/example/banner"
    sizes={[BannerAdSize.FULL_BANNER]}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
    />    
  );
}

// class App extends Component {  
//   render (){
//     return(
//     <View>
//             <Image
//         source={{
//           uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
//         }}
//         style={{width: 200, height: 200}}
//       />
//       <Text>Hello, I am your cat!</Text>            
//     </View>
//     )
//   }
// };

//const adUnitId = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-3940256099942544/5662855259';


const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3940256099942544/1033173712';

const adUnitIdReward = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-3940256099942544/5224354917';

const rewarded = RewardedAd.createForAdRequest(adUnitIdReward, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});



// const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });
// appOpenAd.load();
// appOpenAd.addAdEventListener(AdEventType.LOADED, function(){
//   console.log("load");
//   appOpenAd.show();
// });


const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [rewardLoaded, setRewardLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setRewardLoaded(true);
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  // No advert ready to show yet
  if (!rewardLoaded) {
    return null;
  }

  return (
    <View> 
      <Text>1
        2
        2
        3
        4
        5
      </Text>
      <Text>1
        2
        2
        3
        4
        5
      </Text>
      <Text>1
        2
        2
        3
        4
        5
      </Text>
      <Text>1
        2
        2
        3
        4
        5
      </Text>
    <Button
      title="Show Interstitial"
      onPress={() => {
        interstitial.show();
      }}
    />
<Text>1
        2
        2
        3
        4
        5
      </Text>
      <Text>1
        2
        2
        3
        4
        5
      </Text>
    <Button
      title="Show Rewarded Ad"
      onPress={() => {
        rewarded.show();
      }}
    />
    <Text>1
        2
        2
        3
        4
        5
      </Text>
      <Text>1
        2
        2
        3
        4
        5
      </Text>
    {banner()}
    <Text>1
        2
        2
        3
        4
        5
      </Text>
    {banner()}
    <Text>1
        2
        2
        3
        4
        5
      </Text>
    {banner()}
    </View>
  );
  // return (
  //   <View>
  //   <Image
  //     source={{
  //       uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  //     }}
  //     style={{width: 200, height: 200}}
  //     />
  //     <Text>Hello, I am your cat!</Text>            
  //     {banner()}
  //   </View>
  // );
}

// class App extends Component {
//   render() {
//     return (
//       <WebView
//         originWhitelist={['*']}
//         source={{
//           uri: 'https://qa-req-ad.cjenm.com/player/?test_ad_url=https://qa-req-ad.cjenm.com/video/v3/MN/MN002pre01',
//           //uri: 'https://googleads.github.io/googleads-ima-html5/vsi/'
//         }}
//         onError={(syntheticEvent) => {
//           const { nativeEvent } = syntheticEvent;
//           console.warn('WebView error: ', nativeEvent);
//         }}
//         //userAgent="Android 12 Mnet Plus/1.2.2"
//         onMessage={(event) => {
//           console.log("받은 데이터(React) : " + event.nativeEvent.data);
//           console.log(JSON.parse(event.nativeEvent.data))
//           Linking.openURL(JSON.parse(event.nativeEvent.data).data.url);
//         }}
//         allowsInlineMediaPlayback = {true}
//       />
//     );
//   }
// }
export default App;
