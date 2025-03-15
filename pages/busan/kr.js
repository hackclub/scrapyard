import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'

const schedule = [
  { time: '11:00 AM', event: '접수 시작' },
  { time: '12:00 PM', event: '오프닝 세레모니' },
  { time: '12:30 PM', event: '점심' },
  { time: '01:00 PM', event: '작업 시작!' },
  { time: '02:00 PM', event: '워크숍 1' },
  { time: '04:00 PM', event: '활동 1' },
  { time: '04:00 PM', event: '워크숍 2' },
  { time: '06:00 PM', event: '저녁' },
  { time: '08:00 PM', event: '라이트닝 토크 배우는 시간' },
  { time: '12:00 AM', event: '자정 서프라이즈' },
  { time: '08:00 AM', event: '아침 식사' },
  { time: '10:30 AM', event: '발표' },
  { time: '12:00 PM', event: '마무리' }
]

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

// export async function getStaticProps({ locale }) {
//   // Load translation data based on the locale.
//   // For instance, import the correct JSON file dynamically:
//   const translations = await import(`../public/city/busan/locales/${locale}.json`);
  
//   return {
//     props: {
//       locale,
//       translations: translations.default,
//     },
//   };
// }

export default function ExampleCity({  }) {
  const router = useRouter()
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
        <title>Scrapyard Busan</title>
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
          gap: '10px'
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
            src="/city/busan/Big Logo.png"
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
                margin: '8%',
                fontSize: '23px'
              }}
            >
              엉뚱한 걸 만들고, 엉뚱한 상을 타보자!
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
              <Link href="https://busanforeignschool.org/" target="blank">
              부산외국인학교
              </Link>{' '}
              - 3월 15일-16일
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
          href="https://forms.hackclub.com/scrapyard-signup-kr?event=busan"
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
              참가하기
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
              Scrapyard 부산이 뭐냐구요?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              Scrapyard 부산은 부산에서 열리는, 당신이 생각할 수 있는 가장 엉뚱한 걸 개발할 수 있는 고등학생들을 위한 해커톤입니다. 아무거나 상관없다!{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
              느리게 타이핑할 수록 밝아지는 전구부터
              </Link>
              한 번도 쓸모 있을 거라 생각해본 적 없는 아이디어를 전부 Scrapyard에 모아보세요!! 경험이 없어도 걱정할 필요 없어요, Scrapyard Busan은 지금 당신이 필요합니다!
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
            Scrapyard 부산에서는 뭘 하나요?
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
          Scrapyard는 24시간 동안 진행되는 이벤트입니다. 아래는 스케줄입니다.
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
                  fontFamily: 'p22-stanyan',
                  minWidth: '150px'
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
            오시는 법
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
          부산외국인학교, 부산광역시 해운대구 대천로67번길 45 우편번호 49094
        </Heading>
        <Box
          sx={{
            width: ['100%', '80%'],
            height: '75vh',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            mb: '5vh',
            mt: 5
          }}
        >
          <iframe
            width="80%"
            height="100%"
            src="https://www.openstreetmap.org/export/embed.html?bbox=129.163558781147%2C35.17284143740811%2C129.16595131158832%2C35.174562520727385&amp;layer=mapnik&amp;marker=35.17370198362201%2C129.16475504636765"
            style={{ border: '1px solid black' }}
          ></iframe>
          <br />
          <small>
            <a href="https://www.openstreetmap.org/?mlat=35.173702&amp;mlon=129.164755#map=19/35.173702/129.164755"></a>
          </small>{' '}
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: 'white',
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
            position: 'relative',
            mb: '-20px'
          }}
        >
          스폰서
        </Heading>
        <p
          style={{
            fontSize: '1.5em'
          }}
        >
          Scrapyard는 이분들의 후원덕분에 계최될 수 있었던 행사입니다.
        </p>

        <Grid
          columns={[1, 1, 1, 2]}
          gap={4}
          sx={{
            maxWidth: '1200px'
          }}
        >
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Link href="https://busanforeignschool.org/">
              <Image
                src="/city/busan/sponsors/bfs.png"
                sx={{
                  maxHeight: '150px'
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Link href="https://hackclub.com/">
              <Image
                src="/city/busan/sponsors/hackclub.png"
                sx={{
                  maxHeight: '150px'
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Link href="https://algoverseairesearch.org/">
              <Image
                src="/city/busan/sponsors/algoverse.png"
                sx={{
                  maxHeight: '150px'
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Link href="https://www.tkbend.co.kr/eng/main/main.php">
              <Image
                src="/city/busan/sponsors/tk.png"
                sx={{
                  maxHeight: '150px'
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Link href="https://www.instagram.com/bfshsstuco/">
              <Image
                src="/city/busan/sponsors/stuco.png"
                sx={{
                  maxHeight: '150px'
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Link href="https://csteachers.org/cshs/">
              <Image
                src="/city/busan/sponsors/cshs.png"
                sx={{
                  maxHeight: '150px'
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Link href="https://www.busanbank.co.kr/">
              <Image
                src="/city/busan/sponsors/bnk.svg"
                sx={{
                  maxHeight: '150px'
                }}
              />
            </Link>
          </Box>
        </Grid>
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
          자주 물어보시는 질문
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
            '누가 참여할 수 있나요?': (
              <>
                고등학생이라면 누구나 환영! Hack Club을 몰라도 참여할 수 있어요.
              </>
            ),
            '돈을 내야 하나요?': (
              <>
                아뇨, Scrapyard 부산에서는 이 모든 게 무료입니다! 식사, 숙소, 그리고 즐거운 경험들 전부요.
              </>
            ),
            '참가하려면 팀이 필요한가요? ': (
              <>
              참가하기 전에는 팀이 필요 없어요. 신청은 개인 단위로 이루어져 있고, 만약 팀을 꾸리고 싶다면 행사 당일날에 만드실 수 있어요. 만약 함께하고 싶은 멤버들이 있어도 모두 신청은 각각 해야 해요.
              </>
            ),
            '준비물은 뭐가 필요할까요?': (
              <>
                노트북, 충전기, 그리고 준비된 마음가짐! 세면도구와 침낭도 챙겨주세요. 만약 하드웨어를 만들고 싶다면 관련 도구를 가져오시는 것도 추천!
              </>
            ),
            '코딩을 잘 못 해도 참가 가능할까요?': (
              <>
                저희 해커톤은 실력과 관계없이 모두를 위한 해커톤이에요! 다 함께 워크숍과 다양한 이벤트가 열릴 테니 걱정할 필요없이 같이 배워요. 만약 관련 작업물들을 보고 싶으시면 여기{' '}
                <Link href="https://workshops.hackclub.com/">
                Hack Club 워크숍
                </Link>들을 확인해보세요!
              </>
            ),
            '이 행사에서는 뭘 만들어야 할까요?': (
              <>
                당신의 가장 엉뚱한 상상들을 만들어요?쓸데없다면 더 좋고요. 게임? 앱? 웹사이트? 프로그래밍 언어? 하드웨어? 아무거나 가능합니다! 필요한 준비물과 멘토들은 저희가 준비할 테니 오시기만 하세요.
              </>
            ),
            '이런 행사가 열린 적 있나요?': (
              <>
                Hack Club은 세계 곳곳에서 행사들을 열어요! 마찬가지로 24시간 해커톤이였던{' '}
                <Link href="https://youtu.be/PnK4gzO6S3Q" target="_blank">
                샌프란시스코 해커톤
                </Link>{' '}
                50여 개의 도시에서 열린{' '}
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                >
                   게임잼
                </Link>{' '}, 그리고  버몬트에서 LA까지 가는{' '}
                <Link href="https://youtu.be/2BID8_pGuqA" target="_blank">
                기차에서까지 열렸던 해커톤
                </Link>{' '}까지 있었죠.
              </>
            ),
            '부모님이 걱정하시면 어쩌죠?': (
              <>
                저희가 도울 수 있습니다! 학부모를 위한 가이드가 곧 나올 거지만 만약 따로 질문이 있다면{' '}
                <Link href="mailto:scrapyardbusan@bfs.or.kr">
                  scrapyardbusan@bfs.or.kr
                </Link>{' '}
                으로 연락해주세요.
              </>
            ),
            '만약 더 질문이 있다면 어떡하죠?': (
              <>
                부디 연락해주세요! Hack Club slack의 #scrapyard-busan 채널 혹은{' '}
                <Link href="mailto:scrapyardbusan@bfs.or.kr">
                  scrapyardbusan@bfs.or.kr
                </Link>
                으로 이메일 해주세요.
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
          href="https://forms.hackclub.com/scrapyard-signup-kr?event=busan"
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
              Scrapyard 부산에 신청하기
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
          고등학생들이 만든, 고등학생들을 위한 Hack Club
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
          <Link href="https://hackclub.com/clubs">동아리</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/hackathons">해커톤</Link>
        </Text>
      </Box>
    </Box>
  )
}