## Backend for full stack force

This is the backend for Task Management webapp.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- JavaScript
- MySQL
- Sequelize


### Usage

Clone the repository and run

```npm install```

To run the development server do

```npm run dev```

The server by default will run on port 3000. The port can be changed in `src/index.ts`

By default, the Sequelize will try to establish a connection MySQL running on port 3306 with the password 'changeme' as root. If you do not want this, change the port, username and password in `src/models/index.ts`. A database named 'taskmanagerdb' should be created using ```CREATE DATABASE taskmanagerdb;```. The database name can also be changed in the file above.

The api routes are configured to `HOSTNAME/api/auth` for interacting with users and `HOSTNAME/api/tasks` for interacting with tasks. 