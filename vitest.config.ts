import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';
function r(p: string) {
  return resolve(__dirname, p);
}
const alias = {
  '@eliduty/test': r('packages/test/src/'),
};
export default defineConfig({
  resolve: {
    alias,
  },
});
