// `npm run dev` to start local server

import Head from 'next/head'
import { Box, Button, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

const schedule = [
  { time: '10:00 AM', event: 'Gates Open and Registration' },
  { time: '11:00 AM', event: 'Opening Ceremony' },
  { time: '11:30 AM', event: 'Ice Breakers' },
  { time: '11:45 AM', event: 'Breakfast' },
  { time: '12:15 PM', event: 'Workshops' },
  { time: '1:15 PM', event: 'Lunch' },
  { time: '2:00 PM', event: 'Working Session' },
  { time: '4:15 PM', event: 'Workshops' },
  { time: '5:15 PM', event: 'Working Session' },
  { time: '6:15 PM', event: 'Workshops' },
  { time: '7:15 PM', event: 'Dinner' },
  { time: '8:15 PM', event: 'Lightning Talks' },
  { time: '10:00 PM', event: 'Sleep' },
  { time: '12:00 AM', event: 'Midnight Surprise' },
  { time: '4:30 AM', event: 'Breakfast (Ramadan)' },
  { time: '8:00 AM', event: 'Showers' },
  { time: '9:00 AM', event: 'Breakfast' },
  { time: '10:00 AM', event: 'Workshops' },
  { time: '11:00 AM', event: 'Working Session' },
  { time: '12:00 PM', event: 'Side Activity' },
  { time: '1:00 PM', event: 'Lunch' },
  { time: '2:00 PM', event: 'Final Hour of Work' },
  { time: '3:00 PM', event: 'Submissions' },
  { time: '3:30 PM', event: 'Judging' }
]

const sponsorLogos = [
  {img:'/city/sydney/sponsors/polymaker.png', link:'https://www.polymaker.com/'},
  {img:'/city/sydney/sponsors/littlebirdelectronics.png', link:'https://www.littlebird.com.au/'},
  {img:'/city/sydney/sponsors/matrixedu.png', link:'https://www.matrix.edu.au/'},
  {img:'/city/sydney/sponsors/engineersaustralia.png', link:'https://www.engineersaustralia.org.au/'},
  // {img: '/city/sydney/sponsors/scpartners.png', link: 'https://www.sccpasia.com/'},
]
const NotSoScrollingBanner = () => {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '80vw', maxWidth: '500px' }}>
      <motion.div
        style={{ display: 'inline-block' }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Duplicate the logos to create a seamless loop */}
        {[...sponsorLogos,...sponsorLogos].map((logo, index) => (
          <a href={logo.link} target="_blank" key={index}>
          <img
            key={index}
            src={logo.img}
            alt={`Sponsor ${logo.link}`}
            style={{ height: '20vw', maxHeight: '85px', margin: '0 20px' }}
          />
          </a>
        ))}
      </motion.div>
    </div>
  )
}

const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Wayfinder = () => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      style={{
        width: '26px',
        height: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: '#F5F5F5',
        color: 'var(--colour)',
        boxShadow: '0px 2px 4px 0px'
      }}
      initial={{ '--colour': 'rgba(0, 0, 0, 0.25)' }}
      whileInView={{ '--colour': '#F68887' }}
      viewport={{ margin: '-30% 0px -30% 0px' }}
    >
      <motion.div
        style={{
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          background: 'var(--colour)',
          boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.25) inset'
        }}
        initial={{ '--colour': 'rgba(0, 0, 0, 0.25)' }}
        whileInView={{ '--colour': '#F68887' }}
        viewport={{ margin: '-30% 0px -30% 0px' }}
      ></motion.div>
    </motion.div>
  )
}

const Wayfinder1 = () => {
  const ref1 = useRef(null)

  return (
    <motion.div
      ref={ref1}
      style={{
        width: '18px',
        height: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: '#F5F5F5',
        color: 'var(--colour)',
        boxShadow: '0px 2px 4px 0px'
      }}
      initial={{ '--colour': 'rgba(0, 0, 0, 0.25)' }}
      whileInView={{ '--colour': '#F68887' }}
      viewport={{ margin: '-30% 0px -30% 0px' }}
    >
      <motion.div
        style={{
          width: '9px',
          height: '9px',
          borderRadius: '50%',
          background: 'var(--colour)',
          boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.25) inset'
        }}
        initial={{ '--colour': 'rgba(0, 0, 0, 0.25)' }}
        whileInView={{ '--colour': '#F68887' }}
        viewport={{ margin: '-30% 0px -30% 0px' }}
      ></motion.div>
    </motion.div>
  )
}

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
        ':hover': { transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)' }
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
        <title>Scrapyard Sydney</title>
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
        <Box sx={{ position: 'relative' }}>
          <Image
            sx={{
              width: '600px',

              maxWidth: '70vw',

              objectFit: 'contain'
            }}
            src="/city/sydney/wordmark.svg"
            alt="Scrapyard Sydney logo"
          />
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        ></Box>
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
              height: 'fit-content',
              paddingBottom: '8%',
              paddingTop: '7%',
              paddingLeft: '7%',
              paddingRight: '7%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'min(500px, calc(100vw - 30px))',
              filter: 'drop-shadow(5px 5px 5px #000000AA)',
              position: 'relative',
              zIndex: 20
            }}
          >
            <Text
              sx={{
                fontFamily: 'p22-stanyan',
                fontSize: '2rem',
                marginLeft: '30px',
                color: 'black',
                fontStyle: 'italic',
                alignText: 'center',
                transform: 'translateY(7px)'
              }}
            >
              Building happens here.
            </Text>
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
              Sydney - March&nbsp;15-16
            </Heading>
          </Box>
        </Box>
        <Box
          style={{
            // background: "url('/elements/ripped-paper.png')",
            // backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            // height: 'fit-content',
            // paddingBottom: '3%',
            // paddingTop: '0%',
            // paddingLeft: '1%',
            // paddingRight: '1%',
            // marginTop: "5px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 9
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              marginBottom: '10px',
              fontFamily: 'moonblossom',
              fontWeight: '400',
              color: '#f0f0f0',

              maxWidth: '80vw'
            }}
          >
            This event is made possible by our sponsors
          </Text>
          <NotSoScrollingBanner style={{ zIndex: 9 }} />
        </Box>
        <Box sx={{ position: 'absolute', width: '100%', height: '100vw' }}>
          <motion.div
            style={{
              position: 'absolute',
              top: '40%',
              left: '10%',
              width: '10%',
              height: '10%',
              zIndex: 2
            }}
            initial={{ transform: 'translateY(0px)' }}
            animate={{ transform: 'translateY(-40px)' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          >
            <Image
              src="/elements/stars/blue.png"
              alt="Blue paper star"
              draggable="false"
            />
          </motion.div>
          <motion.div
            style={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '50%',
              right: '15%'
            }}
            initial={{ transform: 'translateY(0px)' }}
            animate={{ transform: 'translateY(-25px)' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          >
            <Image
              src="/elements/stars/yellow.png"
              alt="Yellow paper star"
              draggable="false"
            />
          </motion.div>
          <motion.div
            style={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '65%',
              left: '20%'
            }}
            initial={{ transform: 'translateY(0px)' }}
            animate={{ transform: 'translateY(-40px)' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          >
            <Image
              src="/elements/stars/pink.png"
              alt="Pink paper star"
              draggable="false"
            />
          </motion.div>
        </Box>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=sydney"
          target="_blank"
          draggable="false"
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
              ':hover': { transform: 'scale(1.1)' },
              zIndex: 30,
              minWidth: '8em',
              padding: '15px'
            }}
            draggable="false"
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
          draggable="false"
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
          <Image src="/elements/orpheus-doodle.svg" draggable="false" />
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
            <Heading sx={{ textDecoration: 'underline' }}>
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              What's Scrapyard Sydney?
            </Heading>
            <p style={{ fontSize: '1.5em' }}>
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              Scrapyard Sydney is a hackathon for high schoolers
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              happening in Sydney, where you can make the stupidest things you
              can think of! Anything, from a{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                lamp that flashes faster the slower you type
              </Link>
              , to those ideas that you wouldn't dare to consider to be useful,
              goes at Scrapyard. No matter your experience, Scrapyard Sydney
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
            display: ['none', 'none', 'block'],
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <Image
            src="/elements/doodles/arrow.svg"
            draggable="false"
            sx={{ position: 'absolute', left: '5%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/pinkcircle.svg"
            draggable="false"
            sx={{ position: 'absolute', left: '20%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/yellowcircle.svg"
            draggable="false"
            sx={{ position: 'absolute', left: '8%', top: '70%' }}
          />
          <Image
            src="/elements/doodles/bluesquiggle.svg"
            draggable="false"
            sx={{ position: 'absolute', left: '8%', top: '84%' }}
          />
          <Image
            src="/elements/doodles/yellowlines.svg"
            draggable="false"
            sx={{ position: 'absolute', left: '37%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluecircle.svg"
            draggable="false"
            sx={{ position: 'absolute', right: '30%', top: '78%' }}
          />
          <Image
            src="/elements/doodles/pinksquiggle.svg"
            draggable="false"
            sx={{ position: 'absolute', right: '10%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluedrops.svg"
            draggable="false"
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
            sx={{ mx: '1vw', fontWeight: 'lighter', textAlign: 'center' }}
          >
            {/* TODO: Change [EXAMPLECITY] to your event's city */}
            WHAT'S HAPPENING AT SCRAPYARD SYDNEY?
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
          Scrapyard Sydney is a 24 hour event - HERE'S THE ROUGH SCHEDULE!
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
              style={{ display: 'flex', width: '100%', alignItems: 'center' }}
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
      ></Box>

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
        <Heading as="h1" sx={{ mb: 5, position: 'relative' }}>
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
        <Grid columns={[1, 1, 1, 2]} gap={4} sx={{ maxWidth: '1200px' }}>
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
                overnight event, bring toiletries and sleeping bags too.
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
                <Link href="mailto:sydney@scrapyard.hackclub.com">
                  {/* TODO: Change this email to your event's email */}
                  sydney@scrapyard.hackclub.com
                </Link>{' '}
                for questions.
              </>
            ),
            'What if I have more questions?': (
              <>
                {/* TODO: Change [SLACKCHANNEL] to the name of your event's Slack channel */}
                Contact us! Feel free to reach out to us in the
                #scrapyard-sydney channel on the Hack Club slack or email us at{' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="mailto:sydney@scrapyard.hackclub.com">
                  {/* TODO: Change this email to your event's email */}
                  sydney@scrapyard.hackclub.com
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
                <Heading as="h2" mb={4} sx={{ position: 'relative' }}>
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
                <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>{answer}</Text>
              </Card>
            )
          })}
        </Grid>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=sydney"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': { transform: 'scale(1.1)' },
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
                paddingY: ['2px', '0px'],
                lineHeight: ['1.5em', '1.5em']
              }}
            >
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              SIGN UP FOR SCRAPYARD SYDNEY
            </Heading>
          </Box>
        </Link>
        <Heading as="h2" sx={{ mt: 3, position: 'relative' }}>
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
        <Text sx={{ fontFamily: 'moonblossom', mb: -2, textAlign: 'center' }}>
          Made with ♡ by teenagers, for teenagers at Hack Club
        </Text>
        <Text sx={{ fontFamily: 'moonblossom', mt: 0, textAlign: 'center' }}>
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
