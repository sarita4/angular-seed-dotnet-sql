import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'https://devopsapp2.azurewebsites.net/api'
};

export = ProdConfig;

