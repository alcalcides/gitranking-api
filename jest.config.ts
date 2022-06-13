import type { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
}

export default config
