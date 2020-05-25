import { expect } from './chai';
import { BalenaLibSkeletonMain } from '../src/index';

describe('Balena typescript lin skeleton:', function () {
	it('should print Hello World', async function () {
		expect(BalenaLibSkeletonMain).to.be.a('function');

		await expect(BalenaLibSkeletonMain()).to.eventually.become('Hello World');
	});
});
