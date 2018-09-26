# ReviewBot
# A free and open source review bot for Slack

Tired of notifying your coworkers that they need to review your pull request? Hate all the noise in your #git channel on Slack?

Fear not lovely human. ReviewBot is here for you and your team.

ReviewBot cannot fix all of your problems, but it can make this one aspect of your workday much easier :).

This project was started with `typescript-babel-starter`.

This is still in progress. don't mind the dust!

## Prerequisites

* A server to deploy this on.
* A MongoDB database with user, URL, and password

## Development Setup

### Development Requirements

* Node v8+
* A MongoDB database to connect to

### Setting up your local dev environment

1. Clone the repo
2. Install dependencies with `npm i`
3. Create a `.env` file in the root directory. You'll need to create the following values:

```sh
REVIEW_BOT_MONGODB_URL=YOUR.MONGODB.URL.HERE
REVIEW_BOT_MONGODB_USERNAME=YOUR.MONGODB.USERNAME.HERE
REVIEW_BOT_MONGODB_PW=YOUR.MONGODB.PASSWORD.HERE
```

### Technology Used

* Typescript
* Babel 7
* Express
* MongoDB
