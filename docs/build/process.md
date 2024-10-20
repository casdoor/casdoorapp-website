---
title: Build Process
description: Casdoor App Build Process
keywords: [casdoor, authenticator, build, process]
authors: [IZUMI-Zu]
---

## Introduction

This document outlines the process for building the Casdoor Authenticator App from source code. Before starting, ensure you have completed the [configuration](/docs/build/configuration) step.

## Prerequisites

Before building the app, make sure you have the following installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- For Android: Android Studio and Android SDK
- For iOS: Xcode (Mac only)

## Building the App

### For Development (React Native App)

We use Expo to develop and test the React Native app:

```bash
npm install
npx expo start --clear
```

This will start the Expo development server. You can then run the app on:

- An iOS simulator (Mac only)
- An Android emulator
- Your physical device using the Expo Go app

### For Android

To build the Android App APK:

```bash
npm install
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```

The APK file will be in the `android/app/build/outputs/apk/release/` directory.

For debugging the native Android App:

```bash
npx expo prebuild --platform android
cd android && ./gradlew assembleDebug
```

Find the debug APK in the `android/app/build/outputs/apk/debug/` directory.

To run the development version:

1. Install the APK on your Android device
2. Start the JS server with:

   ```bash
   npx expo start --android
   ```

### For iOS

To build the iOS app:

```bash
npm install
npx expo prebuild --platform ios
npx expo run:ios --configuration Release
```

Note: iOS builds require a Mac with Xcode installed.

## Troubleshooting

- If you encounter "Command not found" errors, ensure that Node.js and npm are correctly installed and added to your system's PATH.
- For Android build issues, make sure your ANDROID_HOME environment variable is set correctly.

For more detailed troubleshooting, refer to the [React Native documentation](https://reactnative.dev/docs/troubleshooting) and [Expo documentation](https://docs.expo.dev/guides/adopting-prebuild/#prebuild).
