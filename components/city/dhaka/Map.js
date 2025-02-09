import { useState, useEffect } from 'react'
import IndexCard from '../../IndexCard'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Tooltip,
  useMap
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Custom icons
const starIcon = new L.Icon({
  iconUrl: `/elements/star-sticker.svg`,
  iconSize: new L.Point(60, 60),
  popupAnchor: [0, 0]
})

const pinIcon = new L.Icon({
  iconUrl: `/elements/thumbtack.png`,
  iconSize: new L.Point(30, 30),
  popupAnchor: [0, 0]
})

const StyledMapContainer = MapContainer

// Component to update map center dynamically
function UpdateMapCenter({ latitude, longitude }) {
  const map = useMap()
  useEffect(() => {
    if (latitude && longitude) {
      map.setView([latitude, longitude], 10) // Center map to new location
    }
  }, [latitude, longitude, map])
  return null
}

export default function Map({ full, latitude, longitude }) {
  // Default center (only used if no lat/lng is given)
  const defaultCenter = [35.683, -25.099]

  const [events, setEvents] = useState([])
  const [mapCenter, setMapCenter] = useState(defaultCenter)

  useEffect(() => {
    if (latitude && longitude) {
      setMapCenter([latitude, longitude]) // Update map center dynamically
    }
  }, [latitude, longitude])

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/locations')
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <StyledMapContainer
      center={mapCenter}
      zoom={latitude && longitude ? 10 : 2.5} // Zoom in if location is given
      style={{
        width: full ? '80vw' : '80%',
        height: '100vh',
        zIndex: 0
      }}
      zoomControl={!full}
    >
      {/* Dynamically update center */}
      <UpdateMapCenter latitude={latitude} longitude={longitude} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Show marker at user-provided location */}
      {latitude && longitude && (
        <Marker position={[latitude, longitude]} icon={starIcon}>
          <Popup>You are here!</Popup>
        </Marker>
      )}

      {/* Show event markers */}
      {events.map((event, idx) => (
        <Marker
          position={[event.lat, event.lng]}
          key={idx}
          icon={event.flagship ? starIcon : pinIcon}
        >
          <Popup>
            <IndexCard
              id={event.id}
              title={event.name}
              slug={event.slug}
              format={event.format}
              location={event.location}
            />
          </Popup>
          <Tooltip>{event.name}</Tooltip>
        </Marker>
      ))}

      {full && <ZoomControl position="topright" />}
    </StyledMapContainer>
  )
}
