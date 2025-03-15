'======== READ ME BEFORE EDITING ========'
/*
Hello! This is the template for the city pages.

To create a new page, make a copy of this file in the same directory (pages) and rename it for your city.
E.g. if your city is Tampa, rename the copy of this file to tampa.js

Replace all placeholder info, indicated by "TODO" comments (you can use Ctrl+F) in this file
You do not need to use this template exactly, feel free to customize it as much as you see fit.

If you want to include additional assets, please add them under public/city/your-city-name.

Make a PR and we'll review it as soon as we can!

If you have any questions, send a message to the #scrapyard channel on the Hack Club Slack and we'll try to help.

P.S. Feel free to delete this comment block when you're done! 

Note: To test your changes locally, use `yarn install` and `yarn dev`.
*/

import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'

// TODO: Change this schedule to your own!
const schedule = [
  { time: '8:30 AM', event: 'Doors open' },
  { time: '9:00 AM', event: 'Opening ceremony' },
  { time: '9:30 AM', event: 'Hacking commences!' },
  { time: '12:00 PM', event: 'Lunch' },
  { time: '1:00 PM', event: 'Workshop 1' },
  { time: '2:00 PM', event: 'Activity 1' },
  { time: '3:00 PM', event: 'Workshop 2' },
  { time: '4:00 PM', event: 'Activity 2' },
  { time: '6:00 PM', event: 'Project Demos!' },
  { time: '6:30 PM', event: 'Dinner' },
  { time: '7:00 PM', event: 'Closing ceremony' }
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

export default function Vancouver() {
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
        {/* TODO: Change [EXAMPLECITY] to your event's city */}
        <title>Scrapyard Vancouver</title>
      </Head>
      {/* <Flag /> */}
      <Box
        sx={{
          width: '100%',
          background: '#337D78',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          position: 'relative',
          zIndex: 25
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: [3, 3, 0]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3
            }}
          >
            <Box
              sx={{
                width: ['40px', '48px'],
                height: ['40px', '48px'],
                minWidth: ['40px', '48px'],
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text sx={{ fontSize: [3, 4], color: 'white' }}>🎉</Text>
            </Box>
            <Text
              sx={{
                fontSize: [1, 2],
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'p22-stanyan'
              }}
            >
              Are you at Scrapyard Vancouver right now? Access the following
              links:
            </Text>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              width: ['100%', '100%', 'auto'],
              justifyContent: 'center'
            }}
          >
            <Link
              href="https://discord.bcydc.ca"
              target="_blank"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '10px 15px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                ':hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(255,255,255,0.3)'
                },
                flex: [1, 1, 'auto']
              }}
            >
              <Text
                sx={{
                  fontSize: [1, 2],
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'p22-stanyan'
                }}
              >
                Discord Server
              </Text>
              <Text sx={{ fontSize: 1, color: 'white' }}>↗</Text>
            </Link>
            <Link
              href="https://scrapyard.bcydc.ca/handbook"
              target="_blank"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '10px 15px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                ':hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(255,255,255,0.3)'
                },
                flex: [1, 1, 'auto']
              }}
            >
              <Text
                sx={{
                  fontSize: [1, 2],
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'p22-stanyan'
                }}
              >
                Hacker Handbook
              </Text>
              <Text sx={{ fontSize: 1, color: 'white' }}>↗</Text>
            </Link>
            <Link
              href="https://github.com/TuanTTranCS/setup-coding-assistants"
              target="_blank"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: '10px 15px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                ':hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(255,255,255,0.3)'
                },
                flex: [1, 1, 'auto']
              }}
            >
              <Text
                sx={{
                  fontSize: [1, 2],
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'p22-stanyan'
                }}
              >
                AI Set Up Guide
              </Text>
              <Text sx={{ fontSize: 1, color: 'white' }}>↗</Text>
            </Link>
          </Box>
        </Box>
      </Box>
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
            src="/city/vancouver/scrapyardvancouver.png"
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
              // aspectRatio: "1080/338.4",
              // padding: "8%",
              // paddingLeft: "7%",
              display: 'block',

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
              Build stupid stuff, get stupid prizes.
            </Heading>
          </Box>
          <Box
            sx={{
              zIndex: 1,
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '85%',
              position: 'relative',
              zIndex: 20,
              top: '-5%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '2%',
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
                whiteSpace: 'pre-wrap',
                textAlign: 'center',
                fontSize: ['1.1em', '1.3em'],
                fontWeight: 'bold'
              }}
            >
              MARCH 15, 2024 • 8:30AM - 7:30PM
            </Heading>
          </Box>
          <Box
            sx={{
              zIndex: 1,
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '65%',
              position: 'relative',
              zIndex: 20,
              top: '-2%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '2%',
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
                whiteSpace: 'pre-wrap',
                textAlign: 'center',
                fontSize: ['1em', '1.2em']
              }}
            >
              VISST - 1490 W Broadway #200, Vancouver, BC
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
              left: '10%'
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
              right: '15%'
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
              transform: 'rotate(180deg)'
            }}
            src="/elements/stars/pink.png"
            alt="Pink paper star"
          />
        </Box>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event_id=recMCJhSzLBLhBitT"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              position: 'fixed',
              right: ['2%'],
              top: ['12%'],
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
            width: '100%',
            textAlign: 'center',
            mb: 4
          }}
        >
          <Heading
            as="h2"
            sx={{
              fontSize: '3em',
              fontFamily: 'moonblossom',
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              mb: 3,
              position: 'relative',
              display: 'inline-block'
            }}
          >
            EVENT DETAILS
            <Box
              sx={{
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                right: '0',
                height: '4px',
                background: '#337D78',
                borderRadius: '2px'
              }}
            />
          </Heading>

          <Box
            sx={{
              maxWidth: '850px',
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '25px',
              borderRadius: '10px',
              border: '2px solid #337D78',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            <Text
              sx={{
                fontSize: '1.4em',
                lineHeight: '1.6',
                fontFamily: 'p22-stanyan',
                textAlign: 'center'
              }}
            >
              Scrapyard Vancouver is a free 12-hour hackathon running on March
              15th—a fun developer space for students to learn from mentors,
              build exciting projects, compete for prizes, and make new
              connections. We have mentors hosting educational workshops about
              university and technology, sponsors providing students with fun
              merchandise, and students from across the Lower Mainland
              participating! We will be providing free lunch, snacks throughout
              the day, educational workshops from experienced mentors, and
              various prizes for participants.
              <Box
                as="span"
                sx={{ display: 'block', fontWeight: 'bold', mt: 3 }}
              >
                Entry is free for all students. Registration deadline: Friday,
                March 14th.
              </Box>
            </Text>
          </Box>
        </Box>
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
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              What's Scrapyard Vancouver?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              Scrapyard Vancouver is a free 12-hour hackathon for high school
              students
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              in the Lower Mainland. Our event provides a professional
              environment where students can learn from mentors, build exciting
              projects, compete for prizes, and make new connections. We provide
              free lunch, snacks throughout the day, educational workshops, and
              a variety of prizes. Whether you're interested in technology,
              looking to expand your skills, or just wanting to create something
              innovative, Scrapyard Vancouver welcomes you!
            </p>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          mb: 6
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column'
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
            What is a Hackathon?
          </Heading>
        </Box>
        <Box
          sx={{
            maxWidth: '800px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            border: '4px solid white',
            mx: 4,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          <Text
            sx={{
              color: 'white',
              fontSize: '1.5em',
              fontFamily: 'p22-stanyan',
              textAlign: 'center',
              lineHeight: 1.6
            }}
          >
            A hackathon is an event where people come together to collaborate &
            work on tech projects. A panel of judges will pick the winning teams
            & hand out prizes. However, the point of the hackathon itself is to
            work together, learn new things & have an amazing time doing so!
          </Text>
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
        <Heading
          as="h2"
          sx={{
            fontSize: '3em',
            fontFamily: 'moonblossom',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            mb: 3,
            position: 'relative',
            display: 'inline-block'
          }}
        >
          VENUE
          <Box
            sx={{
              position: 'absolute',
              bottom: '-10px',
              left: '0',
              right: '0',
              height: '4px',
              background: 'white',
              borderRadius: '2px'
            }}
          />
        </Heading>

        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            width: '100%',
            maxWidth: '1200px',
            mb: 4,
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '15px',
            backdropFilter: 'blur(5px)'
          }}
        >
          <Box
            sx={{
              width: ['100%', '100%', '40%'],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3
            }}
          >
            <Text
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '2em',
                display: 'block',
                mb: 1,
                textAlign: 'center',
                fontFamily: 'moonblossom'
              }}
            >
              Vancouver Independent School for Science and Technology
            </Text>

            <Link
              href="https://maps.app.goo.gl/5dp5ZR9grLQPXBkL9"
              target="_blank"
              sx={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '15px 25px',
                borderRadius: '10px',
                border: '2px solid white',
                transition: 'transform 0.2s ease, background 0.2s ease',
                ':hover': {
                  transform: 'scale(1.05)',
                  background: 'rgba(255, 255, 255, 0.3)'
                }
              }}
            >
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
              >
                <Text sx={{ fontSize: '2em' }}>📍</Text>
                <Text
                  sx={{
                    color: '#ADD8E6',
                    fontWeight: 'bold',
                    fontSize: '1.8em',
                    display: 'block'
                  }}
                >
                  VISST
                </Text>
              </Box>
              <Text
                sx={{
                  color: 'white',
                  fontSize: '1.5em',
                  fontFamily: 'moonblossom',
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                1490 W BROADWAY #200, VANCOUVER, BC
              </Text>
            </Link>

            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '20px',
                borderRadius: '10px',
                border: '2px solid white',
                mt: 3
              }}
            >
              <Text
                sx={{
                  color: 'white',
                  fontSize: ['1.2em', '1.3em', '1.4em'],
                  fontFamily: '22-stanyan',
                  textAlign: 'center',
                  lineHeight: 1.4
                }}
              >
                Take the{' '}
                <span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
                  Expo Line
                </span>{' '}
                to{' '}
                <span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
                  Commercial-Broadway Station
                </span>{' '}
                or the{' '}
                <span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
                  Canada Line
                </span>{' '}
                to{' '}
                <span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
                  Broadway-City Hall Station
                </span>
                . Then, take the{' '}
                <span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
                  UBC B-Line
                </span>{' '}
                to{' '}
                <span style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
                  Broadway @ Granville
                </span>
                .
              </Text>
            </Box>
          </Box>

          <Box
            sx={{
              width: ['100%', '100%', '55%'],
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            <Image
              src="/city/vancouver/visstdoor.png"
              alt="VISST Building Entrance"
              sx={{
                width: '100%',
                borderRadius: '10px',
                border: '3px solid white',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
              }}
            />

            <Image
              src="/city/vancouver/visstlocal.png"
              alt="Transit map showing route to venue"
              sx={{
                width: '100%',
                borderRadius: '10px',
                border: '3px solid white',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '8vh auto 0',
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
            {/* TODO: Change [EXAMPLECITY] to your event's city */}
            WHAT'S HAPPENING AT SCRAPYARD Vancouver?
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
          {/* TODO: Change [EXAMPLECITY] to your event's city */}
          {/* TODO: Change [DURATION] to your event's duration (12hour, 24hour, 2-day) */}
          Scrapyard Vancouver is a 12 hour event - HERE'S THE ROUGH SCHEDULE!
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
            {/* TODO: Change [EXAMPLECITY] to your event's city */}
            CAN'T MAKE IT TO Vancouver?
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
              <>All students grades 8-12 are welcome to come!</>
            ),
            'All this, for free?': (
              <>
                Yep! 2 meals, tons of snacks, swag and good vibes are all
                included! Plus, if you're joining us from afar,{' '}
                <Link href="https://gas.hackclub.com/">
                  we'll cover the cost of gas or a bus / train ticket
                </Link>
                .
              </>
            ),
            'What do I need?': <>Your laptop, chargers, and an open mind!</>,
            "I'm not good at coding. Can I still participate?": (
              <>
                Scrapyard is for creatives of all skill levels! We'll have
                workshops and other events so join us and let's learn together.
                If you'd like to start exploring some introductory projects,
                check out Hack Club Workshops.
              </>
            ),
            'What can I make at Scrapyard?': (
              <>
                The scrappiest thing you can imagine –- jank is encouraged.
                Games? Apps? Websites? Programming languages? <em>Hardware?</em>{' '}
                You name it! We'll have a bunch of resources and mentors to help
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
                We&apos;re here to help! Our parents guide will be released
                soon, but they can reach out to us at{' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="mailto:team@bcydc.ca">
                  {/* TODO: Change this email to your event's email */}
                  team@bcydc.ca
                </Link>{' '}
                for questions.
              </>
            ),
            'What if I have more questions?': (
              <>
                {/* TODO: Change [SLACKCHANNEL] to the name of your event's Slack channel */}
                Contact us! Feel free to reach out to us in the
                #scrapyard-vancouver channel on the Hack Club slack or email us
                at {/* TODO: Change this email to your event's email */}
                <Link href="mailto:team@bcydc.ca">
                  {/* TODO: Change this email to your event's email */}
                  team@bcydc.ca
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
          // TODO: Change [EVENTID] to your event's ID (see https://airtable.com/appigKiF7GbVISAlg/shrK3OiCJs4BRBIRG)
          href="https://forms.hackclub.com/scrapyard-signup?event_id=recMCJhSzLBLhBitT"
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
                paddingY: ['15px', '0px']
              }}
            >
              SIGN UP FOR SCRAPYARD Vancouver
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
      <Box
        sx={{
          width: '100%',
          background:
            "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
          backgroundSize: '125%',
          backgroundPosition: 'center',
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
        <Box
          sx={{
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '20px',
            borderRadius: '10px',
            mb: 3
          }}
        >
          <Image
            src="/city/vancouver/bcydc_logo.png"
            alt="BCYDC Logo"
            sx={{
              width: '200px',
              filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))',
              marginRight: '20px'
            }}
          /><Image
          src="/city/vancouver/sgs_logo.png"
          alt="SGS Logo"
          sx={{
            width: '180px',
            filter: 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2))'
          }}
        />
        </Box>
        <Text
          sx={{
            fontFamily: 'p22-stanyan',
            textAlign: 'center',
            fontSize: '1.5em',
            maxWidth: '800px',
            color: 'white'
          }}
        >
          Scrapyard Vancouver is being organized by the SGS CS Club and BCYDC. BCYDC is a collective
          of over 300 high school students with a shared passion for computer
          science, software development, robotics, and technology.
        </Text>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            mt: 3
          }}
        >
          <Link href="https://bcydc.ca/" target="_blank">
            <Box
              sx={{
                background: '#285F5A',
                color: 'white',
                px: 4,
                py: 2,
                borderRadius: '5px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, background 0.2s ease',
                ':hover': {
                  background: '#1E4A46',
                  transform: 'scale(1.05)'
                }
              }}
            >
              Visit Our Website
            </Box>
          </Link>
          <Link href="https://discord.bcydc.ca" target="_blank">
            <Box
              sx={{
                background: '#285F5A',
                color: 'white',
                px: 4,
                py: 2,
                borderRadius: '5px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, background 0.2s ease',
                ':hover': {
                  background: '#1E4A46',
                  transform: 'scale(1.05)'
                }
              }}
            >
              Join Our Discord
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
