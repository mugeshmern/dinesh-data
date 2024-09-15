/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  // Path to the stories
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  // Addons to enhance Storybook functionality
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions', // Optional: for interaction testing
    '@storybook/addon-a11y', // Optional: for accessibility checks
  ],

  // Framework and Webpack configuration
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  // Docs configuration
  docs: {
    autodocs: 'tag',
  },

  // Webpack configuration customization (if needed)
  webpackFinal: async (config) => {
    // Customize the Webpack config here (e.g., add custom loaders or plugins)
    // Example: Add a custom loader
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'],
    // });

    return config;
  },
};

export default config;
