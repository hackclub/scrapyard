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
import { Box, Heading, Link } from 'theme-ui'

const starIcon = new L.Icon({
  iconUrl: `/city/hyderabad/elements/map-pin.svg`,
  iconSize: [45, 45],
  popupAnchor: [0, 0]
})

const event = {
  name: 'Scrapyard Hyderabad',
  location: 'Hyderabad',
  lat: 17.45137618807988,
  lng: 78.37089649355471,
  description: 'Click here to view on Google Maps',
  googleMapsLink: 'https://maps.app.goo.gl/dFvAjWTmYLoAd4S37'
}

export default function VenueMap({ full }) {
  const center = [20.5937, 78.9629]
  const bounds = [
    [-85, -Infinity],
    [85, Infinity]
  ]

  return (
    <MapContainer
      center={center}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
      zoom={5}
      minZoom={1}
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
      <Marker position={[event.lat, event.lng]} icon={starIcon}>
        <Popup className="custom-popup">
          <Box
            sx={{
              p: 4,
              pt: 0,
              pb: 2,
              borderRadius: 4,
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
              bg: 'white',
              background: 'url(/elements/indexcard.png)',
              backgroundSize: 'cover'
            }}
          >
            <Heading
              as="h2"
              sx={{
                minWidth: 'max-content',
                textAlign: 'center'
              }}
            >
              {event.name}
            </Heading>
            <p
              style={{
                textAlign: 'center',
                backgroundColor: 'white',
                fontFamily: 'moonblossom'
              }}
            >
              <Link
                href={event.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                {event.description}
              </Link>
            </p>
          </Box>
        </Popup>
        <Tooltip>{event.name}</Tooltip>
      </Marker>
      {full && <ZoomControl position="topright" />}
    </MapContainer>
  )
}
