import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'

const schedule = [
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' },
  { time: '🐧', event: 'Açiklanilacak' }
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

export default function Istanbul() {
  const highschools=[
    {
      name: 'Vefa Anadolu Lisesi',
      image: 'https://upload.wikimedia.org/wikipedia/tr/8/8b/Vefalisesi-logo.jpg',
      link: 'https://kabatas.k12.tr/'
    },
    {
      name: 'Yılmaz Kayalar Fen Lisesi',
      image: 'data:image/jpeg;base64,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',
      link: ''
    },
    {
      name: 'Cezeri Koleji',
      image: 'data:image/png;base64,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',
      link: 'https://cezeri.k12.tr/'
    },
    {
      name: 'Gökkuşağı Koleji',
      image: 'data:image/png;base64,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',
      link: ''
    },
    {
      name: 'Öner Anadolu Lisesi',
      image: 'https://th.bing.com/th/id/OIP.WMhPk0LDlZAlVzHiiptIZAAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7',
      link: ''
    },
  ]
  const bronzeSponsors = [
    {
      name: '1Password',
      image: 'https://th.bing.com/th/id/OIP.NcNZmdavnSChz2V0_MJqGgHaEK?w=314&h=180&c=7&r=0&o=5&pid=1.7',
      link: 'https://1password.com/'
    },
    {
      name: 'Burada sizin firmanız olabilir',
      image: 'https://adamxu.net/counterspell/eyes.png',
      link: 'https://example.com'
    }
  ]
  const silverSponsors=[
    {
      name: 'İstanbul&i',
      image: 'https://www.istanbulandi.org.tr/frontend-assets/images/logo.png',
      link: 'https://www.istanbulandi.org.tr/'
    }
  ]
  const goldSponsors=[
    {
      name: 'Tech İstanbul',
      image: 'https://tech.istanbul/v2/wp-content/uploads/2024/02/renkli_tech_ist.svg',
      link: 'https://tech.istanbul/'
    }
  ]
  const partnerSponsors=[
    {
      name: 'Hack Club',
      image: 'https://assets.hackclub.com/icon-square.svg',
      link: 'https://hackclub.com'
    }
  ]
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
        <title>Scrapyard Istanbul</title>
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
            src="/elements/wordmark.svg"
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
GENÇLER IÇIN GENÇLER TARAFINDAN!
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
              İstanbul - 14-16&nbsp;Mart
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
          href="https://forms.hackclub.com/scrapyard-signup-tr"
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
              KAYIT OL!
            </Heading>
          </Box>
        </Link>
        <Link
          href="https://www.instagram.com/scrapyard.34/"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              position: 'fixed',
              right: ['10%'],
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
              Sosyal Medya
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
            top: ' 0px',
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
              Scrapyard Istanbul nedir?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              Scrapyard global bir sekilde 100+ sehirde 15-16 Mart tarihleri
              arasinda ayni anda düzenlenecek olan ve eglenceli projeler
              olusturmaya yönelik bir hackathon'dur.Bu etkinlik {''}
              Hack Club önderliginde gerçeklestirilecektir. Hack Club dünya
              genelinde 40.000+ liseliye ulasan bir kar amaci gütmeyen
              kurulustur.
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
            SCRAPYARD ISTANBUL ETKINLIK TAKVIMI
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
          48 SAATLIK HACKATHON ETKINLIGIMIZDE NELER OLACAK? ISTE TAKVIMIMIZ!
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
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '100px',
              marginTop: '50px',
              transform: 'scale(1.1)'
            }}
          >
            <div>
              <Box
                sx={{
                  backgroundColor: '#69c5f1',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  alignItems: 'center',
                  padding: '20px',
                  transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                  outline: 'solid 2px white',
                  transition: 'transform 0.2s',
                  zIndex: 2,
                  ':hover': {
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`
                  }
                }}
              >
                <Heading
                  as="h2"
                  sx={{
                    textAlign: 'center',
                    fontSize: '1.5em',
                    fontFamily: 'moonblossom',
                    color: 'white',
                    mt: 2
                  }}
                >
                  Ana Sponsorlarımız
                </Heading>
              </Box>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  // height: '200px',
                  transform: 'scale(0.9)',
                  justifyContent: 'center'
                }}
              >
                {partnerSponsors.map((sponsor, i) => (
                  <Link
                    href={sponsor.url}
                    target="_blank"
                    sx={{
                      backgroundColor: '#69c5f1',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '200px',
                      alignItems: 'center',
                      padding: '20px',
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                      outline: 'solid 2px white',
                      transition: 'transform 0.2s',
                      ':hover': {
                        transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                        zIndex: 1
                      }
                    }}
                  >
                    <Image
                      key={i}
                      src={sponsor.image}
                      alt={sponsor.name}
                      style={{
                        width: '100px',
                        height: '100px',
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
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '100px',
              marginTop: '50px'
            }}
          >
            <div>
              <Box
                sx={{
                  backgroundColor: '#c9ae53',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  alignItems: 'center',
                  padding: '20px',
                  transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                  outline: 'solid 2px white',
                  transition: 'transform 0.2s',
                  zIndex: 2,
                  ':hover': {
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`
                  }
                }}
              >
                <Heading
                  as="h2"
                  sx={{
                    textAlign: 'center',
                    fontSize: '1.5em',
                    fontFamily: 'moonblossom',
                    color: 'white',
                    mt: 2
                  }}
                >
                  Yer Sponsorumuz
                </Heading>
              </Box>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  // height: '200px',
                  transform: 'scale(0.9)',
                  justifyContent: 'center'
                }}
              >
                {goldSponsors.map((sponsor, i) => (
                  <Link
                    href={sponsor.url}
                    target="_blank"
                    sx={{
                      backgroundColor: '#c9ae53',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '200px',
                      alignItems: 'center',
                      padding: '20px',
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                      outline: 'solid 2px white',
                      transition: 'transform 0.2s',
                      ':hover': {
                        transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                        zIndex: 1
                      }
                    }}
                  >
                    <Image
                      key={i}
                      src={sponsor.image}
                      alt={sponsor.name}
                      style={{
                        width: '100px',
                        height: '100px',
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
            <div>
              <Box
                sx={{
                  backgroundColor: '#c9c9c9',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                  outline: 'solid 2px white',
                  marginTop: '-50px',
                  transition: 'transform 0.2s',
                  zIndex: 2,
                  ':hover': {
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`
                  }
                }}
              >
                <Heading
                  as="h2"
                  sx={{
                    textAlign: 'center',
                    fontSize: '1.5em',
                    fontFamily: 'moonblossom',
                    color: 'white',
                    mt: 2
                  }}
                >
                  Organizyasyon Sponsorlarımız
                </Heading>
              </Box>
              <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                // height: '200px',
                transform: 'scale(0.9)',
                justifyContent: 'center'
              }}
            >
              {silverSponsors.map((sponsor, i) => (
                <Link
                  href={sponsor.url}
                  target="_blank"
                  sx={{
                    backgroundColor: '#c9c9c9',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px',
                    alignItems: 'center',
                    padding: '20px',
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                    outline: 'solid 2px white',
                    transition: 'transform 0.2s',
                    ':hover': {
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                      zIndex: 1
                    }
                  }}
                >
                  <Image
                    key={i}
                    src={sponsor.image}
                    alt={sponsor.name}
                    style={{
                      width: '100px',
                      height: '100px',
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
          <div style={{ marginBottom: '-130px' }}>
            <Box
              sx={{
                backgroundColor: '#c78f16',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                outline: 'solid 2px white',
                marginTop: '-50px',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                  zIndex: 1
                }
              }}
            >
              <Heading
                as="h2"
                sx={{
                  textAlign: 'center',
                  fontSize: '1.5em',
                  fontFamily: 'moonblossom',
                  color: 'white',
                  mt: 2
                }}
              >
                Partner Okullar
              </Heading>
            </Box>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                // height: '200px',
                transform: 'scale(0.8)',
                justifyContent: 'center'
              }}
            >
              {highschools.map((sponsor, i) => (
                <Link
                  href={sponsor.url}
                  target="_blank"
                  sx={{
                    backgroundColor: '#c78f16',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px',
                    alignItems: 'center',
                    padding: '10px',
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                    outline: 'solid 2px white',
                    transition: 'transform 0.2s',
                    ':hover': {
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                      zIndex: 1
                    }
                  }}
                >
                  <Image
                    key={i}
                    src={sponsor.image}
                    alt={sponsor.name}
                    style={{
                      width: '100px',
                      height: '100px',
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
          <br/>
          <div style={{ marginBottom: '-130px' }}>
            <Box
              sx={{
                backgroundColor: '#c78f16',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                outline: 'solid 2px white',
                marginTop: '-50px',
                transition: 'transform 0.2s',
                ':hover': {
                  transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                  zIndex: 1
                }
              }}
            >
              <Heading
                as="h2"
                sx={{
                  textAlign: 'center',
                  fontSize: '1.5em',
                  fontFamily: 'moonblossom',
                  color: 'white',
                  mt: 2
                }}
              >
                Ödül Sponsorlarımız
              </Heading>
            </Box>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                // height: '200px',
                transform: 'scale(0.8)',
                justifyContent: 'center'
              }}
            >
              {bronzeSponsors.map((sponsor, i) => (
                <Link
                  href={sponsor.url}
                  target="_blank"
                  sx={{
                    backgroundColor: '#c78f16',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '200px',
                    alignItems: 'center',
                    padding: '20px',
                    transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                    outline: 'solid 2px white',
                    transition: 'transform 0.2s',
                    ':hover': {
                      transform: `rotate(${(Math.random() - 0.5) * 10}deg) scale(1.02)`,
                      zIndex: 1
                    }
                  }}
                >
                  <Image
                    key={i}
                    src={sponsor.image}
                    alt={sponsor.name}
                    style={{
                      width: '100px',
                      height: '100px',
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
        </div>
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
            BEN YURT DISINDA YASIYORUM. KATILAMAYACAK miyim?
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
          HAYIR! DÜNYA GENELINDE DÜZENLENEN 100+ ETKINLIKTE YER ALABILIRSINIZ!
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
          Sik Sorulan Sorular
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
            'SCRAPYARD NEDIR?': (
              <>
                Scrapyard global bir sekilde 100+ sehirde 15-16 Mart tarihleri
                arasinda aynanda düzenlenecek olan ve eglenceli projeler
                olusturmaya yönelik bir hackathon&apos;dur. Bu etkinlik {''}
                <Link href="https://hackclub.com" target="_blank">
                  Hack Club{' '}
                </Link>{' '}
                {''}önderliginde gerçeklestirelecektir. Hack Club dünya
                genelinde 40.000+ liseliye ulasan bir kar amaci gütmeyen
                kurulustur
              </>
            ),

            'SCRAPYARD ISTANBUL NEREDE OLACAK?': (
              <>
                Bu bilgiyi çok yakinda paylasacagiz. Takipte kalin! Etkinligimize
                ev sahipligi mi yapmak istiyorsunuz? {''}
                <Link href="mailto:berke.istanbul@hackclub.com">
                  Bizle iletisime geçin!
                </Link>
              </>
            ),
            "SCRAPYARD ISTANBUL'A KIMLER KATILABILIR?": (
              <>
                Istanbul'da yasayan ve 18 yasindan küçük(maksimum lise 4.sinif
                olmak sartiyla) herkes katilabilir!
              </>
            ),
            'HARIKA, PEKI ETKINLIK ÜCRETLI MI?': (
              <>
                Hayir! Yemek, hediye ve eglence dahil etkinligimiz tamamen
                ücretsizdir!
              </>
            ),
            'PEKI YA NELER GETIRMELIYIM?': (
              <>
                Bilgisayarin, sarj cihazi, uyku tulumun ve yaratici zekan! Eger
                bir donanim projesi yapmayi planliyorsaniz lütfen kendi
                malzemelerinizi getirin.
              </>
            ),
            'TÜM BUNLAR HARIKA FAKAT YAZILIMA YÖNELIK BIR TECRÜBEM YOK. YINE DE KATILABILIR MIYIM?':
              (
                <>
                  Evet! Etkinligimiz her seviyeden ve her alandan katilimciya
                  açiktir (sadece yazilim degil donanim ve tasarim gibi
                  alanlarda da katilim saglayabiilirsiniz). Her seviyeden
                  katilimcilara yönelik workshop ve etkinlikler düzenleyecegiz. En
                  önemli noktanin eglenmek oldugunu unutmayin :)
                </>
              ),
            'BU ETKINLIKTE NELER YAPABILIRIM?': (
              <>
                Oyun, website veya belki de bir programlama dili? Karar
                senin. Her seyi yapabilirsin - tek durduran sey senin hayal gücün!
              </>
            ),
            'AILEM IZIN VERMIYOR/DAHA FAZLA BILGI ISTIYORLAR :(': (
              <>
                Hiç merak etme! Yakinda aile rehberimizi yayinlayacagiz fakat o
                zamana kadar {''}
                <Link href="mailto:istanbul@scrapyard.hackclub.com">
                  istanbul@scrapyard.hackclub.com
                </Link>{' '}
                {''} adresimize mail atmaniz yeterli! Tüm sorularinizi
                cevaplayip ailenizin teredütlerini gidermek için buradayiz.
              </>
            ),
            'SPONSOR OLMAK ISTIYORUM!': (
              <>
                <Link href="mailto:berke.istanbul@scrapyard.hackclub.com">
                  berke.istanbul@scrapyard.hackclub.com {''}
                </Link>
                Adresimize mail atarak bizimle iletisime geçebilirsiniz.
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
          href="https://forms.hackclub.com/scrapyard-signup?event=istanbul"
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
              SCRAPYARD Istanbul'A KATIL!
            </Heading>
            
          </Box>
        </Link>
        <Link
          href="https://www.instagram.com/scrapyard.34/"
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
              Instagramda bizi takip et!
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
          Hack Club'daki gençlerle diger gençler için ♡ yapildi
        </Text>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mt: 0,
            textAlign: 'center'
          }}
        >
          <Link href="https://hackclub.com">HACK CLUB</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/slack">SLACK</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/clubs">KULÜPLER</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/hackathons">HACKATHONLAR</Link>
        </Text>
      </Box>
    </Box>
  )
}
