# hire-tech-skills

**Authors**: Sang Lee

**Version**: Collection 0.0.0

## Overview

This is a personal project to explore LinkedIn API. The project aims to build a new capability and/or service for those coming from non-traditional tech backgrounds who are trying to get into the high tech industry and want to showcase their candidacy beyond what is currently available through the LinkedIn platform.

## Problem Domain

LinkedIn provides the dominant social-professional network (SPN) platform on the internet. However, I believe that it does not provide a compelling tool for non-traditional candidates trying to get into the tech sector.

### What is LinkedIn?
From [LinkedIn Help Page](https://www.linkedin.com/help/linkedin/answer/111663/what-is-linkedin-and-how-can-i-use-it-?lang=en)

_LinkedIn is the world's largest professional network on the internet. You can use LinkedIn to find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career. You can access LinkedIn from a desktop, LinkedIn mobile app, mobile web experience, or the LinkedIn Lite Android mobile app._

_A complete LinkedIn profile can help you connect with opportunities by showcasing your unique professional story through experience, skills, and education._

## Getting Started (local server)

1. Install packages: run `npm init`; then run `npm install` to get express, cors, pg, dotenv, superagent, fecha, pretty-print-json
2. Once in IDE: add `.env` file, include: `PORT` and `DATABASE_URL` info
3. Connect to database using psql: database name is associated with the `DATABASE_URL` info and the table name can be found in the `schema.sql` file
4. Start nodemon

## Architecture

This is a mobile first app. The client is build using [EJS](https://ejs.co/) and is styled using CSS. The backend is built using [node.js](https://nodejs.org/en/about/). It uses [Postgres SQL](https://www.postgresql.org/) for its database and [heroku](https://www.heroku.com/platform) as the cloud platform for deployment. The code is hosted on [GitHub](https://github.com/) on the team's [superSimpleAgent](https://github.com/jquaglia/super-simple-agent) repository.

## Change Log

**Timestamp - Description of activity**


## Dependencies

- beautify:
- cors:
- dotenv:
- ejs:
- express:
- fecha:
- pg:
- pretty-print-json:
- superagent:

## Database Schema

`DROP TABLE IF EXISTS XXXX;

CREATE TABLE XXXXX (
  id SERIAL PRIMARY KEY,
  url VARCHAR(255),
  time_stamp TIMESTAMP,
  code_name VARCHAR(255)
);`

## Credits and Collaborations



#### Web Resources:

+ Search error handling page gif:
`https://tenor.com/view/milk-mocha-milk-and-mocha-bears-bored-wait-gif-13418519`