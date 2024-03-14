This web application was created for academic purposes and sustains the functionality of Event Planning. The users can input the data of an event like the name, time, place, price of the event and update or save it. For some technical reasons deploying the application was not possible, however it still can serve on localhost:3000 in your browser when run with the terminal.

Application dependencies
1. express: Web framework for Node.js
2. body-parser: Middleware for parsing incoming request bodies
3. pug: Templating engine for Node.js
4. express-validator: Middleware for validating request data
5. axios: Promise-based HTTP client for making API requests
6. moment.js: Library for manipulating dates and times
7. tempus-dominus: JavaScript library for creating datetime pickers
8. Bootstrap: CSS framework for responsive design

GitHub repository link: https://github.com/00017024/CourseworkProject

00017024.WEB/
├── controllers/
│   ├── api/
│   │   └── ticket.js  // Ticket service logic
│   └── web/
│       └── home.js    // Web route controller for home page
├── data/
│   └── mock_db.json  // Mock data for tickets (for development)
├── routes/
│   ├── api/
│   │   └── ticket.js   // API route definitions for tickets
│   └── web/
│       └── home.js     // Web route definitions for home page
├── services/
│   └── ticket.js        // Business logic for ticket operations
├── validators/
│   └── ticket.js        // Validation rules for ticket data
├── views/
│   ├── head.pug         // Base HTML template for all views
│   ├── home/
│   │   ├── add_update.pug  // Template for adding and updating tickets
│   │   └── index.pug      // Template for displaying the list of tickets
├── app.js                // Main application entry point
└── package.json          // Project dependencies and scripts