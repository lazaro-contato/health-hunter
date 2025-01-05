import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.healthhunter.app',
  appName: 'Health Hunter',
  webDir: 'www',
  server: {
    "url": "http://192.168.1.16:8100",
    cleartext: true,
  }
};

export default config;
