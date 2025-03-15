import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui';
import { FaExclamationTriangle } from 'react-icons/fa';

// Schedule remains the same
const scheduleDay1 = [
  {
    time: '10:00 AM',
    event: 'Doors Open & Check-In',
    icon: 'https://img.icons8.com/ios-filled/50/door.png',
  },
  {
    time: '10:15 AM',
    event: 'Opening Ceremony',
    icon: 'https://img.icons8.com/emoji/48/partying-face.png',
  },
  {
    time: '10:30 AM',
    event: 'Begin Hacking!',
    icon: 'https://img.icons8.com/emoji/48/hammer-and-wrench.png',
  },
  {
    time: '12:00 PM',
    event: 'Lunch',
    icon: 'https://img.icons8.com/ios-filled/50/meal.png',
  },
  {
    time: '2:00 PM',
    event: 'Workshop 1',
    icon: 'https://img.icons8.com/ios-filled/50/training.png', // Updated icon URL
  },
  {
    time: '4:00 PM',
    event: 'Fun Activity',
    icon: 'https://img.icons8.com/emoji/48/smiling-face-with-sunglasses.png',
  },
  {
    time: '5:00 PM',
    event: 'End of Day 1',
    icon: 'https://img.icons8.com/emoji/48/waving-hand-medium-dark-skin-tone.png',
  },
];

const scheduleDay2 = [
  {
    time: '9:00 AM',
    event: 'Doors Open & Check-In',
    icon: 'https://img.icons8.com/ios-filled/50/door.png',
  },
  {
    time: '9:30 AM',
    event: 'Begin Hacking!',
    icon: 'https://img.icons8.com/emoji/48/hammer-and-wrench.png',
  },
  {
    time: '12:00 AM',
    event: 'Lunch',
    icon: 'https://img.icons8.com/?size=100&id=CYgFsQyxgTod&format=png&color=000000',
  },
  {
    time: '2:00 PM',
    event: 'Submission Deadline',
    icon: 'https://img.icons8.com/?size=100&id=A90XZgNDIsOE&format=png&color=000000',
  },
  {
    time: '3:00 PM',
    event: 'Workshop 2',
    icon: 'https://img.icons8.com/?size=100&id=MmkqIRv7P6Xy&format=png&color=000000',
  },
  {
    time: '5:00 PM',
    event: 'Closing Ceremony',
    icon: 'https://img.icons8.com/emoji/48/partying-face.png',
  },
  {
    time: '6:00 PM',
    event: 'End of Scrapyard Seattle',
    icon: 'https://img.icons8.com/emoji/48/waving-hand-medium-dark-skin-tone.png',
  } 
]



const Flag = () => (
  <Link
    href="https://hackclub.com/"
    target="_blank"
    aria-label="Hack Club's homepage"
    sx={{ position: 'fixed', top: 4, left: 0, zIndex: 2 }}
  >
    <Image
      src="https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/orpheus-flag.svg"
      alt="Hack Club flag"
      sx={{
        width: [90, 120, 140],
        transformOrigin: '0% 0%',
        transition: 'transform 0.1s',
        ':hover': {
          transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)',
        },
      }}
    />
  </Link>
);

export default function Seattle() {
  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(51, 125, 120, 0.85), rgba(51, 125, 120, 0.85)), url('https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=2070&auto=format&fit=crop') no-repeat center center fixed`,
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >

      <Flag />

      <Link
        href="https://discord.gg/GZyDA3arZX"
        target="_blank"
        aria-label="Join our Discord!"
        sx={{ position: 'fixed', top: 4, right: 0, zIndex: 2 }}
      >
          <Image
          src="https://img.icons8.com/?size=100&id=86982&format=png&color=FFFFFF"
          alt="Hack Club flag"
          sx={{
            width: [60, 60, 90],
            backgroundColor: '#317975',
            border: '2px solid rgb(255, 255, 255)',
            marginRight: '10px',
            padding: '10px',
            borderRadius: '30%',
          }}
          />
      </Link>

      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: [4, 5],
          pb: [6, 7],
          px: [3, 4],
          backdropFilter: 'blur(5px)',
        }}
      >
        {/* Wordmark & Seattle skyline */}

        <Box sx={{ width: '100%', maxWidth: '1000px', textAlign: 'center', position: 'relative' }}>
          <Image
            sx={{
              width: ['260px', '340px', '420px'],
              maxWidth: '90%',
              mx: 'auto',
              objectFit: 'contain',
              mb: 4,
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
            }}
            src="https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/wordmark.svg"
            alt="Scrapyard Wordmark"
          />
          <Image
            sx={{
              width: '100%',
              maxWidth: '800px',
              height: ['180px', '240px', '300px'],
              objectFit: 'cover',
              mx: 'auto',
              borderRadius: '20px',
              boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.02)',
              },
            }}
            src="https://images.unsplash.com/photo-1538097304804-2a1b932466a9?q=80&w=2070&auto=format&fit=crop"
            alt="Pike Place Market"
          />
        </Box>

        {/* Tagline & Date */}
        <Box 
          sx={{ 
            maxWidth: '600px',
            width: '100%',
            mt: [4, 5],
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              background: `url('https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/ripped-paper.png')`,
              backgroundSize: 'cover',
              width: '100%',
              filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.25))',
              borderRadius: '16px',
              py: [3, 4],
              px: [4, 5],
              transform: 'rotate(-1deg)',
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                fontSize: ['1.6rem', '2rem', '2.4rem'],
                lineHeight: 1.2,
                transform: 'rotate(1deg)',
                color: '#337D78',
              }}
            >
              Build the silliest stuff & have a blast!
            </Heading>
          </Box>

          <Box
            sx={{
              backgroundImage: `url('https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/yellow-strip%40stretch.svg')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '70%',
              mx: 'auto',
              mt: '-1.5rem',
              py: [3, 4],
              filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.2))',
              transform: 'rotate(1deg)',
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                textAlign: 'center',
                fontSize: ['1.3rem', '1.6rem', '1.8rem'],
                whiteSpace: 'nowrap',
                transform: 'rotate(-1deg)',
                color: '#337D78',
              }}
            >
              Seattle — March&nbsp;15-16
            </Heading>
          </Box>
        </Box>
        <Box
            sx={{
              backgroundImage: `url('https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/yellow-strip%40stretch.svg')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '70%',
              mx: 'auto',
              mt: '-1.5rem',
              py: [3, 4],
              filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.2))',
              transform: 'rotate(1deg)',
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                textAlign: 'center',
                fontSize: ['1.3rem', '1.6rem', '1.8rem'],
                whiteSpace: 'nowrap',
                transform: 'rotate(-1deg)',
              }}
            >
              <Link
              href="https://forms.hackclub.com/scrapyard-signup?event=seattle"
              target="_blank"
              sx={{
                display: 'block',
                width: 'fit-content',
                mx: 'auto',
                mb: [2, 2],
              }}
              >
                Sign Up for Scrapyard Seattle
              </Link>           
            </Heading>
        </Box>
      </Box>

      {/* Info Section */}
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            zIndex: 0,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1400px',
            mx: 'auto',
            px: [3, 4, 5],
            py: [6, 7, 8],
          }}
        >
          <Box
            sx={{
              backgroundImage: `url('https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/sticky-note.svg')`,
              backgroundSize: 'cover',
              p: [5, 6],
              borderRadius: '30px',
              filter: 'drop-shadow(0 12px 48px rgba(0,0,0,0.3))',
              transform: 'rotate(1deg)',
              maxWidth: '1000px',
              mx: 'auto',
            }}
          >
            <Heading 
              sx={{ 
                fontSize: ['2.2rem', '2.8rem', '3.4rem'],
                mb: 5,
                textDecoration: 'underline',
                textDecorationThickness: '6px',
                textUnderlineOffset: '12px',
                transform: 'rotate(-1deg)',
                textAlign: 'center',
                color: '#337D78',
              }}
            >
              What's Scrapyard Seattle?
            </Heading>
            <Text sx={{ 
              fontSize: ['1.4rem', '1.6rem', '1.8rem'],
              lineHeight: 1.6,
              transform: 'rotate(-1deg)',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: '#000',
            }}>
              Scrapyard Seattle is a hackathon for high schoolers, happening in
              the Emerald City! Over 2 days, we'll build silly, creative
              projects—from blinking lamps to quirky apps—no idea is too wild.
              No experience needed! We'll have workshops, mentors, and new
              friends waiting for you.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Schedule Section */}
        <Box 
          sx={{ 
            py: [6, 7], 
            px: [3, 4],
            background: 'rgba(51, 125, 120, 0.97)',
            backdropFilter: 'blur(10px)',
          
          }}
        >
          <Box
            sx={{
          backgroundImage: `url('https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/ripped-paper-strip.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          py: [4, 5],
          px: [4, 5],
          maxWidth: '800px',
          mx: 'auto',
          textAlign: 'center',
          mb: [4, 5],
          filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.15))',
            }}
          >
            <Heading
          as="h1"
          sx={{
            fontSize: ['1.5rem', '2.0rem', '2.2rem'],
            fontWeight: 'normal',
            transform: 'rotate(-1deg)',
            color: '#337D78', // updated color to match the theme
          }}
            >
          WHAT'S HAPPENING AT SCRAPYARD SEATTLE?
            </Heading>
          </Box>

          <Box
          sx={{
            textAlign: 'center',
            mb: [4, 5],
            fontSize: ['2.0rem', '2.4rem', '2.6rem'],
            color: 'yellow', // updated color to yellow
            fontWeight: '',
          }}
          >
          <FaExclamationTriangle style={{ marginRight: '0.5rem' }} />
          <Text>
            Work in Process!
            Schedule subject to change.
          </Text>
        </Box>
          
          <Box
            sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '900px',
          mx: 'auto',
          background: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(10px)',
          p: [4, 5],
          borderRadius: '20px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.2)',
          marginBottom: '2rem',
          }}
          >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ':last-child': { mb: 0 },
              fontSize: ['1.2rem', '1.4rem', '1.6rem'],
              color: 'rgb(0, 0, 0)',
            }}
          >
            <text sx={{
              fontSize: ['1.5rem', '1.8rem', '2.0rem'],
              fontWeight: 'bold',
            }}>
              Day 1: Saturday, March 15
            </text>
          </Box>

            {scheduleDay1.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              mb: 4,
              ':last-child': { mb: 0 },
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              p: 3,
              borderRadius: '12px',
              ':hover': {
            transform: 'translateX(8px)',
            backgroundColor: 'rgba(51, 125, 120, 0.1)',
              },
            }}
          >
            {item.icon && (
              <Image
            src={item.icon}
            alt=""
            sx={{
              width: ['32px', '36px', '40px'],
              height: ['32px', '36px', '40px'],
              flexShrink: 0,
            }}
              />
            )}
            <Heading
              as="p"
              sx={{
            fontSize: ['1.1rem', '1.3rem', '1.5rem'],
            fontFamily: 'p22-stanyan',
            m: 0,
            flexGrow: 1,
            color: '#337D78',
              }}
            >
              {item.event}
            </Heading>
            <Box
              sx={{
            borderBottom: '3px dotted black',
            flexGrow: 1,
            mx: 3,
              }}
            />
            <Text sx={{ 
              fontSize: ['1rem', '1.1rem', '1.2rem'],
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              color: '#337D78',
            }}>
              {item.time}
            </Text>
          </Box>
            ))}

          </Box>


          <Box
            sx={{
          maxWidth: '900px',
          mx: 'auto',
          background: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(10px)',
          p: [4, 5],
          borderRadius: '20px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.2)',
            }}
          >

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              ':last-child': { mb: 0 },
              fontSize: ['1.2rem', '1.4rem', '1.6rem'],
              color: 'rgb(0, 0, 0)',
            }}
          >
            <text sx={{
              fontSize: ['1.5rem', '1.8rem', '2.0rem'],
              fontWeight: 'bold',
              color: '#337D78',
              marginBottom: '1rem',
            }}>
              Day 2: Sunday, March 16
            </text>
          </Box>
            {scheduleDay2.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              mb: 4,
              ':last-child': { mb: 0 },
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              p: 3,
              borderRadius: '12px',
              ':hover': {
            transform: 'translateX(8px)',
            backgroundColor: 'rgba(51, 125, 120, 0.1)',
              },
            }}
          >
            {item.icon && (
              <Image
            src={item.icon}
            alt=""
            sx={{
              width: ['32px', '36px', '40px'],
              height: ['32px', '36px', '40px'],
              flexShrink: 0,
            }}
              />
            )}
            <Heading
              as="p"
              sx={{
            fontSize: ['1.1rem', '1.3rem', '1.5rem'],
            fontFamily: 'p22-stanyan',
            m: 0,
            flexGrow: 1,
            color: '#337D78',
              }}
            >
              {item.event}
            </Heading>
            <Box
              sx={{
            borderBottom: '3px dotted black',
            flexGrow: 1,
            mx: 3,
              }}
            />
            <Text sx={{ 
              fontSize: ['1rem', '1.1rem', '1.2rem'],
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              color: '#337D78',
            }}>
              {item.time}
            </Text>
          </Box>
            ))}
          </Box>
        </Box>

        {/* FAQ Section */}
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(10px)',
          py: [6, 7],
          px: [3, 4],
        }}
      >
        <Box sx={{ maxWidth: '1100px', mx: 'auto' }}>
          <Heading
            as="h1"
            sx={{
              fontSize: ['2rem', '2.4rem', '2.8rem'],
              textAlign: 'center',
              mb: [5, 6],
              position: 'relative',
            }}
          >
            Frequently Asked Questions
            <Image
              src="https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/doodles/blue-underline.svg"
              sx={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
              }}
              alt=""
            />
          </Heading>

          <Grid 
            columns={[1, 1, 2]} 
            gap={5}
          >
            {Object.entries({
              'Who can participate?': (
                <>
                  Anyone in high school or upper-middle school is welcome—no
                  experience required!
                </>
              ),
              'How much does it cost?': (
                <>
                  It's free! We provide meals, swag & more. Traveling from afar?{' '}
                  <Link href="https://gas.hackclub.com/">
                    We can help cover transportation
                  </Link>
                  .
                </>
              ),
              'What do I need to bring?': (
                <>
                  A laptop, charger, and curiosity. Bring hardware or tools if
                  you'd like. We can pay for some hardware, Just ask!
                </>
              ),
              'I am new to coding...': (
                <>
                  Perfect! We welcome beginners. We'll have workshops and mentors
                  to help you start making silly hacks in no time.
                </>
              ),
              'What can I make?': (
                <>
                  Anything! Apps, websites, hardware, or the jankiest contraption
                  you can dream up. Let your imagination run wild.
                </>
              ),
              'What if my parents are worried?': (
                <>
                  We're happy to chat. They can email us at{' '}
                  <Link href="mailto:scrapyard-seattle@hackclub.com">
                    scrapyard-seattle@hackclub.com
                  </Link>{' '}
                  with any questions.
                </>
              ),
              'More questions?': (
                <>
                  Reach out in <strong>#scrapyard</strong> on the Hack Club Slack
                  or email{' '}
                  <Link href="mailto:karunyap.seattle@scrapyard.hackclub.com">
                    scrapyard-seattle@hackclub.com
                  </Link>
                  !
                </>
              ),
            }).map(([question, answer], i) => (
              <Card
                key={question}
                sx={{
                  background: [
                    'rgba(255, 255, 255, 0.8)',
                    `url('https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/doodles/boxes/${
                      (i % 6) + 1
                    }.svg')`,
                  ],
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  p: [4, 5],
                  border: ['2px solid black', 'none'],
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  ':hover': {
                    transform: 'translateY(-8px) rotate(0)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Heading
                  as="h2"
                  sx={{
                    fontSize: ['1.4rem', '1.6rem'],
                    mb: 4,
                    position: 'relative',
                  }}
                >
                  {question}
                  <Image
                    src="https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/doodles/yellow-underline.svg"
                    sx={{
                      position: 'absolute',
                      bottom: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80%',
                    }}
                    alt=""
                  />
                </Heading>
                <Text sx={{ 
                  fontSize: ['1.1rem', '1.2rem'],
                  fontWeight: 'bold',
                  lineHeight: 1.6,
                }}>
                  {answer}
                </Text>
              </Card>
            ))}
          </Grid>

          <Card
            marginY={5}
            bg="#B9ECF6"
          >
              <Heading
                as="h2"
                sx={{
                  fontSize: ['1.8rem', '2.4rem'],
                  mb: 4,
                  position: 'relative',
                  text:'black',
                  color: "black"
                }}
              >
                Our Awesome Sponsors:
              </Heading>

              <Grid
                columns={[1, 1, 2]}
                gap={5}
                p={4}
              >
              <Card
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  bg: "#95CDCE",
                  transition: 'all 0.3s ease',
                  transform: 'rotate(1deg)',
                  ':hover': {
                    transform: 'translateY(-8px) rotate(0)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                  },
                }}
              >
                  <Image
                    sx={{
                      width: ['150px', '200px'],
                      height: ['auto', 'auto'],
                      objectFit: 'contain',
                      mx: 'auto',
                    }}
                    src="/city/seattle/AwsLogo.png"
                  />
              </Card>
              <Card
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  bg: "#FFD8EA",
                  transform: 'rotate(-2deg)',
                  ':hover': {
                  transform: 'translateY(-8px) rotate(0)',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                },
                }}
              >
                  <Image
                    sx={{
                      width: ['auto', 'auto'],
                      height: ['auto', 'auto'],
                      objectFit: 'contain',
                      mx: 'auto',
                    }}
                    src="/city/seattle/MotherDuckLogo.png"
                  />
              </Card>

              {/* Stack Lock logo*/}
              <Card
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  bg: "#E7EDA3",
                  borderRadius: "50px",
                  transform: 'rotate(2deg)',
                  ':hover': {
                  transform: 'translateY(-8px) rotate(0)',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
                },
                }}
              >
                  <Image
                    sx={{
                      width: ['auto', 'auto'],
                      height: ['auto', 'auto'],
                      objectFit: 'contain',
                      mx: 'auto',
                    }}
                    src="/city/seattle/StackLock.png"
                  />
              </Card>
            </Grid>

          </Card> 

          {/*Sponsor segement*/}

          {/* Final Sign-up Button */}
          <Link
            href="https://forms.hackclub.com/scrapyard-signup?event=seattle"
            target="_blank"
            sx={{
              display: 'block',
              width: 'fit-content',
              mx: 'auto',
              mt: [6, 7],
              mb: [4, 5],
            }}
          >
            <Box
              sx={{
                backgroundImage: `url('https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/yellow-strip%40stretch.svg')`,
                backgroundSize: '100% 100%',
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.2))',
                transition: 'all 0.3s ease',
                ':hover': { 
                  transform: 'scale(1.05) rotate(-2deg)',
                  filter: 'drop-shadow(0 12px 48px rgba(0,0,0,0.25))',
                },
                px: [4, 5],
                py: [3, 4],
              }}
            >
              <Heading
                as="h2"
                sx={{
                  fontFamily: 'moonblossom',
                  fontSize: ['1.4rem', '1.6rem'],
                  textAlign: 'center',
                  m: 0,
                }}
              >
                Sign Up for Scrapyard Seattle
              </Heading>
            </Box>
          </Link>

           {/* Footer */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              mt: [6, 7],
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              position: 'relative',
              pb: 4,
            }}
          >
            {/* Logo Section */}
            <Box sx={{ mb: 2 }}>
              <Heading
                as="h2"
                sx={{
                  fontSize: ['1.8rem', '2rem'],
                  position: 'relative',
                  display: 'inline-block',
                  mb: 3,
                }}
              >
                Scrapyard
                <Image
                  src="https://raw.githubusercontent.com/hackclub/scrapyard/main/public/elements/doodles/pink-underline.svg"
                  sx={{
                    position: 'absolute',
                    bottom: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '120%',
                  }}
                  alt=""
                />
              </Heading>
            </Box>

            {/* Made with Love Section */}
            <Box 
              sx={{ 
                backgroundColor: 'rgba(51, 125, 120, 0.1)',
                py: 3,
                px: 4,
                borderRadius: '12px',
                maxWidth: 'fit-content',
                mx: 'auto',
              }}
            >
              <Text
                sx={{
                  fontFamily: 'moonblossom',
                  fontSize: ['1.1rem', '1.2rem'],
                }}
              >
                Made with ♡ by teenagers, for teenagers at Hack Club
              </Text>
            </Box>

            {/* Links Section */}
            <Box 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 4,
                  flexWrap: 'wrap',
                }}
              >
                <Link 
                  href="https://hackclub.com"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontFamily: 'moonblossom',
                    fontSize: ['1.1rem', '1.2rem'],
                    position: 'relative',
                    ':after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: '-2px',
                      left: 0,
                      backgroundColor: '#337D78',
                      transform: 'scaleX(0)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.3s ease',
                    },
                    ':hover:after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    },
                  }}
                >
                  Hack Club
                </Link>
                <Link 
                  href="https://hackclub.com/slack"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontFamily: 'moonblossom',
                    fontSize: ['1.1rem', '1.2rem'],
                    position: 'relative',
                    ':after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: '-2px',
                      left: 0,
                      backgroundColor: '#337D78',
                      transform: 'scaleX(0)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.3s ease',
                    },
                    ':hover:after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    },
                  }}
                >
                  Slack
                </Link>
                <Link 
                  href="https://hackclub.com/clubs"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontFamily: 'moonblossom',
                    fontSize: ['1.1rem', '1.2rem'],
                    position: 'relative',
                    ':after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: '-2px',
                      left: 0,
                      backgroundColor: '#337D78',
                      transform: 'scaleX(0)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.3s ease',
                    },
                    ':hover:after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    },
                  }}
                >
                  Clubs
                </Link>
                <Link 
                  href="https://hackclub.com/hackathons"
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontFamily: 'moonblossom',
                    fontSize: ['1.1rem', '1.2rem'],
                    position: 'relative',
                    ':after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: '-2px',
                      left: 0,
                      backgroundColor: '#337D78',
                      transform: 'scaleX(0)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.3s ease',
                    },
                    ':hover:after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    },
                  }}
                >
                  Hackathons
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
