import Header from "../components/Header";
import DeviceCard from "../components/DevicesCard";
import Footer from "../components/Footer";
import { devices } from "../data/devices";

export default function Home() {
  return (
    <div className="app">
      <Header />

      <section className="content">
        {devices.map(device => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </section>

      <Footer />    
    </div>
  );
}
