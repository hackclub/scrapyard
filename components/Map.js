import { useState, useEffect } from 'react'
import IndexCard from './IndexCard'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Tooltip
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const starIcon = new L.Icon({
  iconUrl: `/elements/star-sticker.svg`,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 60),
  popupAnchor: [0, 0]
})

const pinIcon = new L.Icon({
  iconUrl: `/elements/thumbtack2.png`,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 20),
  popupAnchor: [0, 0]
})
const StyledMapContainer = MapContainer

const flagshipEvent = {
  name: 'Flagship',
  location: 'Austin, TX',
  lat: 30.2672,
  lng: -97.7431,
  description: 'yada yada yada',
  format: '24-hour',
  slug: '',
  flagship: true
}

export default function Map({ full }) {
  const [center, setCenter] = useState(
    window.innerWidth > 767.98 ? [35.683, -25.099] : [55, -100]
  )
  const [events, setEvents] = useState([flagshipEvent])

  const bounds = [
    [-85, -Infinity],
    [85, Infinity]
  ]

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/locations')
        const data = await response.json()
        setEvents([flagshipEvent, ...data])
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <>
      <StyledMapContainer
        center={center}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        zoom={2}
        minZoom={1.5}
        style={{
          width: full ? '80vw' : '80%',
          height: full ? '100vh' : '100vh',
          zIndex: 0
        }}
        worldCopyJump={true}
        zoomControl={!full}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event, idx) => (
          <Marker
            position={[event.lat, event.lng]}
            key={idx}
            icon={event.flagship ? starIcon : pinIcon}
          >
            <Popup
              className="custom-popup"
              style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                transform: 'none'
              }}
            >
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
    </>
  )
}
