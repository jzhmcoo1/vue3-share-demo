import { inject, provide, Ref, ref, watchEffect } from 'vue';
import storage from '@/utils/storage';

const THEME_KEY = 'theme';
const ThemeSymbol = Symbol('theme');

export enum Theme {
  'dark',
  'light',
}

interface ThemeProvider {
  theme: Ref<Theme>;
  changeTheme: () => void;
}

export function useThemeProvider() {
  const theme = ref<Theme>(Theme.light);

  const changeTheme = () => {
    theme.value = (theme.value + 1) % 2;
  };

  watchEffect(() => {
    storage.save(THEME_KEY, theme.value);
  });

  provide(ThemeSymbol, {
    theme,
    changeTheme,
  });
}

export const useTheme = () => {
  const themeContext = inject<ThemeProvider>(ThemeSymbol);
  if (!themeContext) {
    throw new Error(`useTheme must be used in ThemeProvider`);
  }
  return themeContext;
};
