import { Command, CommandHandler } from '../lib/command';
import { runProcess } from '../utils/process';
import { packageRoot } from '../utils/path';
import { logErrorBold } from '../utils/ui';
import { Config } from '../models/Config';

@Command({
  name: 'generate',
  alias: 'g',
  description: 'Generate Components, Connected Components or Modules.',
})
export class Generate implements CommandHandler {
  public async run(args: string[], silent: boolean) {
    try {
      await runProcess('plop', ['--plopfile', packageRoot('dist/generators/index.js')], { silent });

      await runProcess('vue-starter-service', ['prettier', '--pattern', `${Config.generators.outputDirectory}/**/*`], {
        silent,
      });
    } catch (e) {
      logErrorBold(e);
    }
  }
}
