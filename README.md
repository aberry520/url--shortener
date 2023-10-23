# CrudCo URL Shortener

## Requirements
- Users can submit a long URL.
- URLs are saved in a database.
- Unique IDs are generated for each URL.
- The short url is available via a list when a user logs in.

## Tech Stack

- PostgreSQL - Database
- Django + Django REST Framework + SimpleJWT - Backend
- React - Frontend

## Workflow
### Frontend
- User submits URL
- URL is shortened 
- Long and Short URL are saved with user ID associated
- User gets list of URL titles with the links to short URL

### UI
        Require: Title and URL
        Optional: Short URL (limited characters), generated automatically if not provided

### Backend
- Short URL is is sent to API
- API takes ID of short URL to find long version
- Site is redirected to the long URL after clicking the short URL link

## Data Models

### Tables
- User's
    - ID -> Primary Key (auto)
    - Username
    - Password
    - Token
- URLs
    - ID -> Primary Key (auto)
    - Title
    - Long URLs
    - Short URLs
    - User ID - Foreign

### Relationships
URLs (many) -> User's (one) 