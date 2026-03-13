# Happy Thoughts API

This is a backend API for the Happy Thoughts project. It is built with Express and MongoDB and works as a replacement for the original Technigo API.

## The project

The API lets a user:

- see the latest thoughts
- post a new thought
- like a thought

## Routes

### `GET /thoughts`

Returns a maximum of 20 thoughts, sorted with the newest thoughts first.

### `POST /thoughts`

Creates a new thought.

Example body:

```json
{
  "message": "This is a happy thought"
}
Deployed version
happy-thoughts-api-jw.netlify.app

Author
Created as part of the Technigo Backend course.