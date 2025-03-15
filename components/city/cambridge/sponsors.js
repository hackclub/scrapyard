import React from 'react'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import Sponsor from './sponsor'
export default function Sponsors() {
    return(
    <Box
            sx={{
              width: '100%',
              // background: [
              //   "url('/backgrounds/bulletin@vertical.svg')",
              //   "url('/backgrounds/bulletin@vertical.svg')",
              //   "url('/backgrounds/bulletin.svg')"
              // ],
              // background: "url('/backgrounds/bulletin@vertical.svg')",
              background: "url('/backgrounds/lined-paper.png')",
              // background: '#efefef',
              backgroundSize: 'cover!important',
              backgroundPosition: 'center center',
              display: 'block',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              overflow: 'visible',
              gap: '20px',
              height: ['auto'],
              position: 'relative'
            }}
            id="sponsors"
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                flexWrap: 'wrap',
                p: '4vw',
                position: 'relative',
                overflow: 'visible',
                justifyContent: ['space-around', 'space-around', null],
                pb: '12vw'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                  height: 'min-content'
                }}
              >
                <Box
                  sx={{
                    background: "url('/elements/stapled-paper.png')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100px',
                    width: '400px'
                  }}
                >
                  <Heading
                    as="h2"
                    sx={{
                      textAlign: 'center',
                      fontSize: '3em',
                      marginTop: '-10px'
                    }}
                  >
                    Sponsors
                  </Heading>
                </Box>
              </Box>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'wrap',  // Allow wrapping if needed
                        flexDirection: 'row',
                        justifyContent: 'center', // Center sponsors horizontally
                        alignItems: 'center',
                        gap: '100px',
                        marginTop: '50px',
                        transform: 'scale(1.1)'
                    }}
                >

                <Sponsor
                    imageLink="https://assets.hackclub.com/icon-rounded.svg"
                    redirectLink="https://hackclub.com"
                    text="Hack Club"
                />
                <Sponsor
                    imageLink="https://www.raspberrypi.org/app/themes/mind-control/images/logos/default.svg"
                    redirectLink="https://raspberrypi.org"
                    text="Raspberry Pi"
                />
                <Sponsor
                    imageLink="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/layout/barci-Icon.svg"
                    redirectLink="https://nandos.co.uk"
                    text="Nando's"
                />
                <Sponsor
                    imageLink="https://images.squarespace-cdn.com/content/v1/58f9da0e9f7456dd4588cfe3/1596709094677-SE8RU9SV26CFM7OZPDBH/aromi-cucina-white.png"
                    redirectLink="https://aromi.co.uk"
                    text="Aromi"
                />
                </div>
            </Box>
          </Box>
    )
}