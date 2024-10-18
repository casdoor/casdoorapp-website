---
title: Connect Casdoor Server
description: How to connect Casdoor Server to the Casdoor Authenticator App
keywords: [casdoor, authenticator, connect, server]
authors: [IZUMI-Zu]
---

## Introduction

Casdoor is an open-source identity management platform that provides authentication, authorization, and user management services. It supports various protocols like OAuth, SAML, and OpenID Connect, making it a versatile choice for securing your applications.

## Prerequisites

Before proceeding, ensure you have the following:

- A Casdoor server instance
- The Casdoor Authenticator App installed on your device
- The Casdoor server URL and credentials

## Step 1: Enable Totp Account storage in Casdoor Server

Before using the Casdoor Authenticator App, you need to make sure that the MFA accounts setting is enabled in the Casdoor server.

![Server MFA Setting](/img/configuration/connect-casdoor-server/mfa-account-setting.png)

## Step 2: Configuring the Casdoor Authenticator App

1. Open the Casdoor Authenticator App on your device.
2. On the main screen, tap the "Login" button.
3. You will be presented with three options to connect to your Casdoor server:

   a. Manually enter server details:
   - Tap "Enter Server Manually"
   - Input the Casdoor server URL and other required information
   - Log in with your Casdoor account

   ![Manual Configuration](/img/configuration/connect-casdoor-server/manual-config.png)

   b. Scan QR code:
   - Tap "Scan QR Code"
   - Use your device's camera to scan the QR code provided by your Casdoor server
   - The QR code is located in the "My Account" -> "MFA accounts" table section of the Casdoor server
   - The app will automatically connect to the server

   ![QR Code Scan](/img/configuration/connect-casdoor-server/qr-code-scan.png)

   c. Try demo server:
   - Tap "Try Demo Server" to connect to a pre-configured demo instance
   - This option is useful for testing the app's functionality without setting up your own server

4. Now, you can view your TOTP codes and manage your 2FA settings directly from the Casdoor Authenticator App like other authenticator apps.

## Troubleshooting

If you encounter any issues while connecting:

- Ensure your Casdoor server is running and accessible
- Double-check the server URL and your credentials
- Verify that your device has an active internet connection
