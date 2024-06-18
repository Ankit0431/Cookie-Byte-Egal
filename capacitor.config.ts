import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'cfg',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    Geolocation: {
      enabled: true
    }
  }
};

export default config;
