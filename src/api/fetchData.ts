


export async function fetchData<T>(url: string, headers: Record<string, string> = {}, type: 'json' | 'text' = 'json'): Promise<T> {
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${url}`);
  }

  return type === 'json'
    ? await response.json()
    : await response.text() as T;
}
