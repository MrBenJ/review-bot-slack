# ReviewBot

[![Greenkeeper badge](https://badges.greenkeeper.io/MrBenJ/review-bot-slack.svg)](https://greenkeeper.io/)

# A free and open source review bot for Slack

Tired of notifying your coworkers that they need to review your pull request? Hate all the noise in your #git channel on Slack?

Fear not lovely human. ReviewBot is here for you and your team.

ReviewBot cannot fix all of your problems, but it can make this one aspect of your workday much easier :).

This project was started with `typescript-babel-starter`.

This little project is still an active work in progress. don't mind the dust!

## Prerequisites

* A server to deploy this on.
* A MongoDB database with user, URL, and password
* Github repo(s) to watch

## Setting up

You will need the **server**, **Github Webhooks**, and **Slack integration** all set up for this to work.

### Server setup

1. On the server you'd like this to run on, clone this repository.
2. Install dependencies with `npm install`.
3. Build the project with `npm build`.
4. Run the server with `npm start`.

**Note:** Take note of the URL of your server, you'll need this for the Github Webhook Setup

### Github Webhook Setup

1. On the git repo you'd like to watch on PR's for, click **Settings** => **Webhooks**
2. Click **Add Webhook** at the top right corner
3. Enter your Github credentials if asked for them.
4. Enter the server URL from the **Server Setup** step and append `/review` to the end of it in the "Payload URL" field:

Examples
```
URL: http://192.168.0.1:3000
Payload URL: http://192.168.0.1:3000/review

URL: https://www.my-awesome-server.com
Payload URL: https://www.my-awesome-server.com/review
```

5. Under **Content type** choose `application/json`
6. Click the radio button next to **Let me select individual events** or **Send me everything**
7. If you choose **Let me select individual events**, make sure the **Pull Requests** option has been selected.

**Important:** This bot will only read "Pull Request" events, and ignore everything else.

### Slack Integration Setup

Coming soon! Need to figure out the other things first...


## Development Setup

### Development Requirements

* Node v8+
* A MongoDB database to connect to

### Setting up your local dev environment

1. Clone the repo
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory. You'll need to create the following values:

```sh
REVIEW_BOT_MONGODB_URL=YOUR.MONGODB.URL.HERE
REVIEW_BOT_MONGODB_USERNAME=YOUR.MONGODB.USERNAME.HERE
REVIEW_BOT_MONGODB_PW=YOUR.MONGODB.PASSWORD.HERE
REVIEW_BOT_SLACK_CREDENTIALS=YOUR.SLACK.INFO.HERE
```

### NPM Scripts

* **npm start** - Starts the application
* **npm run build** - Builds the application for production
* **npm run dev** - Starts the application in development mode.

### Technology Used

* Typescript
* Babel 7
* Express
* MongoDB
