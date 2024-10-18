---
title: Import from other authenticators
description: How to import your TOTP codes from other authenticators
keywords: [casdoor, authenticator, import, other, authenticators, Google Authenticator, Microsoft Authenticator]
authors: [IZUMI-Zu]
---

## Introduction

The Casdoor Authenticator App supports importing TOTP codes from other authenticators such as Google Authenticator and Microsoft Authenticator. This feature allows you to seamlessly transfer your existing 2FA settings to the Casdoor Authenticator App, ensuring a smooth transition and continued security.

## Migration from Google Authenticator

If you are currently using Google Authenticator for your TOTP codes, you can easily migrate your TOTP data to the Casdoor Authenticator App. To do this, follow these steps:

### Step 1: Export TOTP data from Google Authenticator

Select the "Transfer Accounts" option in the menu of Google Authenticator and choose the accounts you want to transfer. Then, click the "Export" button to generate a QR code.

![Google Authenticator Export](/img/configuration/import-from-other-authenticators/google-export.png)

### Step 2: Import TOTP data to the Casdoor Authenticator App

In the Casdoor Authenticator App, scan the QR code generated by Google Authenticator to import your TOTP data. The app will automatically add the accounts to your Casdoor Authenticator App, allowing you to manage your TOTP codes securely.

![Import to Casdoor Authenticator](/img/configuration/import-from-other-authenticators/import-google-totp.gif)

## Migration from Microsoft Authenticators

If you are currently using Microsoft Authenticator for your TOTP codes, you can easily migrate your TOTP data to the Casdoor Authenticator App. To do this, follow these steps:

### Step 1: Export TOTP data from Microsoft Authenticator

The Microsoft Authenticator app does not provide an export feature. If you want to export your TOTP data, you can use the following steps to export the SQLite database and then import it to the Casdoor Authenticator App.

1. Export the SQLite database (required root access)

   - The database is located at `/data/data/com.azure.authenticator/databases/PhoneFactor`.
   - Copy the database file to your device's storage.

2. Import the SQLite database to the Casdoor Authenticator App

   - Open the Casdoor Authenticator App.
   - Click the "+" button to add a new account.
   - Select "Import from other app" and then select Microsoft Authenticator.
   - There will be a pop-up file picker. Select the database file you exported in Step 1.
   - The app will automatically add the accounts to your Casdoor Authenticator App, allowing you to manage your TOTP codes securely.

![Import to Casdoor Authenticator](/img/configuration/import-from-other-authenticators/import-totp.gif)