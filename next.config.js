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
      source: '/cleveland',
      destination: 'https://scrapyardcle.org',
      permanent: true
    }
  ]
})
