import { Inject } from '@nestjs/common';
import {
  ConfigurableModuleClass,
  HTTP_MODULE_OPTIONS,
  OPTIONS_TYPE,
} from './http-client.module-definition';

export class HttpClientModule extends ConfigurableModuleClass {
  constructor(@Inject(HTTP_MODULE_OPTIONS) private options) {
    super();

    console.log('http module options', options);
  }

  static register(options: typeof OPTIONS_TYPE) {
    return {
      ...super.register(options),
    };
  }

  static registerAsync(options: typeof OPTIONS_TYPE) {
    return {
      ...super.registerAsync(options),
    };
  }
}
