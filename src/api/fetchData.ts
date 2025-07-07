

export async function fetchData(
  url: string,
  headers: Record<string, string> = {},
  type: 'json' | 'text' = 'json'
): Promise<any> {
  let response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${url}`);
  }

  return type === 'json' ? response.json() : response.text();
}