import React from 'react';
import { Image, Link, Text } from 'theme-ui';

export default function Sponsor({ imageLink, redirectLink, text }) {
  return (
    <Link
      href={redirectLink}
      target="_blank"
      sx={{
        backgroundColor: '#69c5f1',
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        alignItems: 'center',
        padding: '20px',
        transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
        outline: 'solid 2px white',
        transition: 'transform 0.2s',
        ':hover': {
          transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
          zIndex: 1
        }
      }}
    >
      <Image
        src={imageLink}
        alt={text}
        style={{
          width: '100px',
          height: '100px',
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
        {text}
      </Text>
    </Link>
  );
}
