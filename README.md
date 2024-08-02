# Email Scheduling API

This project implements a RESTful API for scheduling and sending emails at specified times. It supports both one-time and recurring email deliveries on a daily, weekly, monthly, or quarterly basis.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)

## Features

- **Email Scheduling**: Schedule emails to be sent at a specific date and time.
- **Recurring Emails**: Set up recurring emails to be sent daily, weekly, monthly, or quarterly.
  - Daily: Specify the time of day.
  - Weekly: Specify the day of the week and the time.
  - Monthly: Specify the day of the month and the time.
  - Quarterly: Specify the day of the quarter and the time.
- **Email Details**: Include recipient email address, subject, body, and optional attachments.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB Atlas**: Cloud-hosted NoSQL database.
- **Nodemailer**: Module for sending emails.
- **Mailtrap**: Email sandbox service for safe email testing.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mailtrap](https://mailtrap.io/) account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/email-scheduling-api.git
   cd email-scheduling-api
2. Make env file:
  ```bash
MongoLink="your link"
userId="id"
password="id"
email="yourmail"
