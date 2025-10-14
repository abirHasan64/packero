import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const position = [23.685, 90.3563]; // Bangladesh center

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [30, 46],
  iconAnchor: [15, 46],
});

// Smooth zoom animation
function FlyToDistrict({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.flyTo(coords, 10, { duration: 2 });
  }, [coords, map]);
  return null;
}

const BangladeshMap = ({ serviceCenters }) => {
  const [searchText, setSearchText] = useState("");
  const [activeCoords, setActiveCoords] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const district = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (district) {
      setActiveCoords([district.latitude, district.longitude]);
      setNotFound(false);
    } else {
      setNotFound(true);
      setActiveCoords(null);
    }
  };

  return (
    <div className="relative h-[500px] sm:h-[600px] md:h-[700px] w-full rounded-2xl overflow-hidden">
      {/* Floating Search Bar */}
      <form
        onSubmit={handleSearch}
        className="absolute top-5 left-1/2 transform -translate-x-1/2 z-[1000] w-[90%] sm:w-[400px] md:w-[480px] flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-md px-3 py-2 hover:shadow-lg transition-all duration-300"
      >
        <input
          type="text"
          placeholder="Search district..."
          className="flex-1 px-3 py-2 bg-transparent outline-none text-gray-700 text-sm sm:text-base placeholder-gray-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
        >
          Search
        </button>
      </form>

      {/* Not Found Alert */}
      {notFound && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-[1000] bg-red-500/90 text-white text-sm sm:text-base font-medium px-6 py-2 rounded-full shadow-lg animate-fadeIn">
          District not found
        </div>
      )}

      {/* Map Container */}
      <MapContainer
        center={position}
        zoom={7.5}
        scrollWheelZoom={true}
        zoomControl={false} // disable default control to reposition it manually
        className="h-full w-full rounded-2xl z-0"
      >
        {/* Custom bottom-left zoom control */}
        <CustomZoomControl />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToDistrict coords={activeCoords} />

        {serviceCenters.map((center, index) => (
          <Marker
            key={index}
            position={[center.latitude, center.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-blue-700 text-base mb-1">
                  {center.district}
                </h3>
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-gray-800">
                    Covered areas:
                  </span>{" "}
                  {center.covered_area.join(", ")}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// Custom Zoom Control component
const CustomZoomControl = () => {
  const map = useMap();

  useEffect(() => {
    const zoomControl = L.control.zoom({
      position: "bottomleft", // Move to bottom-left
    });
    zoomControl.addTo(map);

    return () => {
      map.removeControl(zoomControl);
    };
  }, [map]);

  return null;
};

export default BangladeshMap;
