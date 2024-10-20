---
title: Build Configuration
description: Casdoor App Build Configuration
keywords: [casdoor, authenticator, configuration, build, android, ios]
authors: [IZUMI-Zu]
---

## Build Configuration for Casdoor Authenticator App

This guide provides instructions on how to configure and build the Casdoor Authenticator App for both Android and iOS platforms.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, macOS only)
- [Android Studio](https://developer.android.com/studio) (for Android development)
  - Make sure to install the Android NDK (Native Development Kit) through the SDK Manager

### General Configuration

1. Clone the Casdoor Authenticator App repository:

   ```bash
   git clone https://github.com/casdoor/casdoor-app.git
   cd casdoor-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Troubleshooting

- If you encounter any build errors, ensure all dependencies are up to date and compatible.
- For iOS, try cleaning the build folder in Xcode (Product > Clean Build Folder) if you face any issues.
- For Android, you can try cleaning the project with `./gradlew clean` in the `android` directory.

By following these configuration steps, you should be able to successfully build the Casdoor Authenticator App for both Android and iOS platforms.
