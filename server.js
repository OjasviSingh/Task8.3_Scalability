const mqtt = require("mqtt");

// Define the MQTT broker connection for the server
const brokerUrl = "mqtt://broker.hivemq.com:1883";
const serverClient = mqtt.connect(brokerUrl);

// Function to simulate data from a drone and publish it to the MQTT broker
function simulateDroneData(droneId, category, data) {
  const topic = `drones/${droneId}/${category}`;
  serverClient.publish(topic, data);
  console.log(`Published data to topic: ${topic}, Data: ${data}`);
}

// Connect to the MQTT broker for the server
serverClient.on("connect", () => {
  console.log("Connected to MQTT broker as server");

  // Simulate sending data from drones

  // Simulate battery levels of a drone
  simulateDroneData("1234", "battery", "75%");

  // Simulate speed of a Short distance drone
  simulateDroneData("5678", "speed", "30 m/s");

  // Simulate latitude and longitude values of a Long distance drone
  simulateDroneData(
    "9012",
    "lat_long",
    "Latitude: 42.1234, Longitude: -71.5678"
  );
});

// Handle errors
serverClient.on("error", (err) => {
  console.error("Error occurred on the server MQTT client:", err);
});
