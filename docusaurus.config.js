module.exports = {
  title: 'Java DevZone',
  tagline: 'Gostamos de java, aprendemos sobre tudo.',
  url: 'https://java-devzone.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Java-DevZone', // Usually your GitHub org/user name.
  projectName: 'Java-DevZone.github.io', // Usually your repo name.
  customFields: {
    title: 'Semana Master Backend Developers',
    sub: 'Venha aprender a base para ser um desenvolvedor backend',
    link: 'https://mailchi.mp/dfbb087dbd2b/master-developer',
    btnTitle: 'Quero Participar'
  },
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Java DevZone',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      links: [
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/Java-DevZone',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/FP5UaAG',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Java-DevZone',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Java DevZone.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
