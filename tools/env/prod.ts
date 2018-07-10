import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'https://angularseeddotnet.azurewebsites.net/api'
};

export = ProdConfig;

