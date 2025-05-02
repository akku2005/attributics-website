import { useTheme } from '../contexts/ThemeContext';

function ThemeTest() {
  const { theme } = useTheme();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Theme Test Page
      </h1>
      <p className="text-lg mb-4">
        Current theme: <span className="font-semibold">{theme}</span>
      </p>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <p className="text-gray-700 dark:text-gray-200">
          This box should have a {theme === 'light' ? 'white' : 'dark gray'} background.
        </p>
      </div>
    </div>
  );
}

export default ThemeTest;