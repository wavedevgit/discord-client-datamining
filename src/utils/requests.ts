const BASE_URL = 'https://canary.discord.com';
const asset = (path: string) =>
    path.startsWith('/assets/')
        ? BASE_URL.concat(path)
        : BASE_URL.concat('/assets/', path);

async function getText(url: string): Promise<string> {
    return await (
        await fetch(url, {
            headers: {
                'user-agent': 'Mozilla/5.0',
            },
        })
    ).text();
}

export { asset, BASE_URL, getText };
