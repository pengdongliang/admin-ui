/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  staticDirs: ["../stories/assets"],
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
    },
  },
}
export default config
