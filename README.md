# 🚦 Checkpoint

## Getting Started

To get started with this checkpoint, you will need to clone and install dependencies for the following repo:

```shell
git clone https://github.com/gSchool/react-router-checkpoint.git
cd react-router-checkpoint
yarn # or npm install
```

## Overview

Clone this repo on to your home computer: [https://github.com/gSchool/react-router-checkpoint](https://github.com/gSchool/react-router-checkpoint)

Your job is to hook up the routing for an authentication system that fits the following user stories. The following things have been created for you in advance:

- 3 Components - Login, Signup, and UserProfile
- Redux Actions
- Redux Reducers

The endpoint for the users that will be able to sign in are accessible at the `/people` endpoint in the [server you were provided with](https://github.com/gSchool/collective-api) at the beginning of the React course.

**NOTE:** The existing users' passwords are stored as plain text, specifically as `hello`, in the database for convenience, as well, so they are easily viewable in either Postico, `psql`, or your database tool of choice.

> NOTE: This was built with the [Reactstrap Component Library](https://reactstrap.github.io).

## User Stories

- As a user, when I navigate to `/`, I am automatically redirected to `/login`
- As a user, when I click the submit button and I entered the correct credentials, I am sent to `/profile`
- As a user, when I arrive at the profile page, I see the user's name, email, company, phone, and address, as well as a profile photo
- As a user, when I click on the submit button and I enter incorrect credentials, a message appears in the Login component that tells me I have entered incorrect credentials
- As a user, when I click the "Not a member?" link, I am redirected to `/signup`
- As a user, when I properly fill out the signup form and click the submit button, I am redirected to `/login` to log in with my newly created credentials
- As a user, when I improperly fill out the signup form and click the submit button, a message appears in the Signup component that tells me in some way I have filled out the form incorrectly
- As a user, after I log in, the "Login" and "Sign up" buttons in the navbar should be replaced with "Log out"
- As a user, when I click the "Log out" button in the navbar, I am taken back to `/login`


### !challenge
* type: project
* id: 8a2da85c-63a5-499c-8c3e-8a4397237d63
* title: React Router Checkpoint

##### !question
## Submit your work
Enter the URL to your Inbox app below:
##### !end-question

##### !placeholder
https://github.com/<yourname>/react-router-checkpoint
##### !end-placeholder

##### !explanation
Nice! 😀
##### !end-explanation
### !end-challenge
