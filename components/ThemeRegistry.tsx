'use client';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: { primary: { main: '#1464d2', dark: '#0d3f8e' }, secondary: { main: '#ef8c45' }, background: { default: '#f7f9fc' } },
  typography: { fontFamily: "'DM Sans', sans-serif", h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }, h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }, h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 } },
  shape: { borderRadius: 14 },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>;
}