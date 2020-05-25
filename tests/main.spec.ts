import { expect } from './chai';
import { LibrarySkeletonMain } from '../src/index';

describe('TypeScript library skeleton:', function () {
	it('should print Hello World', async function () {
		expect(LibrarySkeletonMain).to.be.a('function');

		await expect(LibrarySkeletonMain()).to.eventually.become('Hello World');
	});
});
