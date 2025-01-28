import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const schedule = [
  { time: '11:00 AM', event: 'Doors open' },
  { time: '12:00 PM', event: 'Opening ceremony' },
  { time: '12:30 PM', event: 'Team formation' },
  { time: '1:30 PM', event: 'Lunch' },
  { time: '2:15 PM', event: 'Work Session 1' },
  { time: '3:15 PM', event: 'Workshop 1' },
  { time: '4:15 PM', event: 'Work Session 2' },
  { time: '7:30 PM', event: 'Workshop 2' },
  { time: '8:30 PM', event: 'Dinner' },
  { time: '9:15 PM', event: 'Workshop 3' },
  { time: '10:15 PM', event: 'Work Session 3' },
  { time: '12:00 AM', event: 'Midnight surprise' },
  { time: '1:00 AM', event: 'Work Session 4' },
  { time: '8:30 AM', event: 'Submission' },
  { time: '9:30 AM', event: 'Judging' },
  { time: '10:30 AM', event: 'Awards Ceremony & Closing Ceremony' }
]

const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Flag = () => (
  <Link
    href="https://hackclub.com/"
    target="_blank"
    aria-label="Hack Club's homepage"
    sx={{ position: 'absolute', top: 4, left: 0, zIndex: 2 }}
  >
    <Image
      src="/elements/orpheus-flag.svg"
      alt="Hack Club flag"
      sx={{
        width: [120, 128, 180],
        transformOrigin: '0% 0%',
        transition: 'transform 0.1s',
        ':hover': {
          transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)'
        }
      }}
    />
  </Link>
)

const goldSponsors = [
  {
    href: '#',
    imgSrc: '/city/hyderabad/sponsors/placeholder.png',
    alt: 'Place Holder Sponsorship Image',
    name: 'This Could Be You!'
  }
]

const silverSponsors = [
  {
    href: '#',
    imgSrc: '/city/hyderabad/sponsors/placeholder.png',
    alt: 'Place Holder Sponsorship Image',
    name: 'This Could Be You!'
  }
]

const bronzeSponsors = [
  {
    href: '#',
    imgSrc: '/city/hyderabad/sponsors/placeholder.png',
    alt: 'Place Holder Sponsorship Image',
    name: 'This Could Be You!'
  }
]

const inKindSponsors = [
  {
    href: 'https://gen.xyz/',
    imgSrc: '/city/hyderabad/sponsors/gen-xyz.png',
    alt: '.xyz Domains',
    name: '.xyz Domains'
  }
]

const ourTeam = [
  {
    name: 'Sannihith Madasu',
    email: 'sannihithmadasu@gmail.com',
    linkedInUsername: '@sannihithmadasu',
    linkedInProfile: 'https://www.linkedin.com/in/sannihithmadasu/',
    designation: 'Lead Organizer',
    imgSrc: '/city/hyderabad/team-pictures/sannihith-madasu.jpeg'
  },
  {
    name: 'Atharv Kopparthi',
    email: 'atharv.kopp@gmail.com',
    linkedInUsername: 'N/A',
    linkedInProfile: '#',
    designation: 'Co-Organizer',
    imgSrc: '/city/hyderabad/team-pictures/atharv-kopparthi.jpg'
  },
  {
    name: 'Katta Hima Vamsi',
    email: 'hvkatta@gmail.com',
    linkedInUsername: '@hima-vamsi-katta',
    linkedInProfile: 'https://www.linkedin.com/in/hima-vamsi-katta/',
    designation: 'Co-Organizer',
    imgSrc: '/city/hyderabad/team-pictures/hima-vamsi-katta.jpg'
  },
  {
    name: 'Daksh Kaza',
    email: 'dakshcane@gmail.com',
    linkedInUsername: 'N/A',
    linkedInProfile: '#',
    designation: 'Organizing Committee Head',
    imgSrc: '/city/hyderabad/team-pictures/daksh-kaza.jpg'
  },
  {
    name: 'Amay Bhattacharya',
    email: 'amay.bhattacharya@gmail.com',
    linkedInUsername: '@amay-bhattacharya',
    linkedInProfile: 'https://www.linkedin.com/in/amay-bhattacharya/',
    designation: 'Design Lead',
    imgSrc: '/city/hyderabad/team-pictures/amay-bhattacharya.jpeg'
  },
  {
    name: 'Arvesh Borkar',
    email: 'arvesh.borkar@gmail.com',
    linkedInUsername: '@arveshborkar',
    linkedInProfile: 'https://www.linkedin.com/in/arveshborkar/',
    designation: 'Marketing Lead',
    imgSrc: '/city/hyderabad/team-pictures/arvesh-borkar.jpeg'
  },
  {
    name: 'D.S.S. Prajwal Sarma',
    email: 'saiprajwal2509@gmail.com',
    linkedInUsername: '@prajwaldoranala',
    linkedInProfile: 'https://www.linkedin.com/in/prajwaldoranala/',
    designation: 'Sponsorship Liaison',
    imgSrc: '/city/hyderabad/team-pictures/prajwal-doranala.jpg'
  }
]

export default function Hyderabad() {
  const [text, setText] = useState('')
  const fullText = 'Build stupid s#!t, get stupid prizes.'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index])
        setIndex(prev => prev + 1)
      }, 100) // Adjust typing speed here
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <Box
      sx={{
        background:
          "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
        backgroundSize: ['1100px', '1100px', '1100px', 'contain'],
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <Head>
        <title>Scrapyard Hyderabad</title>
        <style>
          {`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            ::-webkit-scrollbar {
              width: 12px;
            }

            ::-webkit-scrollbar-track {
              background: #ffffff; 
            }

            ::-webkit-scrollbar-thumb {
              background: #FFD700; 
              border-radius: 10px; 
              border: 2px solid #f1f1f1; 
            }

            ::-webkit-scrollbar-thumb:hover {
              background: #C0C0C0; 
            }
          `}
        </style>
      </Head>
      <Flag />
      <Box
        sx={{
          width: '100%',
          height: ['80vh', '80vh', '90vh'],
          bg: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Image
            sx={{
              width: '600px',
              maxWidth: '70vw',
              objectFit: 'contain'
            }}
            src="/city/hyderabad/hyderabadLogo.svg"
            alt="Scrapyard"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              background: "url('/elements/ripped-paper.png')",
              backgroundSize: 'cover',
              width: 'min(500px, calc(100vw - 30px))',
              filter: 'drop-shadow(5px 5px 5px #000000AA)',
              position: 'relative',
              zIndex: 20
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%'
              }}
            >
              {text}
            </Heading>
          </Box>
          <Box
            sx={{
              zIndex: 1,
              width: 'max-content',
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '75%',
              position: 'relative',
              zIndex: 30,
              top: '-15%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '3%',
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                mx: '8%',
                p: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'max-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              Hyderabad - March&nbsp;15-16
            </Heading>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100vw'
          }}
        >
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '50%',
              left: '10%',
              animation: 'spin 5s linear infinite'
            }}
            src="/elements/stars/blue.png"
            alt="Blue paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '55%',
              right: '15%',
              animation: 'spin 5s linear infinite'
            }}
            src="/elements/stars/yellow.png"
            alt="Yellow paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '70%',
              left: '20%',
              transform: 'rotate(180deg)',
              animation: 'spin 5s linear infinite'
            }}
            src="/elements/stars/pink.png"
            alt="Pink paper star"
          />
        </Box>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=hyderabad"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              position: 'fixed',
              right: ['2%'],
              top: ['4%'],
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 30,
              minWidth: '8em',
              padding: '15px'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                padding: ['2%', '8%'],
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                width: '100%'
              }}
            >
              SIGN&nbsp;UP
            </Heading>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: "url('/elements/paper-top.png')",
          backgroundSize: 'contain',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          position: 'relative',
          height: '23vw'
        }}
      >
        <img
          src="/elements/trash-can.png"
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '70vw',
            transform: 'translateY(-40%)',
            zIndex: 7
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          // background: "linear-gradient(#F5F5F5, #F2F2F2)",
          background: 'url(/backgrounds/ripped-paper.png)',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          pt: 6,
          px: 4,
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <Image src="/elements/orpheus-doodle.svg" />
          <Box
            sx={{
              maxWidth: ['80vw', '60vw', '40vw'],
              padding: '40px',
              zIndex: 1,
              backgroundImage: 'url(/elements/sticky-note.svg)',
              backgroundSize: 'cover',
              filter: 'drop-shadow(5px 5px 5px #000000AA)'
            }}
          >
            <Heading
              sx={{
                textDecoration: 'underline'
              }}
            >
              What's Scrapyard Hyderabad?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              Scrapyard Hyderabad is a hackathon for high schoolers happening in
              Hyderabad, where you can make the stupidest things you can think
              of! Anything, from a{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                lamp that flashes faster the slower you type
              </Link>
              , to those ideas that you wouldn't dare to consider to be useful,
              goes at Scrapyard. No matter your experience, Scrapyard Hyderabad
              needs you and your scrappy ideas!
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            display: ['none', 'none', 'block']
          }}
        >
          <Image
            src="/elements/doodles/arrow.svg"
            sx={{ position: 'absolute', left: '5%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/pinkcircle.svg"
            sx={{ position: 'absolute', left: '20%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/yellowcircle.svg"
            sx={{ position: 'absolute', left: '8%', top: '70%' }}
          />
          <Image
            src="/elements/doodles/bluesquiggle.svg"
            sx={{ position: 'absolute', left: '8%', top: '84%' }}
          />
          <Image
            src="/elements/doodles/yellowlines.svg"
            sx={{ position: 'absolute', left: '37%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluecircle.svg"
            sx={{ position: 'absolute', right: '30%', top: '78%' }}
          />
          <Image
            src="/elements/doodles/pinksquiggle.svg"
            sx={{ position: 'absolute', right: '10%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluedrops.svg"
            sx={{ position: 'absolute', right: '10%', top: '0%' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100vw',
          background: "url('/backgrounds/ripped-paper-bottom.png')",
          backgroundSize: 'cover',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          height: '17.03212647vw',
          position: 'relative'
        }}
      ></Box>

      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            SPONSORS
          </Heading>
        </Box>
        {/* Gold Sponsors */}
        <div style={{ marginBottom: '10px' }}>
          <Heading
            as="h1"
            sx={{
              mb: 3,
              position: 'relative',
              color: '#FFD700',
              textAlign: 'center'
            }}
          >
            Gold Sponsors
            <Image
              src="/elements/doodles/yellow-underline.svg"
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
            {goldSponsors.map((sponsor, index) => (
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

        {/* Silver Sponsors */}
        <div style={{ marginBottom: '10px' }}>
          <Heading
            as="h1"
            sx={{
              mb: 3,
              position: 'relative',
              color: '#C0C0C0',
              textAlign: 'center'
            }}
          >
            Silver Sponsors
            <Image
              src="/city/hyderabad/elements/silver-underline.svg"
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
            {silverSponsors.map((sponsor, index) => (
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
                    zIndex: 2
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

        {/* Bronze Sponsors */}
        <div style={{ marginBottom: '20px' }}>
          <Heading
            as="h1"
            sx={{
              mb: 3,
              position: 'relative',
              color: '#F98971',
              textAlign: 'center'
            }}
          >
            Bronze Sponsors
            <Image
              src="/city/hyderabad/elements/bronze-underline.svg"
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
            {bronzeSponsors.map((sponsor, index) => (
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
                    zIndex: 1
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

        {/* In-Kind Sponsors */}
        <div style={{ marginBottom: '10px' }}>
          <Heading
            as="h1"
            sx={{
              mb: 3,
              position: 'relative',
              color: 'white',
              textAlign: 'center'
            }}
          >
            In-Kind Sponsors
            <Image
              src="/elements/doodles/blue-underline.svg"
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
            {inKindSponsors.map((sponsor, index) => (
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
                    zIndex: 1
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
      </Box>

      <Image src="/elements/doodles/yellow-underline.svg" width="100%" />

      <Box
        sx={{
          paddingBottom: '40px',
          background: '#337D77',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: ['90vw', '70vw', '46.8vw'],
            height: '30vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              textAlign: 'center',
              mx: '5vw',
              fontWeight: 'lighter'
            }}
          >
            Our Team
          </Heading>
        </Box>

        <Grid columns={[1, 3]} gap="25px" sx={{ maxWidth: '1600px' }}>
          {ourTeam.map((member, index) => (
            <Box
              key={index}
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
                  style={{
                    display: 'flex',
                    rowGap: '7px',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      src="/city/hyderabad/elements/briefcase.svg"
                      style={{ paddingRight: '5px' }}
                    />
                    {member.designation}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      src="/city/hyderabad/elements/email.svg"
                      style={{ paddingRight: '5px' }}
                    />
                    <Link
                      href={`mailto:${member.email}`}
                      sx={{
                        color: 'inherit',
                        textDecoration: 'none'
                      }}
                    >
                      {member.email}
                    </Link>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      src="/city/hyderabad/elements/linkedIn.svg"
                      style={{ paddingRight: '5px' }}
                    />
                    <Link
                      href={member.linkedInProfile}
                      target="_blank"
                      sx={{
                        color: 'inherit',
                        textDecoration: 'none'
                      }}
                    >
                      {member.linkedInUsername}
                    </Link>
                  </div>
                </div>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            WHAT'S HAPPENING AT SCRAPYARD Hyderabad?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center'
          }}
        >
          Scrapyard Hyderabad is a 24hour event - HERE'S THE ROUGH SCHEDULE!
        </Heading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: ['90%', '70%'],
            fontSize: '2em',
            gap: '0.2em',
            color: 'black',
            my: 5,
            background: "url('/backgrounds/lined-paper.png')",
            backgroundSize: ['contain', 'contain', 'cover!important'],
            p: 4,
            borderRadius: 1,
            boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
          }}
        >
          {schedule.map((item, i) => (
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center'
              }}
              key={i}
            >
              <Heading
                as="p"
                sx={{
                  display: 'inline',
                  width: ['min-content', 'max-content'],
                  fontSize: '2rem',
                  fontFamily: 'p22-stanyan'
                }}
              >
                {item.event}
              </Heading>
              <Box
                sx={{
                  mx: 2,
                  transform: 'translateY(0.75rem)',
                  borderWidth: 0,
                  borderBottomWidth: '0.35rem',
                  borderStyle: 'dotted',
                  flexGrow: '1',
                  display: 'inline',
                  height: 1
                }}
              ></Box>
              <p style={{ display: 'inline', margin: 0 }}>{item.time}</p>
            </div>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            CAN'T MAKE IT TO Hyderabad?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center',
            mx: '5vw'
          }}
        >
          THERE ARE 100+ OTHER SCRAPYARD EVENTS HAPPENING AROUND THE WORLD!
        </Heading>
        <Box
          sx={{
            width: ['100%', '80%'],
            height: '75vh',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            mb: '10vh',
            mt: 5
          }}
        >
          <Map />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: "url('/backgrounds/lined-paper.png')",
          backgroundSize: ['contain', 'contain', 'cover!important'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          p: [4, 4, 5],
          pt: 6,
          position: 'relative'
        }}
      >
        <Heading
          as="h1"
          sx={{
            mb: 5,
            position: 'relative'
          }}
        >
          Frequently Asked Questions
          <Image
            src="/elements/doodles/blue-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Grid
          columns={[1, 1, 1, 2]}
          gap={4}
          sx={{
            maxWidth: '1200px'
          }}
        >
          {Object.entries({
            'Who can participate in Scrapyard?': (
              <>
                All high-school & upper-middle-school aged students are welcome
                to come! You don't have to be a member of the Hack Club
                community or be a Hack Club leader.
              </>
            ),
            'All this, for free?': (
              <>Yep! Food, swag and good vibes are all included.</>
            ),
            'What do I need?': (
              <>
                Your laptop, chargers, and an open mind! If you're going to an
                overnight event, bring toiletries and sleeping bagstoo.
                Additionally, if you plan to work on a hardware project, bring
                the tools you'll need.
              </>
            ),
            'I’m not good at coding. Can I still participate?': (
              <>
                This hackathon is for creatives of all skill levels! We'll have
                workshops and other events so join us and let's learn together.
                If you'd like to start exploring some introductory projects,
                check out Hack Club Workshops.
              </>
            ),
            'What can I make at Scrapyard?': (
              <>
                The scrappiest thing you can imagine –- jank is encouraged.
                Games? Apps? Websites? Programming languages? <em>Hardware?</em>{' '}
                You name it! We’ll have a bunch of resources and mentors to help
                you out.
              </>
            ),
            'What has Hack Club done before?': (
              <>
                Hack Club has run an{' '}
                <Link href="https://youtu.be/PnK4gzO6S3Q" target="_blank">
                  overnight hackathon
                </Link>{' '}
                in San Francisco, a{' '}
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                >
                  Game Jam
                </Link>{' '}
                across 50 cities, a hackathon on a{' '}
                <Link href="https://youtu.be/2BID8_pGuqA" target="_blank">
                  Train
                </Link>{' '}
                from Vermont to Los Angeles, and much more!
              </>
            ),
            'What if my parents are concerned?': (
              <>
                We’re here to help! Our parents guide will be released soon, but
                they can reach out to us at{' '}
                <Link href="mailto:sannihith.hyderabad@scrapyard.hackclub.com">
                  sannihith.hyderabad@scrapyard.hackclub.com
                </Link>{' '}
                for questions.
              </>
            ),
            'What if I have more questions?': (
              <>
                Contact us! Feel free to reach out to us in the
                #scrapyard-hyderabad channel on the Hack Club slack or email us
                at{' '}
                <Link href="mailto:sannihith.hyderabad@scrapyard.hackclub.com">
                  sannihith.hyderabad@scrapyard.hackclub.com
                </Link>
                .
              </>
            )
          }).map(([question, answer], i) => {
            return (
              <Card
                key={question}
                sx={{
                  background: [
                    'transparent',
                    `url('/elements/doodles/boxes/${(i % 6) + 1}.svg')`
                  ],
                  backgroundSize: [null, '100% 100%'],
                  backgroundRepeat: 'no-repeat',
                  boxShadow: 'none',
                  padding: '48px!important',
                  border: ['2px solid black', 'none']
                }}
              >
                <Heading
                  as="h2"
                  mb={4}
                  sx={{
                    position: 'relative'
                  }}
                >
                  {question}
                  <Image
                    src="/elements/doodles/yellow-underline.svg"
                    sx={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(75%)'
                    }}
                  />
                </Heading>
                <Text
                  sx={{
                    fontSize: 3,
                    fontWeight: 'bold'
                  }}
                >
                  {answer}
                </Text>
              </Card>
            )
          })}
        </Grid>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=hyderabad"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 20,
              padding: 1,
              my: 3
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%',
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                paddingY: ['15px', '0px'],
                lineHeight: '1.5em'
              }}
            >
              SIGN UP FOR SCRAPYARD Hyderabad
            </Heading>
          </Box>
        </Link>
        <Heading
          as="h2"
          sx={{
            mt: 3,
            position: 'relative'
          }}
        >
          Scrapyard
          <Image
            src="/elements/doodles/pink-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mb: -2,
            textAlign: 'center'
          }}
        >
          Made with ♡ by teenagers, for teenagers at Hack Club
        </Text>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mt: 0,
            textAlign: 'center'
          }}
        >
          <Link href="https://hackclub.com">Hack Club</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/slack">Slack</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/clubs">Clubs</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/hackathons">Hackathons</Link>
        </Text>
      </Box>
    </Box>
  )
}
