import { Pokemon } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Pokemon()).toBeTruthy();
  });
});
