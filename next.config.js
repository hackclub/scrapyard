const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  redirects: () => [
    {
      source: '/busan',
      destination: 'https://scrapyard.hackclub.com/busan/kr',
      permanent: true
    },
    {
      source: '/hongkong',
      destination: 'https://scrapyard.hk',
      permanent: true
    },
    {
      source: '/taiwan',
      destination: 'https://scrapyard.hackit.tw',
      permanent: true
    },
    {
      source: '/siliconvalley',
      destination: '/silicon-valley',
      permanent: true
    },
    {
      source: '/cleveland',
      destination: 'https://scrapyardcle.org',
      permanent: true
    },
    {
      source: '/lisbon',
      destination: 'https://scrapyard.pt',
      permanent: true
    },
    {
      source: '/san-francisco',
      destination: 'https://scrapyardsf.com',
      permanent: true
    },
    {
      source: '/boston/home',
      destination: 'https://scrapyard.hackclub.com/boston',
      permanent: true
    },
    {
      source: '/chicago',
      destination: 'https://scrapyardchicago.com',
      permanent: true
    }
  ]
})
