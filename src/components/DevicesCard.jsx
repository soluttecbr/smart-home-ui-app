import { useState } from "react";
import { setRelay } from "../services/esp32";
import { IoIosPower } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";

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

        <p className={`status ${isOn && device.type !== "sensor" ? "on" : "off"}`}>
          {device.type === "sensor" ? device.status : isOn ? "Ligado" : "Desligado"} 
        </p>
      </div>
      {device.type !== "sensor" ?(
        <button
          className={`power-btn ${isOn ? "on" : "off"}`}
          onClick={toggleDevice}
          disabled={loading}
          aria-label="Ligar ou desligar dispositivo"
        >
          {loading ? "…" : <IoIosPower size={22}/>}
        </button>
      ) : <button  className={'status-offline ' + (device.status === 'online' ? 'on' : 'off')}>
             <FiAlertCircle size={22} />
          </button>}
    </div>
  );
}

