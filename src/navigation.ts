import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Writing', href: getPermalink('/writing') },
    { text: 'Speaking', href: getPermalink('/speaking') },
    { text: 'Testimonials', href: getPermalink('/testimonials') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Writing', href: getPermalink('/writing') },
        { text: 'Speaking', href: getPermalink('/speaking') },
        { text: 'Testimonials', href: getPermalink('/testimonials') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/cruiseshipkaren/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/cruiseshipkaren/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/karen-worrall' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://nickworrall.co.uk/" target="_blank" rel="noopener noreferrer"> Nick Worrall</a> · Copyright © 2024 Karen Worrall
  `,
};
