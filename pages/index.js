import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Nonprofit501c3 = () => {
  return <span style={{ fontVariantLigatures: 'none' }}>501(c)(3)</span>
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
        ':hover': {
          transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)'
        }
      }}
    />
  </Link>
)

export default function Home() {
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
        <title>Scrapyard</title>
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
        <Image
          sx={{
            width: '600px',
            maxWidth: '70vw',
            objectFit: 'contain'
          }}
          src="/elements/wordmark.svg"
          alt="Scrapyard"
        />
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
                margin: '8%',
                fontSize: '22px'
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
              // pt: '3%',
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            {/* <Heading
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
              Austin,&nbsp;Texas&nbsp;–&nbsp;March&nbsp;1-2
            </Heading> */}
            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                mx: '8%',
                my: '3%',
                p: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'min-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              100+&nbsp;Cities&nbsp;worldwide&nbsp;–&nbsp;March&nbsp;15-16
            </Heading>
          </Box>

          <Link
            href="https://hack.af/scrapyard-signup?utm_content=hero"
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
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 30,
            color: 'white'
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
          href="https://hack.af/scrapyard-signup?utm_content=corner"
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
              id="about"
            >
              What's Scrapyard?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              Scrapyard is a global hackathon organized by high schoolers. Our
              flagship (the largest Scrapyard event) will run in Austin, Texas
              on March 1st-2nd. Following the flagship, our distributed events
              will run in 100+ cities worldwide on the weekend of March 15th.
              Scrapyard is a hackathon with a "scrappy" theme of stupid
              inventions! It's organized by Hack Club, a <Nonprofit501c3 />{' '}
              nonprofit that supports a global community of over 50,000 high
              school makers.
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

      <Box></Box>

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
            backgroundSize: 'cover'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mt: '13vh',
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            FIND AN EVENT NEAR YOU!
          </Heading>
        </Box>
        <Box
          sx={{
            width: '80%',
            height: '75vh',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            mb: '10vh'
          }}
        >
          <Map />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: [
            "url('/backgrounds/bulletin@vertical.svg')",
            "url('/backgrounds/bulletin@vertical.svg')",
            "url('/backgrounds/bulletin.svg')"
          ],
          backgroundSize: 'cover!important',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          overflow: 'visible',
          gap: '20px',
          height: ['151.37794951vw', '151.37794951vw', '64.45447188vw'],
          position: 'relative'
        }}
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
                  textAlign: 'center'
                }}
              >
                Here's what we've done in the past
              </Heading>
            </Box>
          </Box>
          <Box
            as="a"
            href="https://assemble.hackclub.com"
            target="_blank"
            sx={{
              background: "url('/elements/polaroids/assemble.png')",
              width: ['35.5vw', '35.5vw', '22.5vw'],
              height: ['35.5vw', '35.5vw', '22.5vw'],
              transform: ['scale(1.4)', 'scale(1.4)', 'scale(1.2)'],
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block'
            }}
          ></Box>
          <Box
            as="a"
            href="https://outernet.hackclub.com"
            target="_blank"
            sx={{
              background: "url('/elements/polaroids/outernet.png')",
              width: ['35.5vw', '35.5vw', '22.5vw'],
              height: ['35.5vw', '35.5vw', '22.5vw'],
              transform: ['scale(1.4)', 'scale(1.4)', 'scale(1.2)'],
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              marginTop: '7vw'
            }}
          ></Box>
          <Box
            as="a"
            href="https://wonderland.hackclub.com"
            target="_blank"
            sx={{
              background: "url('/elements/polaroids/wonderland.png')",
              width: ['35.5vw', '35.5vw', '22.5vw'],
              height: ['35.5vw', '35.5vw', '22.5vw'],
              transform: ['scale(1.4)', 'scale(1.4)', 'scale(1.2)'],
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block'
            }}
          ></Box>
          <Box
            as="a"
            href="https://apocalypse.hackclub.com"
            target="_blank"
            sx={{
              background: "url('/elements/polaroids/apocalypse.png')",
              width: ['35.5vw', '35.5vw', '22.5vw'],
              height: ['35.5vw', '35.5vw', '22.5vw'],
              transform: ['scale(1.4)', 'scale(1.4)', 'scale(1.2)'],
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              marginTop: '7vw'
            }}
          ></Box>
          <Box
            as="a"
            href="https://counterspell.hackclub.com"
            target="_blank"
            sx={{
              background: "url('/elements/polaroids/counterspell.png')",
              width: ['38.5vw', '38.5vw', '25vw'],
              height: ['38.5vw', '38.5vw', '25vw'],
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              display: 'block',
              position: 'absolute',
              bottom: '0',
              right: '10vw',
              transform: 'translateY(50%)',
              zIndex: 10
            }}
          ></Box>
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
            'What is Scrapyard?': (
              <>
                Scrapyard is a global{' '}
                <Link href="https://hackclub.com/hackathons/" target="_blank">
                  hackathon
                </Link>{' '}
                running in Austin, Texas and 100+ other cities by high schoolers
                (like{' '}
                <Link href="https://counterspell.hackclub.com/" target="_blank">
                  Counterspell
                </Link>
                ) with a “scrappy” theme of stupid inventions! It's organized by{' '}
                <Link href="https://hackclub.com/" target="_blank">
                  Hack Club
                </Link>
                , a <Nonprofit501c3 /> nonprofit that supports a global
                community of 48k high school makers.
              </>
            ),

            'When & where is Scrapyard hosted?': (
              <>
                The Scrapyard flagship will be hosted in Austin, Texas from 12pm
                on March 1st to 3pm on March 2nd. Find the closest distributed
                event to you on March 15-16!
              </>
            ),
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
                joining us from afar, we’ll cover the cost of gas or a bus /
                train ticket. Travel stipends for our Austin, Texas flagship are
                now closed.
              </>
            ),
            'What do I need?': (
              <>
                Your laptop, chargers, toiletries, sleeping bags, and an open
                mind! If you plan to work on a hardware project, bring the tools
                you'll need. If you're travelling via plane or internationally,
                make sure to bring any legal documents (such as a passport) as
                well.
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
                We’re here to help! You can see our{' '}
                <Link href="https://drive.google.com/file/d/1yG1m5fPa2qzdKbVMtxbK7hIXexBk4uY0/view?usp=sharing">
                  parent's guide here
                </Link>
                , or they can reach out to us at{' '}
                <Link href="mailto:scrapyard@hackclub.com">
                  scrapyard@hackclub.com
                </Link>{' '}
                for questions.
              </>
            ),
            'What if I have more questions?': (
              <>
                Contact us! Feel free to reach out to us in the #scrapyard
                channel on the Hack Club slack or email us at{' '}
                <Link href="mailto:scrapyard@hackclub.com">
                  scrapyard@hackclub.com
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
        <Heading
          as="h2"
          sx={{
            mt: 6,
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
