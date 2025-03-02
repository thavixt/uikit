import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    '../packages/uikit/src/Readme.mdx',
    "../packages/uikit/src/stories/**/*.stories.mdx",
    "../packages/uikit/src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-themes")
  ],
  framework: getAbsolutePath("@storybook/react-vite"),
  core: {
    disableTelemetry: true,
  }
};
export default config;

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}
