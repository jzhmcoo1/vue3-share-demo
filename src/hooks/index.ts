import { useTodoProvider, useTodos } from './useTodo';
import { useThemeProvider, useTheme } from './useTheme';

export { useTodos, useTheme };

export default function useProvider() {
  useTodoProvider();
  useThemeProvider();
}
