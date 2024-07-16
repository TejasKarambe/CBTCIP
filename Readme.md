
# EventPlanner360

![EventPlanner360](https://images.unsplash.com/photo-1566843971072-feb2671ed2d9?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)

EventPlanner360 is an all-in-one event management platform enabling users to plan, organize, and oversee diverse events like conferences, weddings, and parties. With features for event creation, guest list management, budget tracking, vendor coordination, and scheduling, users can streamline planning efforts. Personalized event pages, invitation management, and RSVP tracking enhance user experience. Integration with payment gateways facilitates ticket sales and online transactions, fostering seamless event execution and collaboration among organizers, vendors, and attendees.

## Features

- **Event Creation**: Create and customize events with ease.
- **Guest List Management**: Manage guest lists and track RSVPs.
- **Budget Tracking**: Keep track of your event budget, expenses, and remaining funds.
- **Vendor Coordination**: Coordinate with vendors and manage vendor details.
- **Event Schedule Management**: Organize event schedules and activities.
- **Invitation Management**: Send and manage event invitations.
- **Ticket Sales**: Sell tickets and handle online transactions.
- **Personalized Event Pages**: Create and share personalized event pages.

## Demo

Check out the [live demo](#) of EventPlanner360.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Backend Setup

1. Clone the repository:
```
   git clone https://github.com/your-username/eventplanner360.git
   cd eventplanner360
```

2. Install dependencies:
```
   cd eventplanner360-backend
   npm install
```

3. Configure environment variables:
   Create a `.env` file in the `eventplanner360-backend` directory and add the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd ../eventplanner360-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the application to create and manage events.

## File Structure

```
eventplanner360/
├── eventplanner360-backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── eventplanner360-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── BudgetTrackingPage.js
│   │   │   ├── CreateEventPage.js
│   │   │   ├── EventSchedulePage.js
│   │   │   ├── GuestListPage.js
│   │   │   ├── HomePage.js
│   │   │   └── VendorCoordinationPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── package.json
│   └── README.md
```

## Screenshots

### Home Page
![Home Page]<img src="./home.png">

### Event Schedule Page
![Event Schedule]<img src="./event.png">

### Budget Tracking Page
![Budget Tracking]<img src="./buget.png">

### Event Schedule Page
![Event Schedule] <img src="./schedule.png">
## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact us at [info@eventplanner360.com](mailto:info@eventplanner360.com).

