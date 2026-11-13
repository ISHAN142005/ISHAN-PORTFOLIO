import React, { createContext, useContext, useState, useEffect } from 'react';

export type PortfolioTheme = 'cyber' | 'emerald' | 'gold' | 'violet' | 'crimson';

export interface ThemeMeta {
  id: PortfolioTheme;
  name: string;
  tagline: string;
  swatchPrimary: string;
  swatchSecondary: string;
}

export const PORTFOLIO_THEMES: ThemeMeta[] = [
  {
    id: 'cyber',
    name: 'Cyber Cyan',
    tagline: 'Pitch Black • Electric Cyan & Cobalt',
    swatchPrimary: '#38bdf8',
    swatchSecondary: '#3b82f6',
  },
  {
    id: 'emerald',
    name: 'Quant Emerald',
    tagline: 'Pitch Black • Matrix Emerald & Teal',
    swatchPrimary: '#34d399',
    swatchSecondary: '#06b6d4',
  },
  {
    id: 'gold',
    name: 'Obsidian Gold',
    tagline: 'Pitch Black • Royal Gold & Amber',
    swatchPrimary: '#fbbf24',
    swatchSecondary: '#f97316',
  },
  {
    id: 'violet',
    name: 'Neural Violet',
    tagline: 'Pitch Black • Deep Learning Purple & Pink',
    swatchPrimary: '#c084fc',
    swatchSecondary: '#e879f9',
  },
  {
    id: 'crimson',
    name: 'Crimson Core',
    tagline: 'Pitch Black • Laser Red & Rose',
    swatchPrimary: '#fb7185',
    swatchSecondary: '#ef4444',
  },
];

interface ThemeContextValue {
  theme: PortfolioTheme;
  setTheme: (theme: PortfolioTheme) => void;
  cycleTheme: () => void;
  commandOpen: boolean;
  setCommandOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<PortfolioTheme>(() => {
    try {
      const saved = localStorage.getItem('ishan-portfolio-theme') as PortfolioTheme | null;
      if (saved && PORTFOLIO_THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      // ignore storage errors
    }
    return 'cyber';
  });

  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('ishan-portfolio-theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const setTheme = (newTheme: PortfolioTheme) => {
    setThemeState(newTheme);
  };

  const cycleTheme = () => {
    const idx = PORTFOLIO_THEMES.findIndex((t) => t.id === theme);
    const next = PORTFOLIO_THEMES[(idx + 1) % PORTFOLIO_THEMES.length];
    setThemeState(next.id);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        cycleTheme,
        commandOpen,
        setCommandOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const usePortfolioTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('usePortfolioTheme must be used within ThemeProvider');
  }
  return ctx;
};
