import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  Alert
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const url = 'https://food-energy.vercel.app';

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webview}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          Alert.alert('加载错误', '无法加载网页，请检查网络连接');
          console.warn('WebView error: ', nativeEvent);
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          Alert.alert('网络错误', `HTTP错误: ${nativeEvent.statusCode}`);
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
