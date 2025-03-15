import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'
import MemberSection from '../components/city/hyderabad/MemberSection'


const schedule = [
  { time: '07:00 AM', event: 'Doors open' },
  { time: '08:00 AM', event: 'Opening ceremony' },
  { time: '09:00 AM', event: 'Workshops' },
  { time: '10:00 AM', event: 'Snacks' },
  { time: '10:30 AM', event: 'Start working on your project!' },
  { time: '01:00 PM', event: 'Lunch' },
  { time: '01:30 PM', event: 'Continue Hacking!' },
  { time: '04:00 PM', event: 'Snacks' },
  { time: '04:30 PM', event: 'Final Coding and Debugging!' },
  { time: '06:30 PM', event: 'Demos and Submission!' },
  { time: '07:30 PM', event: 'Closing Ceremony' },
  { time: '08:00 PM', event: 'Doors Close' },
]

const ourTeam = [
  {
    name: 'Joel Joby',
    email: 'joeljobyp@gmail.com',
    linkedInUsername: '@joeljoby',
    linkedInProfile: 'https://www.linkedin.com/in/joeljoby/',
    designation: 'Head of Operations and Marketing',
    imgSrc: 'https://ca.slack-edge.com/T0266FRGM-U07963V1L0Y-5787e0ac2390-192'
  },
  {
    name: 'Shailesh Saravanan',
    email: 'shaileshsaravanan385@gmail.com',
    linkedInUsername: 'notshailesh',
    linkedInProfile: 'linkedin.com/in/notshailesh',
    designation: 'Outreach & Marketing',
    imgSrc: 'https://ca.slack-edge.com/T0266FRGM-U078ML6LJ5C-2601b8c19bbf-512'
  },
  {
    name: 'Milan Sampath',
    email: 'milangs4606@gmail.com',
    linkedInUsername: 'N/A',
    linkedInProfile: '#',
    designation: 'Design',
    imgSrc: 'https://ca.slack-edge.com/T0266FRGM-U07NGDU5PPT-1b3527a11582-192'
  },
  {
    name: 'Dhruv Tiwari',
    email: 'dhruv.d.tiwari@gmail.com',
    linkedInUsername: '@dhruv-tiwari-dev',
    linkedInProfile: 'https://www.linkedin.com/in/dhruv-tiwari-dev/',
    designation: 'Operations & Marketing',
    imgSrc: '/city/bengaluru/organizers/dhruv.png'
  },
  // {
  //   name: 'Aahem',
  //   email: 'hvkatta@gmail.com',
  //   linkedInUsername: '@hima-vamsi-katta',
  //   linkedInProfile:
  //     'https://files.slack.com/files-tmb/T0266FRGM-F08HNL2EN5U-3d1893d4f8/newpfp_720.jpg',
  //   designation: 'Designs & ID cards',
  //   imgSrc: ''
  // },
  // {
  //   name: 'Arnav',
  //   email: 'hvkatta@gmail.com',
  //   linkedInUsername: '@hima-vamsi-katta',
  //   linkedInProfile:
  //     'https://files.slack.com/files-tmb/T0266FRGM-F08HNL2EN5U-3d1893d4f8/newpfp_720.jpg',
  //   designation: 'Sponsors',
  //   imgSrc: ''
  // },
  // {
  //   name: 'Adarsh',
  //   email: 'hvkatta@gmail.com',
  //   linkedInUsername: '@hima-vamsi-katta',
  //   linkedInProfile:
  //     'https://files.slack.com/files-tmb/T0266FRGM-F08HNL2EN5U-3d1893d4f8/newpfp_720.jpg',
  //   designation: 'Outreach',
  //   imgSrc: ''
  // }
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

const TeamGrid = ({ title, members }) => (
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
        height: '30vh',
        width: ['90vw', '70vw', '46.8vw'],
        alignItems: 'center',
        justifyContent: 'center',
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
        {title}
      </Heading>
    </Box>
    <Grid columns={[1, 3]} gap="25px" sx={{ maxWidth: '1600px' }}>
      {members.map((member, index) => (
        <MemberSection key={index} member={member} />
      ))}
    </Grid>
  </Box>
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
        <title>Scrapyard Bengaluru</title>
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
            src="https://cdn.hack.pet/slackcdn/8e1391a9c4d8af37a3192a870ca4f704.png"
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
                fontSize: ['1.2em', '1.3em']
              }}
            >
              Bengaluru - March&nbsp;16th @
              <Link
                href="https://maps.app.goo.gl/G46eciLCZsvhhbKw8"
                target="_blank"
              >
                The Hub Bengaluru
              </Link>
            </Heading>
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', width: '100%', height: '100vw' }}>
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
          href="https://forms.hackclub.com/scrapyard-signup?event=bengaluru"
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
            <Heading sx={{ textDecoration: 'underline' }}>
              What's Scrapyard Bengaluru?
            </Heading>
            <p style={{ fontSize: '1.5em' }}>
              Scrapyard Bengaluru is a hackathon for high schoolers happening in
              Bengaluru, where you can make the stupidest things you can think
              of! Anything, from a
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                &nbsp;lamp that flashes faster the slower you type
              </Link>
              , to those ideas that you wouldn't dare to consider to be useful,
              goes at Scrapyard. No matter your experience, Scrapyard Bengaluru
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
            sx={{ position: 'absolute', left: '37%', top: '100%' }}
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

        {/* SPONSORS SECTION BELOW "What's Scrapyard Bengaluru?" */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 5
          }}
        >
          <Heading as="h2" sx={{ fontFamily: 'moonblossom', mb: 3 }}>
            Our Sponsors
          </Heading>

          <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
            <Box
              sx={{
                width: '400px', // spans two square boxes (2 x 200px)
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid black',
                backgroundColor: '#fff'
              }}
            >
              <Link href="https://sentry.io" target="_blank">
                <Image
                  src="https://i.ibb.co/FbYjWYtK/sentry-wordmark-dark-400x119.png"
                  alt="Rectangle Sponsor"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </Box>
          </Box>

          <Grid columns={[1, 2, 3]} gap={4} sx={{ alignItems: 'center' }}>
            <Box
              sx={{
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid black',
                backgroundColor: '#fff'
              }}
            >
              <Link href="https://gen.xyz/" target="_blank">
                <Image
                  src="https://cloud-lni8iqe2t-hack-club-bot.vercel.app/0xyz-logo-color.png"
                  alt="Gen XYZ"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid black',
                backgroundColor: '#fff'
              }}
            >
              <Link href="https://codecrafters.io/" target="_blank">
                <Image
                  src="https://i.ibb.co/270S43xz/Logomark-With-color.png"
                  alt="Code Crafters"
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </Box>
            <Box
              sx={{
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid black',
                backgroundColor: '#fff'
              }}
            >
              <Link href="https://stickermule.com" target="_blank">
                <Image
                  src="https://i.ibb.co/WvTMy432/fabb97bf-0098-48ec-9f45-c47d23e97b28.webp"
                  alt="Sticker Mule"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </Box>
          </Grid>

          {/*
          // Additional row of square sponsors (commented out for now)
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              my: 5
            }}
          >
            <Heading as="h2" sx={{ fontFamily: 'moonblossom', mb: 3 }}>
              More Sponsors
            </Heading>
            <Grid columns={[1, 2, 3]} gap={4} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid black',
                  backgroundColor: '#fff'
                }}
              >
                <Link href="https://example.com/sponsor4" target="_blank">
                  <Image
                    src="https://via.placeholder.com/200"
                    alt="Sponsor 4"
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid black',
                  backgroundColor: '#fff'
                }}
              >
                <Link href="https://example.com/sponsor5" target="_blank">
                  <Image
                    src="https://via.placeholder.com/200"
                    alt="Sponsor 5"
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid black',
                  backgroundColor: '#fff'
                }}
              >
                <Link href="https://example.com/sponsor6" target="_blank">
                  <Image
                    src="https://via.placeholder.com/200"
                    alt="Sponsor 6"
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Link>
              </Box>
            </Grid>
          </Box>
          */}
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
      />

      <Box
        sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
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
            WHAT'S HAPPENING AT SCRAPYARD BENGALURU?
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
          Scrapyard BENGALURU is a 12-HOUR event - HERE'S THE ROUGH SCHEDULE!
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
              />
              <p style={{ display: 'inline', margin: 0 }}>{item.time}</p>
            </div>
          ))}
        </Box>
      </Box>
      <TeamGrid title="Our Team" members={ourTeam} />
      <Box
        sx={{
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
            CAN'T MAKE IT TO BENGALURU?
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
        <Grid columns={[1, 1, 1, 2]} gap={4} sx={{ maxWidth: '1200px' }}>
          {Object.entries({
            'Who can participate in Scrapyard?': (
              <>
                All high-school & upper-middle-school aged students are welcome
                to come!
              </>
            ),
            'All this, for free?': (
              <>
                Yep! Food, swag and good vibes are all included.
                .
              </>
            ),
            'What do I need?': (
              <>
                Your laptop, chargers, and an open mind! If it's an overnight
                event, bring toiletries/sleeping bag, plus any hardware tools
                you need.
              </>
            ),
            'I’m not good at coding. Can I still participate?': (
              <>
                This is for creatives of all skill levels! We'll have workshops
                and events, so join us and let's learn together.
              </>
            ),
            'What can I make at Scrapyard?': (
              <>
                The scrappiest thing you can imagine – jank is encouraged.
                Games, apps, websites, hardware, anything goes!
              </>
            ),
            'What has Hack Club done before?': (
              <>
                Hack Club has run many unique events, like an
                <Link href="https://youtu.be/PnK4gzO6S3Q" target="_blank">
                  &nbsp;overnight hackathon in SF
                </Link>
                , a
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                >
                  &nbsp;Game Jam
                </Link>
                , a hackathon on a
                <Link href="https://youtu.be/2BID8_pGuqA" target="_blank">
                  &nbsp;Train
                </Link>
                , and more.
              </>
            ),
            'What if my parents are concerned?': (
              <>
                We’re here to help! A parents guide will be out soon. They can
                also email
                <Link href="mailto:bengaluru@scrapyard.hackclub.com">
                  &nbsp;bengaluru@scrapyard.hackclub.com
                </Link>
                .
              </>
            ),
            'What if I have more questions?': (
              <>
                Reach out in #scrapyard-bengaluru on Slack or email
                <Link href="mailto:bengaluru@scrapyard.hackclub.com">
                  &nbsp;bengaluru@scrapyard.hackclub.com
                </Link>
                .
              </>
            )
          }).map(([question, answer], i) => (
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
              <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>{answer}</Text>
            </Card>
          ))}
        </Grid>
        <Link
          href="https://forms.hackclub.com/scrapyard-signup?event=bengaluru"
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
              SIGN UP FOR SCRAPYARD BENGALURU
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
        <Text sx={{ fontFamily: 'moonblossom', mb: -2, textAlign: 'center' }}>
          Made with ♡ by teenagers, for teenagers at Hack Club
        </Text>
        <Text sx={{ fontFamily: 'moonblossom', mt: 0, textAlign: 'center' }}>
          <Link href="https://hackclub.com">Hack Club</Link>
          <span sx={{ transform: 'scale(2)' }}>・</span>
          <Link href="https://hackclub.com/slack">Slack</Link>
          <span sx={{ transform: 'scale(2)' }}>・</span>
          <Link href="https://hackclub.com/clubs">Clubs</Link>
          <span sx={{ transform: 'scale(2)' }}>・</span>
          <Link href="https://hackclub.com/hackathons">Hackathons</Link>
        </Text>
      </Box>
    </Box>
  )
}
