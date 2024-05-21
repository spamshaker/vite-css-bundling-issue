export async function loadTheme(name: string) {
  await import(`./${name}.css`, { with: { type: 'css' } });
}