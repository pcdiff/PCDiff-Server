import {PDServer} from '../src/PDServer';

describe('PDServer',  () => {

	it('should start server without error', () => {

		const startSpy =jest.spyOn(PDServer,'start');

		const isStarting = PDServer.start();

		expect(startSpy).toHaveBeenCalled();
		expect(isStarting).toBe(0);

		startSpy.mockRestore();
	});
});