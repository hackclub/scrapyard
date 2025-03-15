'======== READ ME BEFORE EDITING ========'
/*
Hello! This is the template for the city pages.

To create a new page, make a copy of this file in the same directory (pages) and rename it for your city.
E.g. if your city is Ottawa, rename the copy of this file to Ottawa.js

Replace all placeholder info, indicated by "TODO" comments (you can use Ctrl+F) in this file
You do not need to use this template exactly, feel free to customize it as much as you see fit.

If you want to include additional assets, please add them under public/city/your-city-name.

Make a PR and we'll review it as soon as we can!

If you have any questions, send a message to the #scrapyard channel on the Hack Club Slack and we'll try to help.

P.S. Feel free to delete this comment block when you're done! 

Note: To test your changes locally, use `npm install` and `npm run dev`.
*/

import Head from 'next/head'

import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'

// TODO: Change this schedule to your own!
const schedule = [
  { time: '1:30 PM', event: 'Doors open' },
  { time: '2:00 PM', event: 'Hacker Sign-in Deadline' },
  { time: '2:30 PM', event: 'Opening ceremony' },
  { time: '3:00 PM', event: 'Start working on your project!' },
  { time: '5:00 PM', event: 'Workshop 1' },
  { time: '5:30 PM', event: 'Workshop 2' },
  { time: '6:00 PM', event: 'Supper' },
  { time: '10:00 PM', event: 'Game time!' },
  { time: '12:00 AM', event: 'Midnight surprise' },
  { time: '7:00 AM', event: 'Breakfast' },
  { time: '10:30 AM', event: 'Demos!' },
  { time: '12:00 PM', event: 'Lunch' },
  { time: '1:00 PM', event: 'Closing ceremony' },
  { time: '2:00 PM', event: 'Go Home :(' },
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

export default function Ottawa() {
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
        {/* TODO: Change Ottawa to your event's city */}
        <title>Scrapyard Ottawa</title>
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
          gap: '0px'
        }}
      >
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Image
            sx={{
              width: '700px',

              maxWidth: '70vw',

              objectFit: 'contain',
              boxSizing: 'border-box',
              borderStartEndRadius: '20px',
            }}
            src="/city/ottawa/ottawa-woodmark.png"
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
              margin: '0',
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
                fontSize: ['1.2em', '1.4em'],
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
              {/* TODO: Change Ottawa to your event's city */}
              Ottawa - March&nbsp;15-16
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
            href="https://forms.hackclub.com/scrapyard-signup?event=ottawa"
            target="_blank"
            style={{
              textDecoration: 'none',
              pointerEvents: 'auto'
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                filter: 'drop-shadow(5px 5px 5px #000)',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.5)'
                },
                transform: 'scale(1.3)',
                zIndex: 30,
                minWidth: '8em',
                padding: '15px',
                textDecoration: 'none',
                pointerEvents: 'auto',
                position: 'relative',
                top: 0,
                left: 0
              }}
            >
              <Heading
                as="h2"
                sx={{
                  fontFamily: 'p22-stanyan',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: ['1.4em', '1.6em'],
                  textTransform: 'inherit!important',
                  width: '100%',
                  textDecoration: 'none',
                  pointerEvents: 'auto'
                }}
              >
                Sign&nbsp;up&nbsp;for&nbsp;Scrapyard
              </Heading>
            </Box>
          </Link>
          <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 30,
            color: 'white',
            transition: 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.2)',
              transform: 'translateX(-50%) scale(1.2)'
            },
          }}
        >
          <h1
            style={{
              fontSize: '70px',
              fontFamily: 'p22-stanyan',
              color: '#ffffffdd',
              cursor: 'pointer'
            }}
            onClick={() => {
              document
                .getElementById('about')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
          ⬇︎
          </h1>
        </Box>
        <Link
          // TODO: Change Ottawa to your event's slug (lowercase, dashed version of your event name), such as san-francisco for Scrapyard San Francisco
          href="https://forms.hackclub.com/scrapyard-signup?event=ottawa"
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
        id='about'
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
          <Image src="/city/ottawa/ottawa-cat.png" />
          <Box
            sx={{
              maxWidth: ['80vw', '60vw', '40vw'],
              padding: '40px',
              zIndex: 20,
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
              {/* TODO: Change Ottawa to your event's city */}
              What's Scrapyard Ottawa?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              {/* TODO: Change Ottawa to your event's city */}
              Scrapyard Ottawa is a hackathon for high schoolers
              {/* TODO: Change Ottawa to your event's city */}
              happening in Ottawa, where you can make the stupidest things you
              can think of! Anything, from a{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                lamp that flashes faster the slower you type
              </Link>
              , to those ideas that you wouldn't dare to consider to be useful,
              goes at Scrapyard. No matter your experience,
              Scrapyard Ottawa needs you and your scrappy ideas!
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
            {/* TODO: Change Ottawa to your event's city */}
            WHAT'S HAPPENING AT SCRAPYARD OTTAWA?
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
          {/* TODO: Change Ottawa to your event's city */}
          {/* TODO: Change [DURATION] to your event's duration (12hour, 24hour, 2-day) */}
          Scrapyard Ottawa is a 24 hour event - Here's a ROUGH schedule!
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

{/* Venue Information Section */}
<Box          
  sx={{
background: "white",
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    maxWidth: '1000px',
    marginBottom: '50px',
    marginTop: '50px'
  }}
>
<Box
          sx={{
            position: 'absolute',
            width: '80%',
            height: "auto",
            maxWidth: '1000px',
            zIndex: 1,
            display: ['none', 'none', 'block']
          }}
        >
          <Image
            src="/elements/thumbtack.png"
            sx={{ position: "relative", left: '5%', top: '100%', width: '10%' }}
          />
  </Box>
<Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'blue',
              padding: '10px'
            }}
          >
            Where is Scrapyard Ottawa?
          </Heading>
  <Heading as="h2" sx={{textAlign: 'center'}}>
    The event will be held at <strong>Nokia</strong>!
  </Heading>
  <Heading as="h3" sx={{textAlign: 'center', marginTop: '10px' }}>
    600 March Rd, Kanata, ON K2K 2E6, Canada
  </Heading>
  <Heading as="h2" sx={{textAlign: 'center', marginTop: '10px' }}>
    Sign up today for a scrappy adventure. Spots are limited!
  </Heading>

</Box>

<Link
            href="https://forms.hackclub.com/scrapyard-signup?event=ottawa"
            target="_blank"
            style={{
              textDecoration: 'none',
              pointerEvents: 'auto'
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                filter: 'drop-shadow(1px 5px 5px #000)',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.5)'
                },
                transform: 'scale(1.3)',
                zIndex: 30,
                minWidth: '8em',
                padding: '15px',
                textDecoration: 'none',
                pointerEvents: 'auto',
                position: 'relative',
                m: 4
              }}
            >
              <Heading
                as="h2"
                sx={{
                  fontFamily: 'p22-stanyan',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: ['1.4em', '1.6em'],
                  textTransform: 'inherit!important',
                  width: '100%',
                  textDecoration: 'none',
                  pointerEvents: 'auto'
                }}
              >
                Sign&nbsp;up&nbsp;for&nbsp;Scrapyard
              </Heading>
            </Box>
          </Link>
          <img
          src="/elements/paper-top.png"
          style={{
            position: 'relative',
            top: '0px',
            right: '0px',
            width: '100%',
            transform: 'translateY(+10%)',
            zIndex: 20
          }}
        />
      </Box>
      
      <Box
  sx={{
    display: 'flex',
background: "url('/backgrounds/lined-paper.png')",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    paddingTop: '5vh', // Ensures space above
    paddingBottom: '5vh', // Ensures space below
    my: 10 // Increased vertical margin to prevent collisions
  }}
>

<Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.png)',
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
              textAlign: 'center',
              color: 'white',
            }}
          >
            {/* TODO: Change Ottawa to your event's city */}
            SPONSOR A <strong>MAGICAL</strong> WEEKEND
          </Heading>
          <Heading
            as="h3"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center',
              color: 'white',
            }}
          >
            {/* TODO: Change Ottawa to your event's city */}
            Help make a difference in the lives of high schoolers!
          </Heading>
        </Box>
        <Link
          // TODO: Change Ottawa to your event's slug (lowercase, dashed version of your event name), such as san-francisco for Scrapyard San Francisco
          href="https://hcb.hackclub.com/donations/start/ottawa"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              height: '15vh',
              width: ['20vw', '60vw', '30vw'],
              backgroundSize: '100% 100%',
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 20,
              padding: 0.5,
              my: 0.5
  }}
>
  <Heading
    as="h1"
    sx={{
            fontFamily: 'moonblossom',
            textAlign: 'center',
      margin: '8%',
                fontSize: ['1.7em', '1.8em'],
                textTransform: 'inherit!important',
                paddingY: ['15px', '0px']
              }}
  >
    {/* TODO: Change Ottawa to your event's city */}
              DONATE TO SCRAPYARD OTTAWA
  </Heading>
  </Box>
        </Link>
        <Heading
              as="h3"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '1%',
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                paddingY: ['10px', '0px'],
                marginTop: '30px'
              }}
            >
              {/* TODO: Change Ottawa to your event's city */}
              Thank you to our generous Sponsors!
            </Heading>
            <Box
  sx={{
    background: "white",
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    maxWidth: '1000px',
    marginBottom: '50px'
  }}
>
  {/* Title Sponsor (Largest) */}
  <Link href="https://www.thalesgroup.com/en" target="_blank" aria-label="Thales">
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        src="/city/ottawa/thales.jpg"
        alt="Thales Title Sponsor"
        sx={{ 
          width: "100%", 
          maxWidth: '750px', 
          transition: 'transform 0.1s', 
          ':hover': { transform: 'scale(1.1) translateY(-4px)' } 
        }}
      />
    </Box>
  </Link>

  {/* Row 1: Large Logos */}
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', // Centers vertically 
      gap: '40px', 
      flexWrap: 'wrap', 
      marginTop: '20px' 
    }}
  >
    <Link href="https://www.nokia.com/about-us/careers/our-locations/canada/" target="_blank" aria-label="Nokia">
        <Image
          src="/city/ottawa/Nokia.png"
          alt="Nokia"
          sx={{ 
            width: "100%", 
            maxWidth: '450px', 
            transition: 'transform 0.1s', 
            ':hover': { transform: 'scale(1.1) translateY(-4px)' } 
          }}
        />
    </Link>

    <Link href="https://www.rossvideo.com/" target="_blank" aria-label="Ross Video">
        <Image
          src="/city/ottawa/ross.png"
          alt="Ross Video"
          sx={{ 
            width: "90%", 
            maxWidth: '350px', 
            transition: 'transform 0.1s', 
            ':hover': { transform: 'scale(1.1) translateY(-4px)' } 
          }}
        />
    </Link>
  </Box>

  {/* Row 2: Medium Logos */}
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', // Centers vertically
      gap: "150px", 
      flexWrap: 'wrap', 
      marginTop: '30px' 
    }}
  >
    <Link href="https://www.wesleyclover.com/" target="_blank" aria-label="Wesley Clover">
        <Image
          src="/city/ottawa/wesley_clover.png"
          alt="Wesley Clover"
          sx={{ 
            width: "150%",
            maxWidth: '600px', 
            transition: 'transform 0.1s', 
            ':hover': { transform: 'scale(1.1) translateY(-4px)' } 
          }}
        />
    </Link>

    <Link href="https://gen.xyz/" target="_blank" aria-label="XYZ">
        <Image
          src="/city/ottawa/xyz.png"
          alt="XYZ"
          sx={{ 
            width: "80%",
            maxWidth: '200px', 
            transition: 'transform 0.1s', 
            ':hover': { transform: 'scale(1.1) translateY(-4px)' }
          }}
        />
    </Link>
  </Box>

  {/* Row 3: Smallest Logos
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', // Centers vertically
      gap: '40px', 
      flexWrap: 'wrap', 
      marginTop: '30px' 
    }}
  >
    <Link href="https://saily.com/" target="_blank" aria-label="Saily">
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src="/city/hamilton/saily.png"
          alt="Saily"
          sx={{ 
            width: ['40%', '35%', '30%'], 
            maxWidth: '250px', 
            transition: 'transform 0.1s', 
            ':hover': { transform: 'scale(1.1) translateY(-4px)' } 
          }}
        />
      </Box>
    </Link>
  </Box> */}
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
            {/* TODO: Change Ottawa to your event's city */}
            CAN'T MAKE IT TO OTTAWA?
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
              <>
                Yep! Food, swag and good vibes are all included. Plus, if you’re
                joining us from afar,{' '}
                <Link href="https://gas.hackclub.com/">
                  we’ll cover the cost of gas or a bus / train ticket
                </Link>
                .
              </>
            ),
            'What do I need?': (
              <>
                Your laptop, chargers, toiletries, any method of identification (photo preferred), your signed constent form, a refillable water bottle, and an open mind! Since it’s a 24-hour event, you might want to bring a sleeping bag, a pillow, and some deodorant.
              </>
            ),
            'I’m not good at coding. Can I still participate?': (
              <>
                This hackathon is for creatives of all skill levels! We'll have
                workshops and other events so join us and let's learn together.
                If you'd like to start exploring some introductory projects,
                check out <Link href='https://workshops.hackclub.com/'>Hack Club Workshops</Link>.
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
                We’re here to help! Ask them to reach out to {' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="mailto:tishya.ottawa@scrapyard.hackclub.com">
                  {/* TODO: Change this email to your event's email */}
                  tishya.ottawa@scrapyard.hackclub.com
                </Link>{' '}
                and we'll make sure to answer all their questions.
              </>
            ),
            'What if I have more questions?': (
              <>
                {/* TODO: Change [SLACKCHANNEL] to the name of your event's Slack channel */}
                Contact us! Feel free to reach out to us in the #scrapyard-ottawa
                channel on the Hack Club slack or email us at{' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="tishya.ottawa@scrapyard.hackclub.com">
                  {/* TODO: Change this email to your event's email */}
                  tishya.ottawa@scrapyard.hackclub.com
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
            href="https://forms.hackclub.com/scrapyard-signup?event=ottawa"
            target="_blank"
            style={{
              textDecoration: 'none',
              pointerEvents: 'auto'
            }}
          >
            <Box
              sx={{
                backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                filter: 'drop-shadow(1px 5px 5px #000)',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: 'scale(1.5)'
                },
                transform: 'scale(1.3)',
                zIndex: 30,
                minWidth: '8em',
                padding: '15px',
                textDecoration: 'none',
                pointerEvents: 'auto',
                position: 'relative',
                m: 4
              }}
            >
              <Heading
                as="h2"
                sx={{
                  fontFamily: 'p22-stanyan',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: ['1.4em', '1.6em'],
                  textTransform: 'inherit!important',
                  width: '100%',
                  textDecoration: 'none',
                  pointerEvents: 'auto'
                }}
              >
                Sign&nbsp;up&nbsp;for&nbsp;Scrapyard
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
