import React from 'react'
import { Box, Image, Link, Text } from 'theme-ui'

export default function MemberSection({ member }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        background:
          'url(/city/hyderabad/elements/crumpled-paper-background.jpg)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Image
        src={member.imgSrc}
        alt={member.name}
        sx={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          objectFit: 'cover',
          mr: '20px'
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Text sx={{ fontWeight: 'bold', fontSize: '1.2em' }}>
          {member.name}
        </Text>
        <div
          style={{ display: 'flex', rowGap: '7px', flexDirection: 'column' }}
        >
          {member.designation && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/city/hyderabad/elements/briefcase.svg"
                style={{ paddingRight: '5px' }}
              />
              {member.designation}
            </div>
          )}
          {member.email && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/city/hyderabad/elements/email.svg"
                style={{ paddingRight: '5px' }}
              />
              <Link
                href={`mailto:${member.email}`}
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {member.email}
              </Link>
            </div>
          )}
          {member.linkedInProfile && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src="/city/hyderabad/elements/linkedIn.svg"
                style={{ paddingRight: '5px' }}
              />
              <Link
                href={member.linkedInProfile}
                target="_blank"
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {member.linkedInUsername}
              </Link>
            </div>
          )}
        </div>
      </Box>
    </Box>
  )
}
