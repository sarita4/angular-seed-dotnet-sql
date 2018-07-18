import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'https://angularrelease.azurewebsites.net/api'
};

export = ProdConfig;

