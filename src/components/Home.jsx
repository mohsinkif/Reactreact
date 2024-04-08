import { Marker, MapContainer, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import Navbar from "./Navbar";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

async function Fetchdata() {
  const data = await axios.get('http://127.0.0.1:8001/fetch_coordinates');
  return data;
}

const queryClient = new QueryClient();

export default function Home() {
  const { data, isSuccess } = useQuery("mydata", Fetchdata);

  return (
    <>
<div className="">

    <QueryClientProvider client={queryClient}>
      <div id="home">
      <MapContainer
  style={{ width: "100vw", height: "100vh" }}
  attributionControl={false}
  center={[30.93925700144764, 69.5339985983349]}
  zoom={12}
  zoomControl={true} 
  markerZoomAnimation={true}
  scrollWheelZoom={true}
>
          <HeatMap />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[30.93925700144764, 69.5339985983349]}>
            <Popup>This is marker</Popup>
          </Marker>
          <LocationMarker />
        </MapContainer>
      </div>
    </QueryClientProvider>
    </div>

    </>
  );
};

function HeatMap() {
  const { data, isSuccess } = useQuery("mydata", Fetchdata);
  const map = useMap();
  console.log(data && data.data)
  if (!isSuccess) {
    return <div>Error loading data</div>;
  }

  const addressPoints = data.data.map(function (p) {
    return [p.latitude, p.longitude, p.opacity];
  });

  var heat = L.heatLayer(addressPoints, { radius: 25 }).addTo(map);

  return null;
}