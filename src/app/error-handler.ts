import { ErrorHandler, Injectable } from '@angular/core';

import { LoggerService } from 'utils';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private logger: LoggerService) {

    this.logger.info('Global Error Handler registered');
  }

  handleError(error) {

    this.logger.info('GlobalErrorHandler: handleError()');

    window.alert(error);
  }
}

// this.logger.error(error);
