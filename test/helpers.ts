import type { XRange } from "../src/xrange";

export const REASONABLY_LARGE_NUMBER = 5184;

export function expectToBeCloseTo(range: XRange, expected: readonly number[]): void {
	let count = 0;

	for (const number of range)
		expect(number).toBeCloseTo(expected[count++]);

	expect(count).toEqual(expected.length);
}
