import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const expenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Expenses (₹)",
        data: [5000, 7000, 4000, 9000],
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Revenue (₹)",
        data: [50000, 70000, 90000, 120000],
      },
    ],
  };

  return (
    <div
  style={{
    padding: "20px",
    fontFamily: "Arial",
    backgroundColor: "#f4f7f6",
    minHeight: "100vh",
  }}
>
      <h1
  style={{
    textAlign: "center",
    color: "#2e7d32",
    marginBottom: "30px",
  }}
>
  🌾 EH Smart Farm Dashboard
</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3>🌱 Farm Area</h3>
          <h2>15 Acres</h2>
          <p>Belgaum, Karnataka</p>
        </div>

        <div style={cardStyle}>
          <h3>🌾 Current Crop</h3>
          <h2>Sugarcane</h2>
          <p>Vegetative Stage</p>
        </div>

        <div style={cardStyle}>
          <h3>💚 Farm Health</h3>
          <h2>92%</h2>
          <p>Excellent Condition</p>
        </div>
        
        <div style={cardStyle}>
          <h3>👤 NRI Owner</h3>
          <h2>Nauman</h2>
          <p>Dubai, UAE</p>
        </div>

        <div style={cardStyle}>
  <h3>💰 Revenue</h3>
  <h2>₹3.2 Lakhs</h2>
  <p>This Season</p>
        </div>
        <div style={cardStyle}>
  <h3>🚜 Farm Manager</h3>
  <h1>Ramesh</h1>
  <p>On-Site Supervisor</p>
</div>

<div style={cardStyle}>
  <h3>📅 Harvest Date</h3>
  <h1>July 2026</h1>
  <p>Expected Harvest</p>
</div>
      </div>
<h2 style={{ marginTop: "30px" }}>📊 Farm Statistics</h2>

<div
  style={{
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "15px",
    }}
  >
    <div>
      <h3>🌱 Total Acres</h3>
      <p>15 Acres</p>
    </div>

    <div>
      <h3>💧 Water Availability</h3>
      <p>85%</p>
    </div>

    <div>
      <h3>🌾 Active Crop</h3>
      <p>Sugarcane</p>
    </div>

    <div>
      <h3>📅 Expected Harvest</h3>
      <p>July 2026</p>
    </div>

    <div>
      <h3>🚜 Farm Workers</h3>
      <p>12 Workers</p>
    </div>

    <div>
      <h3>💰 Estimated Profit</h3>
      <p>₹5.5 Lakhs</p>
    </div>
  </div>
</div>
      <h2 style={{ marginTop: "30px" }}>Crop Status</h2>
      <progress value="80" max="100"></progress>
      <p>Growth Progress: 80%</p>

      <h2>Weather</h2>
      <p>🌤 Temperature: 32°C</p>
      <p>💧 Humidity: 75%</p>

      <h2>Expenses Chart</h2>
      <Bar data={expenseData} />

      <h2 style={{ marginTop: "40px" }}>Revenue Chart</h2>
<Bar data={revenueData} />

{/* ADD THE PHOTO GALLERY HERE */}

<h2 style={{ marginTop: "40px" }}>Recent Farm Photos</h2>

<div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  }}
>
  <img
    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400"
    width="250"
    alt="farm"
  />

  <img
    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400"
    width="250"
    alt="farm"
  />

  <img
    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400"
    width="250"
    alt="farm"
  />
</div>

<h2 style={{ marginTop: "40px" }}>AI Farm Assistant</h2>

<div
  style={{
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "600px",
  }}
>
  <p><strong>User:</strong> How much revenue generated?</p>

  <p>
    <strong>EH Assistant:</strong> Total revenue generated this season is
    ₹3,20,000.
  </p>

  <p><strong>User:</strong> What crop is growing?</p>

  <p>
    <strong>EH Assistant:</strong> Sugarcane is currently in the vegetative
    growth stage.
  </p>
</div>
<h2 style={{ marginTop: "40px" }}>Farm Location</h2>

<div style={{ height: "400px", width: "100%" }}>
  <MapContainer
    center={[15.8497, 74.4977]}
    zoom={13}
    style={{ height: "100%", width: "100%" }}
  >
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker position={[15.8497, 74.4977]}>
      <Popup>
        EH Smart Farm <br /> 15 Acres
      </Popup>
    </Marker>
  </MapContainer>
</div>
<h2 style={{ marginTop: "40px" }}>Alerts</h2>
      <ul>
        <li>🟢 Irrigation Completed</li>
        <li>🟡 Pest Inspection Due</li>
        <li>🔴 Low Water Level</li>
      </ul>

      <h2>Harvest Updates</h2>
      <p>June 10 - Harvest Started</p>
      <p>June 20 - 50% Completed</p>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "15px",
  padding: "20px",
  width: "220px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  transition: "0.3s",
};

export default App;