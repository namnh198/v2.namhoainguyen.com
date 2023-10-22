import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon, TvIcon } from '@heroicons/react/24/outline';

const themes = [
  { name: 'light', icon: <SunIcon className="w-5 h-5" /> },
  { name: 'system', icon: <TvIcon className="w-5 h-5" /> },
  { name: 'dark', icon: <MoonIcon className="w-5 h-5" /> },
];

export default function ToggleTheme() {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'system';
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if ((theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) || theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (theme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <div className="p-0.5 w-fit flex rounded-full border border-neutral-200 dark:border-neutral-700 gap-x-0.5">
      {themes.map(({ name, icon }) => (
        <button
          key={name}
          className={`w-9 h-9 flex items-center justify-center rounded-full ${
            theme === name
              ? 'bg-indigo-600 text-white'
              : 'text-slate-700 dark:text-slate-100 hover:text-slate-900 hover:dark:text-slate-300'
          } focus:outline-none`}
          data-theme={name}
          onClick={() => setTheme(name)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
