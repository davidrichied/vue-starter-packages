import * as path from 'path';
import * as fs from 'fs';
import { Package } from '../models/Package';

export const packageRoot = (dir: any = '') => {
  return path.join(process.cwd(), 'node_modules/vue-starter-service', dir);
};

export const runtimeRoot = (dir: any = '') => {
  return path.join(process.cwd(), dir);
};

export const folderExists = (folder: string): boolean => {
  return fs.existsSync(path.join(path.resolve(process.cwd()), 'src', 'app', folder));
};

export const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);

  if (fs.existsSync(dirname)) {
    return true;
  }

  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
};
