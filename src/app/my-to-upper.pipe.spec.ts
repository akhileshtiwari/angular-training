import { MyToUpperPipe } from './my-to-upper.pipe';

describe('MyToUpperPipe', () => {
  it('create an instance', () => {
    const pipe = new MyToUpperPipe();
    expect(pipe).toBeTruthy();
  });
});
