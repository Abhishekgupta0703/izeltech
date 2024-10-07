export default function sitemap() {
    return [
      {
        url: 'https://izeltech.in',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://izeltech.in/agency',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://izeltech.in/services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://izeltech.in/e-learning',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://izeltech.in/blogs',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }