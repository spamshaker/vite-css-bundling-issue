const glob = import.meta.glob('./themes/*');

export async function loadTheme(name: string) {
  const theme = `./themes/theme-${name}.css`;
  await glob[theme]();
  // The following not working
  // await import(theme, { with: { type: 'css' } });
}