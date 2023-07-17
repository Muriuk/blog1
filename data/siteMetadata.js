const siteMetadata = {
  title: 'Blog | Kelvin Muriuki',
  author: 'Kelvin Muriuki',
  headerTitle: '',
  description: 'my personal portfolio and blog where I share my skills and thoughts',
  snippets: 'Reuseable code snippets collected by Kelvin',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: '',
  siteRepo: '',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/kev 2.jpg',
  socialBanner: '/static/images/twitter1-card.png',
  email: 'muriukikelvin27@gmail.com',
  github: 'https://github.com/Muriuk',
  twitter: 'https://twitter.com/kevswirl',
  linkedin: 'https://www.linkedin.com/in/kelvin-muriuki-8866891ba/',
  website: '',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-MB6NWDGBDE', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      //theme example: light, dark, dark_dimmed, dark_high_contrast
      //transparent_dark, preferred_color_scheme, custom
      theme: 'dark_high_contrast',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'kevswirl',
  },
}

module.exports = siteMetadata
