import { DexConfigMap } from '../../types';
import { Network } from '../../constants';
import { DexParams } from './types';

export const QuickSwapConfig: DexConfigMap<DexParams> = {
  CamelotV3: {
    [Network.ARBITRUM]: {
      factoryAddress: '0x1a3c9B1d2F0529D97f2afC5136Cc23e58f1FD35B',
      router: '0x1F721E2E82F6676FCE4eA07A5958cF098D339e18',
      quoteAddress: '0x0Fc73040b26E9bC8514fA028D998E73A254Fa76E',
      initCode:
        '0x6c1bebd370ba84753516bc1393c0d0a6c645856da55f5393ac8ab3d6dbc861d3',
    },
  },
  ZyberSwapV3: {
    [Network.ARBITRUM]: {
      factoryAddress: '0x9C2ABD632771b433E5E7507BcaA41cA3b25D8544',
      router: '0xFa58b8024B49836772180f2Df902f231ba712F72',
      quoteAddress: '0xAeD211346Fa2E6A5063b4f273BCf7DDbD0368d62',
      initCode:
        '0x6ec6c9c8091d160c0aa74b2b14ba9c1717e95093bd3ac085cee99a49aab294a4',
    },
  },
  QuickSwapV3: {
    [Network.POLYGON]: {
      factoryAddress: '0x411b0fAcC3489691f28ad58c47006AF5E3Ab3A28',
      router: '0xf5b509bb0909a69b1c207e495f687a596c168e12',
      quoteAddress: '0xa15f0d7377b2a0c0c10db057f641bed21028fc89',
      initCode:
        '0xfa2ad44b9e39d38a7d396bb44a41ea957ac7b622c5c6afdc285728c300b3382a',
    },
  },
  SpiritSwapV3: {
    [Network.FANTOM]: {
      factoryAddress: '0x7c1864d96A1AeD6F171BE1880CA9c2c51846E502',
      router: '0x940438cEd3062E3F7aE311c789FA9dDd3a5eA951',
      quoteAddress: '0x2E0e6a11609003Ca596F143d40e6b62eE92c501A',
      initCode:
        '0xbce37a54eab2fcd71913a0d40723e04238970e7fc1159bfd58ad5b79531697e7',
    },
  },
};
