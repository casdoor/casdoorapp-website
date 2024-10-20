---
title: Overview
description: Casdoor App Overview
keywords: [casdoor, authenticator]
authors: [IZUMI-Zu]
---

## Introduction

The Casdoor Authenticator App is a mobile application designed to enhance the security and user experience of the Casdoor ecosystem. As part of Casdoor's comprehensive Identity Access Management (IAM) and Single-Sign-On (SSO) platform, this app provides a convenient and secure way to manage Two-Factor Authentication (2FA) for Casdoor users.

## What is Casdoor?

Casdoor is a UI-first IAM/SSO platform that supports various authentication protocols and methods, including OAuth 2.0, OIDC, SAML, CAS, LDAP, SCIM, WebAuthn, TOTP, MFA, RADIUS, Google Workspace, Active Directory, and Kerberos. It offers a web-based UI for management and supports localization in 10+ languages.

## What is Casdoor Authenticator App?

The Casdoor Authenticator App is a dedicated mobile application that complements the Casdoor platform by providing robust Two-Factor Authentication capabilities. It serves as a secure, user-friendly tool for generating Time-based One-Time Passwords (TOTP), enabling users to add an extra layer of security to their Casdoor-managed accounts. This app is designed to work seamlessly with the Casdoor ecosystem while also offering flexibility for use with other TOTP-compatible services.

## Casdoor Authenticator App Features

1. **TOTP Support**: Generates Time-based One-Time Passwords (TOTP) for enhanced login security.
2. **Offline Functionality**: Provides TOTP codes without requiring an internet connection.
3. **Secure Backup**: Supports syncing TOTP data to the Casdoor server for secure backups.
4. **User-Friendly Interface**: Offers a simple and intuitive mobile app interface for managing 2FA.
5. **Cross-Platform**: Available for both Android and iOS devices.
6. **Migration Support**: Allows easy migration of TOTP data from other authenticator apps like Google Authenticator.

## How It Works

1. **Installation**: Users download the Casdoor Authenticator App from official sources or app stores.
2. **Server Configuration**: (Optional) Administrators enable TOTP account storage in the Casdoor server.
3. **Login**: Users log in to the app using their Casdoor account credentials.
4. **TOTP Management**: Users can add, view, and manage their TOTP codes directly from the app.
5. **Authentication**: During login to Casdoor-enabled applications, users can use the app to generate TOTP codes for 2FA.

## Integration with Casdoor Ecosystem

The Casdoor Authenticator App seamlessly integrates with the broader Casdoor platform, providing:

- Enhanced security for Casdoor-managed applications
- Consistent user experience across web and mobile interfaces
- Centralized management of authentication methods for administrators

## Getting Started

To begin using the Casdoor Authenticator App:

1. Download the app from the official sources or app stores.
2. Ensure your Casdoor server has MFA accounts enabled (if using server-side storage).
3. Log in to the app using your Casdoor credentials.
4. Start adding and managing your TOTP codes for various accounts.

For detailed instructions on setup, usage, and migration from other authenticator apps, please refer to our comprehensive documentation.
