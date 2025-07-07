

export function updateText(id: string, content: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = content;
  } else {
    console.warn(`Elemento con id "${id}" no encontrado.`);
  }
}