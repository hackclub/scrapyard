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
  { time: '08:30 AM', event: 'Doors open' },
  { time: '09:00 AM', event: 'Opening ceremony' },
  { time: '09:35 AM', event: 'Workshop 1' },
  { time: '11:30 AM', event: 'Workshop 2' },
  { time: '01:50 PM', event: 'Workshop 3' },
  { time: '03:25 PM', event: 'Team Formation' },
  { time: '03:40 PM', event: 'Workshop 4' },
  { time: '05:30 PM', event: 'Make Extraordinary Projects & Win Prizes and Certificates' },
  { time: '07:45 PM', event: 'Announcement of Winners' },
  { time: '07:55 PM', event: 'Closing ceremony' }
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

export default function ExampleCity() {
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
        <title>Scrapyard Metro Manila</title>
      </Head>
      <Flag />
      <Box
        sx={{
          width: '100%',
          height: ['90vh', '90vh', '100vh'],
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            position: 'relative',
            marginTop: '200px', 
          }}
        >
          <Image
            sx={{
              width: '800px',
              maxWidth: '90vw',
              objectFit: 'contain'
            }}
            src="\city\manila\scrapyard-mla.png"
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
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              The Globe Tower, BGC - March&nbsp;15,2025
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

         {/*Co-Presented by*/}
          <Box
            sx={{
              background: "url('/elements/ripped-paper-strip.svg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              width: 'min(350px, calc(80vw - 30px))',
              height:'500px',
              filter: 'drop-shadow(5px 5px 5px #000000AA)',
              position: 'relative',
              textAlign:'center',
              zIndex: 1,
              backgroundSize: '100% 100%',
              position: 'relative',
              top: '-10%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '3%',
              zIndex: 30,
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            <Box sx={{ paddingTop: '120px' }}> 
              <Heading
                as="h1"
                sx={{
                  fontFamily: 'moonblossom',
                  textAlign: 'center',
                  fontSize: '2.5em',
                }}
              >
                Co-Presented By:
              </Heading>
            </Box>
            <Image src="\city\manila\globe.png" 
              sx={{ maxWidth: '70%', paddingTop:'10%', 
                     }}/>

          </Box>

          
         

        {/*Social Media Nav Bar*/}

        <Box
          sx={{
            backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            position: 'fixed',
            right: ['42%'],
            top: ['4%'],
            filter: 'drop-shadow(5px 5px 5px #000)',
            transition: 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.1)'
            },
            zIndex: 30,
            minWidth: '8em',
            padding: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            paddingRight: '30px'
          }}
        >
          <Link href="https://www.facebook.com/profile.php?id=61568321672234">
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
              Facebook
            </Heading>
          </Link>

          <Link href="https://www.instagram.com/hack_club_philippines?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
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
              Instagram
            </Heading>
          </Link>
        </Box>

        <Link
          // TODO: Change [SLUG] to your event's slug (lowercase, dashed version of your event name), such as san-francisco for Scrapyard San Francisco
          href="https://forms.hackclub.com/scrapyard-signup?event=metro-manila"
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
          <Image src="\city\manila\scrapyard-grp-pic.png" />
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
              What's Scrapyard Metro Manila?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              Scrapyard Metro Manila is a hackathon for high schoolers
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              &nbsp;happening in Metro Manila, where you can make the stupidest
              things you can think of! Anything, from a{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                lamp that flashes faster the slower you type
              </Link>
              , to those ideas that you wouldn't dare to consider to be useful,
              goes at Scrapyard. No matter your experience, Scrapyard
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              Metro Manila needs you and your scrappy ideas!
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

      {/* Sponsors and Partners */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
       {/* Sponsors Section */}
       
       <Box
            sx={{
              position: 'relative',
              textAlign:'center',
              zIndex: 1,
              backgroundSize: '100% 100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '3%',
              zIndex: 30,
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            <Box sx={{ 
              paddingTop: '0px', 
              background: "url('/elements/ripped-paper-strip.svg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              width: 'min(550px, calc(80vw - 30px))',
              height: '120px',
              filter: 'drop-shadow(5px 5px 5px #000000AA)', }}> 
              <Heading
                as="h1"
                sx={{
                  
                  fontFamily: 'moonblossom',
                  textAlign: 'center',
                  fontSize: '3.2em',
                  color:'rgb(238, 129, 128)',
                  paddingTop:'55px',
                }}
              >
                Sponsored by:
              </Heading>
            </Box>
            <Image src="\city\manila\brainsparks.png" 
              sx={{ maxWidth: '80%', 
                    paddingTop:'60px', 
                 }}/>

          </Box>
            

        {/* Partners Section */}
        <Box
            sx={{
              position: 'relative',
              textAlign:'center',
              zIndex: 1,
              backgroundSize: '100% 100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '3%',
              zIndex: 30,
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            <Box sx={{ 
              background: "url('/elements/ripped-paper-strip.svg')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              width: 'min(550px, calc(80vw - 30px))',
              height: '120px',
              filter: 'drop-shadow(5px 5px 5px #000000AA)', }}> 
              <Heading
                as="h1"
                sx={{
                  
                  fontFamily: 'moonblossom',
                  textAlign: 'center',
                  fontSize: '3.2em',
                  color:'rgb(143, 196, 233)',
                  paddingTop:'55px',
                }}
              >
                Partners
              </Heading>
            </Box>
          </Box>

        {/* Partner Logos in a Single Row */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              alignItems: 'center', 
              width: '100%',
              gap: '20px', 
              mb:5,
            }}
          >
            {[
              "/city/manila/devcon-mnl.png",
              "/city/manila/kakacomputerx.png",
              "/city/manila/acadarena.png",
              "/city/manila/maia.png",
              "/city/manila/edukasyon-ph.png",
              "/city/manila/awsiklab.png",
              "/city/manila/pocky.png",
              "/city/manila/pintig.png",
            ].map((src, index) => (
              <Box key={index} sx={{ flexBasis: ['40%', '25%', '20%'], display: 'flex', justifyContent: 'center' }}>
                <Image src={src} sx={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            ))}
          </Box>

        </Box>


    {/*Schedule*/}
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
            WHAT'S HAPPENING AT SCRAPYARD METRO MANILA?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.9em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center'
          }}
        >
          {/* TODO: Change [EXAMPLECITY] to your event's city */}
          {/* TODO: Change [DURATION] to your event's duration (12hour, 24hour, 2-day) */}
          Scrapyard Metro Manila is a 12 hour event - HERE'S THE ROUGH
          SCHEDULE!
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

     {/* Venue Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: ['90vw', '70vw', '46.8vw'],
          margin: '0 auto',
          padding: '2vh 5vw',
        }}
      >
        {/* Venue Title */}
        <Heading
          as="h1"
          sx={{
            fontSize: '3.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          VENUE
        </Heading>

        {/* Venue Content: Address and Image Side by Side */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px',
          }}
        >
          {/* Address Button */}
        <Box
          sx={{
            width: '50%',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            padding: '20px',
            borderRadius: '10px', 
            backdropFilter: 'blur(10px)',
          }}
        >
          <Link
            href="https://www.google.com.sg/maps/place/The+Globe+Tower,+32nd+St,+Taguig,+1634+Metro+Manila"
            sx={{
              textDecoration: 'none',
              fontSize: '1.7em', 
              fontFamily: 'moonblossom',
              color: 'white',
              textAlign: 'center',
              display: 'block', 
              padding: '10px 15px',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
              ':hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
              },
            }}
          >
           📍 The Globe Tower Radiate, 2F, The Globe Tower, BGC
          </Link>
        </Box>


          {/* Venue Image */}
          <Box sx={{ 
            width: '80%', 
            display: 'flex', 
            justifyContent: 'center',
          }}>
            <Image
              src="/city/manila/venue.png"
              sx={{
                maxWidth: '100%', 
                height: 'auto',
                borderRadius: '10px', 
              }}
            />
          </Box>
        </Box>
      </Box>


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
            CAN'T MAKE IT TO METRO MANILA?
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
                {/* TODO: Change this email to your event's email */}
                <Link href="mailto:hackclubphilippines@gmail.com">
                  {/* TODO: Change this email to your event's email */}
                  hackclubphilippines@gmail.com
                </Link>{' '}
                for questions.
              </>
            ),
            'What if I have more questions?': (
              <>
                {/* TODO: Change [SLACKCHANNEL] to the name of your event's Slack channel */}
                Contact us! Feel free to reach out to us in the scrapyard-metro-manila
                channel on the Hack Club slack or email us at{' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="hackclubphilippines@gmail.com">
                  {/* TODO: Change this email to your event's email */}
                  hackclubphilippines@gmail.com
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
          // TODO: Change [SLUG] to your event's slug (lowercase, dashed version of your event name), such as san-francisco for Scrapyard San Francisco
          href="https://forms.hackclub.com/scrapyard-signup?event=metro-manila"
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
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              SIGN UP FOR SCRAPYARD METRO MANILA
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
