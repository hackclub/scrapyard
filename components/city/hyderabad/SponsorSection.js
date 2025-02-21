import React from 'react'
import { Heading, Image, Link, Text } from 'theme-ui'

export default function SponsorSection({
  title,
  sponsors,
  color,
  underlineSrc
}) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Heading
        as="h1"
        sx={{
          mb: 3,
          position: 'relative',
          color: color,
          textAlign: 'center'
        }}
      >
        {title}
        <Image
          src={underlineSrc}
          sx={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '250px',
            height: 'auto'
          }}
        />
      </Heading>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          transform: 'scale(0.9)',
          justifyContent: 'center'
        }}
      >
        {sponsors.map((sponsor, index) => (
          <Link
            key={index}
            href={sponsor.href}
            target="_blank"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              alignItems: 'center',
              transition: 'transform 0.2s',
              ':hover': {
                transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                zIndex: 3
              }
            }}
          >
            <Image
              src={sponsor.imgSrc}
              alt={sponsor.alt}
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'contain'
              }}
            />
            <Text
              sx={{
                textAlign: 'center',
                fontSize: '1.5em',
                fontFamily: 'moonblossom',
                color: 'white',
                mt: 2,
                wordWrap: 'break-word'
              }}
            >
              {sponsor.name}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  )
}
