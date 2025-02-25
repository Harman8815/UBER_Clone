# UBER Client Application Documentation

## Pages Overview

### 1. Home Page (`/`)

- **File**: `src/pages/home.jsx`
- **Description**: The landing page of the application. It provides a brief introduction and a "Continue" button that navigates to the login page.
- **Components**:
  - Background image
  - Title "UBER"
  - "Get Started with Uber" section with a "Continue" button

### 2. User Signup Page (`/signup`)

- **File**: `src/pages/UserSignup.jsx`
- **Description**: Allows new users to create an account by providing their first name, last name, email, and password.
- **Components**:
  - Background image with white overlay
  - Signup form with fields for first name, last name, email, and password
  - "Sign Up" button
  - Link to the login page for existing users

### 3. User Login Page (`/login`)

- **File**: `src/pages/UserLogin.jsx`
- **Description**: Allows existing users to log in by providing their email and password.
- **Components**:
  - Background image with white overlay
  - Login form with fields for email and password
  - "Login" button
  - Link to the signup page for new users
  - Link to the captain login page

### 4. Captain Signup Page (`/captain-signup`)

- **File**: `src/pages/CaptainSignup.jsx`
- **Description**: Allows new captains to create an account by providing their first name, last name, email, and password.
- **Components**:
  - Background image with white overlay
  - Signup form with fields for first name, last name, email, and password
  - "Sign Up" button
  - Link to the captain login page for existing captains

### 5. Captain Login Page (`/captain-login`)

- **File**: `src/pages/CaptainLogin.jsx`
- **Description**: Allows existing captains to log in by providing their email and password.
- **Components**:
  - Background image with white overlay
  - Login form with fields for email and password
  - "Login" button
  - Link to the captain signup page for new captains
  - Link to the user login page

## Context

### User Context

- **File**: `src/context/userContext.jsx`
- **Description**: Provides user data context to manage user state across the application.
- **Components**:
  - `UserDataContext` for managing user state
  - `UserContext` component to wrap the application and provide context

## Main Application

### App Component

- **File**: `src/App.jsx`
- **Description**: Main application component that defines the routes for the application.
- **Components**:
  - Routes for home, user login, user signup, captain login, and captain signup pages

### Main Entry Point

- **File**: `src/main.jsx`
- **Description**: Entry point of the application that renders the `App` component within the `UserContext` and `BrowserRouter`.
- **Components**:
  - `StrictMode` for highlighting potential problems
  - `UserContext` for providing user data context
  - `BrowserRouter` for handling routing
  - `App` component containing the main routes

## Diagrammatic View

```mermaid
flowchart TD
    %% Class Definitions
    classDef page fill:#F0F8FF,stroke:#4C956C,stroke-width:2px,color:#1D3557,rx:8,ry:8;
    classDef context fill:#FFEFD5,stroke:#FF7F51,stroke-width:2px,color:#6A0572,rx:10,ry:10;
    classDef navigation stroke-dasharray:4 4,stroke:#A8DADC,color:#457B9D,stroke-width:1.5px;

    %% Main Structure
    subgraph Entry[Entry Point]
        A[main.jsx]:::page
        A --> B[App.jsx]:::page
    end

    subgraph Pages[App Pages]
        B --> C[Home.jsx]:::page
        B --> D[UserLogin.jsx]:::page
        B --> E[UserSignup.jsx]:::page
        B --> F[CaptainLogin.jsx]:::page
        B --> G[CaptainSignup.jsx]:::page
    end

    subgraph Context[Context Provider]
        H[UserContext.jsx]:::context
    end

    %% Context Connections
    D --> H
    E --> H
    F --> H
    G --> H

    %% Navigation Paths
    D -.->|Navigate| E:::navigation
    D -.->|Navigate| F:::navigation
    F -.->|Navigate| G:::navigation
    F -.->|Navigate| D:::navigation

```

