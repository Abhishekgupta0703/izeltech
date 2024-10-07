export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '*',
        // allow: ['/','/agency','/services','/e-learning','/blogs','/blogs/*','contact'],
        disallow: '/private/',
      },
      sitemap: 'https://izeltech.in/sitemap.xml',
    }
  }