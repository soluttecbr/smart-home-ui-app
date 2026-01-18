import { useState } from "react";
import { setRelay } from "../services/esp32";

export default function DeviceCard({ device }) {
  const [isOn, setIsOn] = useState(device.status);
  const [loading, setLoading] = useState(false);

  async function toggleDevice() {
    if (loading) return;

    const newState = isOn ? 0 : 1;
    setLoading(true);

    const success = await setRelay({
      id: device.id,
      state: newState,
    });

    if (!success) { // Revert state on failure
      setIsOn(!isOn);
    }

    setLoading(false);
  }

  return (
    <div className="device-card">
      <div className="device-info">
        <h3>{device.name}</h3>
        <span>{device.room}</span>

        <p className={`status ${isOn ? "on" : "off"}`}>
          {isOn ? "Ligado" : "Desligado"}
        </p>
      </div>

      <button
        className={`power-btn ${isOn ? "on" : "off"}`}
        onClick={toggleDevice}
        disabled={loading}
        aria-label="Ligar ou desligar dispositivo"
      >
        {loading ? "…" : "⏻"}
      </button>
    </div>
  );
}

