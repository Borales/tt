const index = require('./index');

describe('Index', () => {
  it('Dummy test', () => {
    expect(true).toBe(true);
  });

  it('Second test', () => {
    index.v();
    expect(false).toBe(false);
  });
});
