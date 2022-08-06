import { AuthService } from './auth.service';
import { Test } from '@nestjs/testing';
it('can create an instance of auth services', async () => {
  const module = await Test.createTestingModule({
    providers: [AuthService],
  }).compile();

  const service = module.get(AuthService);

  expect(service).toBeDefined();
});
