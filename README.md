# 🚦 Checkpoint

## Getting Started

To get started with this checkpoint, you will need to clone and install dependencies for the following repo:

```shell
git clone https://github.com/gSchool/react-router-checkpoint.git
cd react-router-checkpoint
yarn # or npm install
```

## Overview

Your job is to hook up the routing for an authentication system that fits the following user stories. The following things have been created for you in advance:

- 3 Components - Login, Signup, and UserProfile
- Redux Actions
- Redux Reducers

The endpoint for the users that will be able to sign in are accessible at the `/users` endpoint in the server you were provided with at the beginning of the React course. 

**NOTE:** The existing users' passwords are stored as plain text in the database for convenience, as well, so they are easily viewable in either Postico, `psql`, or your database tool of choice.

## User Stories

### Base goals

- As a user, when I navigate to `/`, I am automatically redirected to `/login`
- As a user, when I click the submit button and I entered the correct credentials, I am sent to `/profile`
- As a user, when I arrive at the profile page, I see the user's name and username, as well as a profile photo
- As a user, when I click on the submit button and I enter incorrect credentials, a message appears in the Login component that tells me I have entered incorrect credentials
- As a user, when I click the "Not a member?" link, I am redirected to `/signup`
- As a user, when I properly fill out the signup form and click the submit button, I am redirected to `/login` to log in with my newly created credentials
- As a user, when I improperly fill out the signup form and click the submit button, a message appears in the Signup component that tells me in some way I have filled out the form incorrectly
- As a user, after I log in, the "Login" and "Sign up" buttons in the navbar should be replaced with "Log out"
- As a user, when I click the "Log out" button in the navbar, I am taken back to `/login`