/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  coverageProvider: "v8",
  testEnvironment: 'node'
};

export default config;
