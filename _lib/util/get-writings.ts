export const getUrl = (path: string) => {
  if (path.startsWith('/')) path = path.slice(1)
  return encodeURI(
    `https://raw.githubusercontent.com/robust-lobsters/robust-lobsters.github.io/refs/heads/main/__writings/${path}`
  )
}

const response = await fetch(
  'https://raw.githubusercontent.com/robust-lobsters/robust-lobsters.github.io/refs/heads/main/__writings/writings.map.json'
)

export const writingsWithFileType = (await response.json()) as string[]

export const titles: string[] = []

export const writingsData: Record<string, string> = {}

writingsWithFileType.forEach(file => {
  const filename = file.split('/').pop()! // 'test.md'
  const title = filename.replace(/\.md$/, '') // 'test'

  titles.push(title)
  writingsData[title] = getUrl(file)
})
