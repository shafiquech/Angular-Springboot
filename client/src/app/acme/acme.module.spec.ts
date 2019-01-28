import { AcmeModule } from './acme.module';

describe('AcmeModule', () => {
  let acmeModule: AcmeModule;

  beforeEach(() => {
    acmeModule = new AcmeModule();
  });

  it('should create an instance', () => {
    expect(acmeModule).toBeTruthy();
  });
});
