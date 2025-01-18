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
import styles from "./cluj-napoca.module.css"

// TODO: Change this schedule to your own!
const schedule = [
  { time: '10:00', event: 'Se deschid ușile' },
  { time: '13:00', event: 'Ceremonia de deschidere' },
  { time: '14:00', event: 'Prânzul' },
  { time: '15:00', event: 'Începerea proiectelor' },
  { time: '15:10', event: 'Workshop 1' },
  { time: '16:00', event: 'Workshop 2' },
  { time: '16:40', event: 'Workshop 3' },
  { time: '18:00', event: 'Activitate surpriză' },
  { time: '19:00', event: 'Cina' },
  { time: '00:00', event: 'Activitate surpriză' },
  { time: '09:00', event: 'Micul dejun' },
  { time: '11:30 AM', event: 'Prezentarea proiectelor' },
  { time: '13:00 PM', event: 'Ceremonia de încheiere' }
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
      className={styles.clujNapoca}
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
        <title>Scrapyard Cluj-Napoca</title>
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
            src="/city/cluj-napoca/logo.png"
            alt="Scrapyard Cluj-Napoca"
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
                fontFamily: "Phantom Sans",
                textAlign: 'center',
                margin: '8%'
              }}
            >
              Construiește proiecte inovative, câștigă premii pe măsură
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
                mx: '8%',
                p: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'max-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              Cluj-Napoca - Martie&nbsp;15-16
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
          // TODO: Change [EVENTID] to your event's ID (see https://airtable.com/appigKiF7GbVISAlg/shrK3OiCJs4BRBIRG)
          href="https://forms.hackclub.com/scrapyard-signup?event_id=recrxGGBPAKIKyGoP"
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
              minWidth: '12em',
              padding: '15px'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: "Phantom Sans",
                textAlign: 'center',
                padding: ['2%', '8%'],
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                width: '100%'
              }}
            >
              Înscrie-te!
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
                textDecoration: 'underline',
                fontFamily: "Phantom Sans"
              }}
            >
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              Ce înseamnă Scrapyard Cluj-Napoca?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              Scrapyard Cluj-Napoca este un hackathon pentru elevii de liceu care va avea loc în Cluj-Napoca, unde vei crea cele mai inovative proiecte alături 
              de alți elevi și mentori! Poți crea orice, chiar și{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                o lampă care pâlpâie din ce în ce mai încet pe parcurs ce scrii cod
              </Link>
              , sau idei pe care nu le consideri a fi neapărat utile, dar sunt ingenioase. Indiferent de nivelul tău de experiență, Scrapyard Cluj-Napoca are nevoie de tine și de ideile tale nebunești!
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
            {/* TODO: Change [EXAMPLECITY] to your event's city */}
            CE SE VA ÎNTÂMPLA LA SCRAPYARD CLUJ-NAPOCA?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: "Phantom Sans",
            color: 'white',
            textAlign: 'center'
          }}
        >
          {/* TODO: Change [EXAMPLECITY] to your event's city */}
          {/* TODO: Change [DURATION] to your event's duration (12hour, 24hour, 2-day) */}
          Scrapyard Cluj-Napoca este un eveniment de 24 de ore - Aici este orarul estimativ!
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
                  fontFamily: "Phantom Sans"
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
            Nu vei putea ajunge la CLuj-Napoca?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: "Phantom Sans",
            color: 'white',
            textAlign: 'center',
            mx: '5vw'
          }}
        >
          Există înca peste 100 de locații în toată lumea!
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
            position: 'relative',
            fontFamily: "Phantom Sans",
          }}
        >
          Întrebări frecvente
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
            maxWidth: '1200px',
            fontFamily: "Phantom Sans" ,
          }}
        >
          {Object.entries({
            'Cine poate participa la Scrapyard?': (
              <>
                Toți elevii de liceu sau gimnazială pot participa. Nu trebuie să fi în comunitatea hackclub sau liderul unui club.
              </>
            ),
            'Este tot gratis?': (
              <>
                Da! Mâncarea, băuturile, premiile și buna dispoziție sunt toate incluse. 
                  {/* În plus, dacă vii de mai departe{' '}
                  <Link href="https://gas.hackclub.com/">
                    îți asigurăm banii de combustibil sau de bilet de autobuz
                  </Link>
                  . */}
              </>
            ),
            'De ce am nevoie?': (
              <>
                De un laptop, încărcătoare și o minte deschisă! De asmenea, acest eveniment se va desfășura și peste noapte,
                deci vino cu produse de igienă(pastă de dinți, perie de dinți și DEODORANT) și cu un sac de dormit.
                Dacă vrei să lucrezi pe un proiect de hardware, adu-ți toate componentele de care ai nevoie.
              </>
            ),
            'Pot să particip dacă nu știu să programez?': (
              <>
                Acest hackathon este pentru persoanele creative, indiferent de experiență! Vom avea workshop-uri și pentru începători,
                deci hai să învățăm împreună. Dacă vrei să explorezi niște proiecte introductive, 
                încearcă un <Link href="https://jams.hackclub.com">workshop Hack Club!</Link>
              </>
            ),
            'Ce pot face la scrapyard?': (
              <>
                Orice proiect îți imaginezi -- creativitatea este încurajată. Un joc? Un Website? O aplicație? Un limbaj de programare? Hardware?
                Orice! Vom avea o mulțime de resurse de învățare și mentori pentru a te ajuta.
              </>
            ),
            'Ce a mai facut Hackclub?': (
              <>
                Hackclub a organizat un{' '}
                <Link href="https://youtu.be/PnK4gzO6S3Q" target="_blank">
                  hackathon peste noapte
                </Link>{' '}
                în San Francisco, un{' '}
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                >
                  Game Jam
                </Link>{' '}
                în 50 de orașe, un hackathon pe{' '}
                <Link href="https://youtu.be/2BID8_pGuqA" target="_blank">
                  un Tren
                </Link>{' '}
                din Vermont până în Los Angeles, și multe altele!
              </>
            ),
            'Ce pot să fac dacă parinții nu sunt siguri?': (
              <>
                Suntem aici să te ajutăm! Ghidul nostru pentru părinți va fi publicat în curând, dar
                pot să ne scrie la{' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="mailto:cluj-napoca.scrapyard@hackclub.com">
                  {/* TODO: Change this email to your event's email */}
                  cluj-napoca.scrapyard@hackclub.com
                </Link>{' '}
                pentru întrebări.
              </>
            ),
            'Ce pot face dacă am mai multe întrebări?': (
              <>
                {/* TODO: Change [SLACKCHANNEL] to the name of your event's Slack channel */}
                Contactează-ne! poți să ne contactezi pe <Link href="https://hackclub.slack.com">slack-ul Hack Club</Link> în canalul #scrapyard-cluj-napoca
                sau pe adresa de email{' '}
                {/* TODO: Change this email to your event's email */}
                <Link href="mailto:cluj-napoca.scrapyard@hackclub.com">
                  {/* TODO: Change this email to your event's email */}
                  cluj-napoca.scrapyard@hackclub.com
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
                    position: 'relative',
                    fontFamily: 'Phantom Sans'
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
          href="https://forms.hackclub.com/scrapyard-signup?event_id=recrxGGBPAKIKyGoP"
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
                fontFamily: "Phantom Sans",
                textAlign: 'center',
                margin: '8%',
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                paddingY: ['15px', '0px']
              }}
            >
              {/* TODO: Change [EXAMPLECITY] to your event's city */}
              ÎNSCRIE-TE LA SCRAPYARD CLUJ-NAPOCA
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
            fontFamily: "Phantom Sans",
            mb: -2,
            textAlign: 'center'
          }}
        >
          Creat cu ♡ de elevi, pentru elevi la Hack Club
        </Text>
        <Text
          sx={{
            fontFamily: "Phantom Sans",
            mt: 0,
            textAlign: 'center'
          }}
        >
          <Link href="https://hackclub.com">Hack Club</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/slack">Slack</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/clubs">Cluburi</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/hackathons">Hackathon-uri</Link>
        </Text>
      </Box>
    </Box>
  )
}
