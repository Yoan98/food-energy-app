# Food Energy WebView App

这是一个使用 Expo managed workflow 创建的 React Native 应用，支持在 iOS 和 Android 平台上运行。应用的主要功能是通过 WebView 加载指定的 URL，并且已经配置了相机和麦克风权限，支持网页中的摄像头功能（如 react-webcam）。

## 功能特性

- ✅ 跨平台支持（iOS + Android）
- ✅ WebView 加载任意 URL
- ✅ 相机权限配置（支持网页摄像头功能）
- ✅ 麦克风权限配置
- ✅ 友好的用户界面
- ✅ 错误处理和加载状态

## 已配置的权限

### iOS 权限
- `NSCameraUsageDescription`: 相机权限
- `NSMicrophoneUsageDescription`: 麦克风权限

### Android 权限
- `android.permission.CAMERA`: 相机权限
- `android.permission.RECORD_AUDIO`: 录音权限
- `android.permission.INTERNET`: 网络权限

## 运行项目

### 开发环境运行
```bash
# 在 iOS 模拟器中运行
npm run ios

# 在 Android 模拟器中运行
npm run android

# 在 Web 浏览器中运行
npm run web

# 使用 Expo Go 应用扫码运行
npx expo start
```

### 构建生产版本
```bash
# 安装 EAS CLI（如果还没安装）
npm install -g @expo/eas-cli

# 登录 Expo 账户
eas login

# 云端构建
# 构建预览版本（生成 APK）
eas build --platform android --profile preview

# 构建生产版本
eas build --platform android --profile production

# 构建 iOS 版本
eas build --platform ios --profile production

# 本地构建

```

## 使用说明

1. 启动应用后，在输入框中输入要加载的网页 URL
2. 点击"加载网页"按钮
3. 应用会在 WebView 中加载指定的网页
4. 如果网页需要使用摄像头（如 react-webcam），应用会自动请求相关权限
5. 点击"返回"按钮可以回到主界面输入新的 URL

## 技术栈

- React Native (Expo managed workflow)
- react-native-webview
- Expo SDK 53.0.0

## 注意事项

- 确保输入的 URL 是有效的网址
- 首次使用摄像头功能时，系统会弹出权限请求对话框
- 在真机上测试摄像头功能效果最佳