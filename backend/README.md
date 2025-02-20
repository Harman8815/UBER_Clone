# User Route Documentation

## Overview

This document provides an overview of the user routes in the backend, including the format of the user input and the expected responses.

## User Registration Route

### Endpoint

`POST /register`

### Description

This endpoint is used to register a new user. It validates the input data and creates a new user in the database if the input is valid.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Validation Rules

- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

### Responses

#### Success

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Error

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "message": "User already exists"
  }
  ```

## User Login Route

### Endpoint

`POST /login`

### Description

This endpoint is used to log in an existing user. It validates the input data and returns a JWT token if the input is valid.

### Request Body

The request body should be a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Validation Rules

- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Error

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## Get User Profile Route

### Endpoint

`GET /profile`

### Description

This endpoint is used to get the profile of the logged-in user. It requires authentication.

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
  ```

#### Unauthorized

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## User Logout Route

### Endpoint

`GET /logout`

### Description

This endpoint is used to log out the user. It requires authentication and adds the JWT token to a blacklist.

### Responses

#### Success

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Unauthorized

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

## Blacklist Token Logic

The blacklist token logic is implemented to invalidate JWT tokens upon user logout. The tokens are stored in a `BlacklistToken` collection with an expiration time of 24 hours.

### Blacklist Token Schema

```javascript
import mongoose from 'mongoose';

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});

const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);

export default BlacklistToken;
```

## Conclusion

This document provides a detailed overview of the user routes, including registration, login, profile retrieval, and logout, as well as the blacklist token logic. Ensure that the input data adheres to the validation rules to avoid errors.
