import { useTodoProvider, useTodos } from './useTodo';
import { useThemeProvider, useTheme } from './useTheme';

export { useTodos, useTheme, useTodoProvider };

export default function useProvider() {
  useThemeProvider();
}
