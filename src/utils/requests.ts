const BASE_URL = 'https://canary.discord.com';
const asset = (path: string) =>
    path.startsWith('/assets/')
        ? BASE_URL.concat(path)
        : BASE_URL.concat('/assets/', path);

async function getText<T>(url: string, parse?: boolean): Promise<T> {
    const text = await (
        await fetch(url, {
            headers: {
                'user-agent': 'Mozilla/5.0',
            },
        })
    ).text();
    if (parse) return JSON.parse(text);
    return text as T;
}

export { asset, BASE_URL, getText };
