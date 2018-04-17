// tslint:disable-next-line:no-implicit-dependencies
import { app, remote } from 'electron';
import { join } from 'path';

/** Returns whether the SDK is running in the main process. */
export function isMainProcess(): boolean {
  return process.type === 'browser';
}

/** Returns whether the SDK is running in a renderer process. */
export function isRenderProcess(): boolean {
  return process.type === 'renderer';
}

/** Returns the Electron App instance. */
export function getApp(): Electron.App {
  return isMainProcess() ? app : remote.app;
}

/** Gets the path to the Sentry cache directory. */
export function getCachePath(): string {
  return join(getApp().getPath('userData'), 'sentry');
}