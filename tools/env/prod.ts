import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'https://angularseeddotnetsql.azurewebsites.net/api'
};

export = ProdConfig;

