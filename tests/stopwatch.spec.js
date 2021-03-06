import Stopwatch from '../scripts/stopwatch';

describe('Timer', () => {
	let stopwatch;
	const $1M10SInMs = 70000;
	const $26MInMs = 1560000;
	const $25MInMs = 1500000;
	const $30MInMs = 1800000;
	const $31MInMs = 1860000;
	const $126MInMs = 7560000;
	const $151MInMs = 9060000;


	beforeEach(() => {
		stopwatch = new Stopwatch(true);
	});

	describe('stopwatch initialization', () => {
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

	describe('stopwatch can count down correctly', () => {
		beforeEach(() => {
			jest.useFakeTimers();
			stopwatch.start();
		});
		test('can roll over', () => {
			jest.advanceTimersByTime(3000);
			jest.runOnlyPendingTimers();

			expect(stopwatch.minutes).toEqual(24);
			expect(stopwatch.seconds).toEqual(56);
		});

		test('can roll over to next minute', () => {
			jest.advanceTimersByTime($1M10SInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.minutes).toEqual(23);
		});

		test('can roll over many seconds', () => {
			jest.advanceTimersByTime($1M10SInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.seconds).toEqual(49);
		});

		test('has toggled to 5 at exactly 25min', () => { // does this test require too much precision?
			jest.advanceTimersByTime($25MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.minutes).toEqual(5);
		});

		test('can not roll below zero minutes', () => {
			jest.advanceTimersByTime($26MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.minutes).not.toEqual(-2);
		});

		test('can roll over in breaktime', () => {
			jest.advanceTimersByTime($26MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.minutes).toEqual(4);
			expect(stopwatch.seconds).toEqual(0);
		});

		test('can roll over exactly 5 min in breaktime', () => {
			jest.advanceTimersByTime($30MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.minutes).toEqual(0);
			expect(stopwatch.seconds).toEqual(0);
		});
	});

	describe('can manage different states', () => {
		beforeEach(() => {
			jest.useFakeTimers();
			stopwatch.start();
		});

		test('should set initial state correctly', () => {
			expect(stopwatch.state).toEqual('worktime');
		});

		test('should change to break state when time is up', () => {
			jest.advanceTimersByTime($26MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.state).toEqual('breaktime');
		});

		test('should have toggled state to breaktime after exactly 25min', () => {
			jest.advanceTimersByTime($25MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.state).toEqual('breaktime');
		});

		test('should have breaktime state after exactly 30min', () => {
			jest.advanceTimersByTime($30MInMs + 1000);
			jest.runOnlyPendingTimers();

			expect(stopwatch.state).toEqual('worktime');
		});

		test('should be able to switch back to workstate after ended break', () => {
			jest.advanceTimersByTime($31MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.state).toEqual('worktime');
		});

		test('has correct state after ridicolous time', () => {
			jest.advanceTimersByTime($31MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.state).toEqual('worktime');
		});

		test.skip('has correct state after ridicolous time', () => {
			jest.advanceTimersByTime($126MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.state).toEqual('worktime');
		});

		test.skip('has correct state after ridicolous time 2', () => {
			jest.advanceTimersByTime($151MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.state).toEqual('breaktime');
		});

		test.skip('breaktime state has correct start values', () => {
			jest.advanceTimersByTime($25MInMs);
			jest.runOnlyPendingTimers();

			expect(stopwatch.minutes).toEqual(5);
			expect(stopwatch.minutes).toEqual(0);
		});
	});
});
