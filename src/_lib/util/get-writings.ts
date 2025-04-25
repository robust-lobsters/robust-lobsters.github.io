export const getUrl = (path: string) => {
  if (path.startsWith('/')) path = path.slice(1);
  return encodeURI(
    `https://raw.githubusercontent.com/robust-lobsters/robust-lobsters.github.io/refs/heads/main/__writings/${path}`
  );
};

const res = async () => {
  return await fetch(
    'https://raw.githubusercontent.com/robust-lobsters/robust-lobsters.github.io/refs/heads/main/__writings/writings.map.json'
  );
};

export const writingsWithFileType = async () => {
  const response = await res();
  return (await response.json()) as Promise<string[]>;
};

export const titles: string[] = [];

//returns "xxxx-xxxx-xxxx.md"
export const writingsData = writingsWithFileType().then(data =>
  data.map(file => {
    const DOT = file.indexOf('.');
    const TITLE = file.slice(0, DOT);
    titles.push(TITLE);
    return {
      [TITLE]: getUrl(file),
    };
  })
);
