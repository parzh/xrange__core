import type XRange from "./typings/xrange";

export default function* xrange(start: number, stop: number, step = 1): XRange {
	const _stop = +stop;
	const _step = +step;
	const isUp = _step > 0;

	for (
		let curr = +start;
		isUp ? curr < _stop : curr > _stop;
		curr += _step
	)
		yield curr;

	return undefined;
}
