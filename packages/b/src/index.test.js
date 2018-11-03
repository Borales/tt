const index = require('./index');

describe('Index', () => {
  it('Dummy test', () => {
    expect(true).toBe(true);
  });

  it('Second test', () => {
    index.t();
    expect(false).toBe(false);
  });
});
