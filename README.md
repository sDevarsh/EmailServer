# Email Scheduling API

This project implements a RESTful API for scheduling and sending emails at specified times. It supports both one-time and recurring email deliveries on a daily, weekly, monthly, or quarterly basis.

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
    userId="Mailtripid"
    password="MailtripPassword"
    email="yourmail"
4. Install Node Modules
    ```bash
      npm i
5. Use can use apis like 
    1. GET scheduled-emails/:id (get mail by id)
    2. POST /send-email-now (to send mail instantly)
    3. POST /scheduled-email (to schedule mail)
    4. GET /schedule-email(get All mails which are scheduled)
    5. DELETE /scheduled-emails/:id   (to delete scheduled mail)
   

