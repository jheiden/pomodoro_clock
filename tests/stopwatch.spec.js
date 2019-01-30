import Stopwatch from '../scripts/stopwatch';

describe('Timer', () => {
	describe('stopwatch initialization', () => {
		let stopwatch;

		beforeEach(() => {
			stopwatch = new Stopwatch();
		});

		test('should have initial minutes of 25', () => {
			expect(stopwatch.minutes).toEqual(25);
		});

		test('should have initial seconds of 0', () => {
			expect(stopwatch.seconds).toEqual(0);
		});

		test('should format new stopwatch correctly', () => {
			expect(stopwatch.formatTime()).toEqual('25:00');
		});
	});
});

// expect(stopWatch.formatTime()).toEqual('25:00');
