interface Sponsor {
  name: string
  img: string
  url: string
}

const vitestSponsors = {
  special: [
    {
      name: 'VoidZero',
      url: 'https://voidzero.dev',
      img: 'https://www.chvc.com.cn/data/upload/20180408/1523156073295709.png',
    },
    {
      name: 'NuxtLabs',
      url: 'https://nuxtlabs.com',
      img: 'https://www.chvc.com.cn/data/upload/20170818/1503035919991104.png',
    },
    {
      name: 'Stackblitz',
      url: 'https://stackblitz.com',
      img: '/stackblitz.svg',
    },
    {
      name: 'Zammad',
      url: 'https://zammad.com',
      img: '/zammad.svg',
    },
  ],
  platinum: [
    {
      name: 'Bit',
      url: 'https://bit.dev',
      img: '/bit.svg',
    },
  ],
  gold: [
    {
      name: 'vital',
      url: 'https://vital.io/',
      img: '/vital.svg',
    },
  ],
} satisfies Record<string, Sponsor[]>

export const sponsors = [
  {
    //tier: ' ',
    size: 'big',
    items: vitestSponsors.special,
  }
]
