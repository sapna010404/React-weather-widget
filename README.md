# Weather App 🌤️

A simple Node.js + Express-based weather app that uses the **OpenWeatherMap API** to fetch current weather information for any city. Built using **EJS templating**, **CSS styling**, and served through a clean Express server.

---

## 🔧 Features

- Search for weather by city name
- Real-time temperature, condition, and weather icon
- Responsive and minimal UI with EJS + CSS
- Fetch data from OpenWeatherMap using Axios

---

## 📁 Project Structure

```
zip weather/
├── app.js
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   └── partials/
│       └── header.ejs
└── .env (you'll create this)
```

---

## 🚀 How to Run

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd zip\ weather
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your `.env` file
Create a `.env` file in the root of the project:
```env
API_KEY=your_openweathermap_api_key_here
```

### 4. Run the server
```bash
node app.js
```

Then open your browser and go to `http://localhost:8080`

---

## 🧠 Technologies Used

- Node.js
- Express.js
- Axios
- EJS (Embedded JavaScript Templates)
- CSS

---

## 🌍 API Source

Data is powered by [OpenWeatherMap](https://openweathermap.org/api)

---

## 📌 Notes

- You must sign up at OpenWeatherMap and generate an API key to use this app.
- Don't forget to add `.env` to your `.gitignore` file.

