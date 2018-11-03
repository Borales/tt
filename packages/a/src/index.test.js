const index = require('./index');

describe('Index', () => {
  it('Dummy test', () => {
    index();
    expect(true).toBe(true);
  });

  it('Second test', () => {
    expect(false).toBe(false);
  });
});
