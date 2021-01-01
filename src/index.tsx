import { NativeModules } from 'react-native';

type NullaEnvType = {
  multiply(a: number, b: number): Promise<number>;
};

const { NullaEnv } = NativeModules;

export default NullaEnv as NullaEnvType;
