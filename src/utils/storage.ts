export const DEFAULT_KEY = 'VUE3_SHARE_';

export const getKey = (key: string) => (DEFAULT_KEY + key).toUpperCase();

export default {
  fetch<T>(key: string): T | null {
    return JSON.parse(window.localStorage.getItem(getKey(key)) || 'null');
  },

  save<T>(key: string, value: T): void {
    window.localStorage.setItem(getKey(key), JSON.stringify(value));
  },
};
