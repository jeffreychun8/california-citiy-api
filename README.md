California City Air Quality Monitor
A web application that displays real-time and forecasted Air Quality Index (AQI) data for California cities using the AirNow API.
Features

Real-time AQI Data: View current air quality conditions for Ozone (O3) and PM2.5
Forecast Data: See tomorrow's predicted AQI values
Visual Indicators: Color-coded AQI bars with tooltips showing air quality categories
Multiple Cities: Add and monitor multiple California cities simultaneously
Responsive Design: Works on desktop and mobile devices
Live Updates: Current date and time display with automatic refresh

Screenshots
The application displays a clean, modern interface with:

City selection dropdown
Real-time AQI data with color-coded indicators
Forecast information for the next day
Easy city management with delete functionality

Installation

Clone or download the project files:
airQuality.html
airQuality.css
air-quality.js
Open airQuality.html in a web browser
No additional setup required - the application uses the AirNow API directly

Usage

Select a City: Use the dropdown menu to choose from 150+ California cities
Add City: Click the "Add City" button to add the selected city to your monitoring list
View Data: Each city card shows:

Current AQI for Ozone (O3) and PM2.5
Tomorrow's forecasted AQI values
Color-coded indicator bars with quality categories


Remove Cities: Click the ✖ button on any city card to remove it
Tooltips: Hover over the colored AQI bars to see quality descriptions

AQI Color Scale
The application uses EPA standard AQI colors:
AQI RangeColorCategory0-50GreenGood51-100YellowModerate101-150OrangeUnhealthy for Sensitive Groups151-200RedUnhealthy201-300PurpleVery Unhealthy301+MaroonHazardous
Supported Cities
The application includes 150+ California cities and regions, including:
Major Cities:

San Francisco, Oakland, San Jose
Los Angeles, Sacramento, San Diego
Fresno, Bakersfield, Stockton

Regions:

Bay Area communities
Central Valley cities
Southern California areas
Mountain and desert regions
National parks and rural areas

Technical Details
API Integration

Uses the AirNow API for real-time and forecast data
Fetches current observations and next-day forecasts
Handles both Ozone (O3) and PM2.5 measurements

Technologies Used

HTML5: Structure and layout
CSS3: Styling with responsive design
JavaScript (ES6+): API integration and dynamic content
Fetch API: Asynchronous data retrieval

File Structure
├── airQuality.html    # Main HTML file
├── airQuality.css     # Stylesheet
├── air-quality.js     # JavaScript functionality
└── README.md          # This file
Browser Compatibility

Chrome (recommended)
Firefox
Safari
Edge
Mobile browsers

API Information
This application uses the AirNow API to retrieve air quality data. The API provides:

Current AQI observations by zip code
Next-day AQI forecasts
Data for Ozone (O3) and PM2.5 parameters

Limitations

Data availability depends on monitoring stations in each area
Some cities may not have current or forecast data available
API rate limits may apply for excessive requests
Requires internet connection for real-time data

Error Handling
The application includes error handling for:

Network connectivity issues
API service unavailability
Missing or incomplete data
Duplicate city additions

Responsive Design
The application is optimized for various screen sizes:

Desktop: Full-width layout with side-by-side elements
Tablet: Adjusted spacing and button sizes
Mobile: Stacked layout with full-width buttons

Future Enhancements
Potential improvements could include:

Historical data charts
Air quality alerts and notifications
Additional pollutant measurements (CO, SO2, NO2)
Geolocation-based city detection
Data export functionality
Extended forecast periods

Contributing
To contribute to this project:

Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request

License
This project is open source. Please check with the AirNow API for their terms of service regarding data usage.
Support
For issues or questions:

Check the browser console for error messages
Verify internet connectivity
Ensure JavaScript is enabled in your browser
Try refreshing the page if data doesn't load


Note: This application is for informational purposes only. For official air quality advisories and health recommendations, consult local environmental agencies.
