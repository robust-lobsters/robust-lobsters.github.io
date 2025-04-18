export const getUrl = (path: string) => {
  console.log(path)
  return `https://raw.githubusercontent.com/robust-lobsters/robust-lobsters.github.io/refs/heads/main/__writings/${encodeURI(
    path
  )}`
}

const response = await fetch(
  'https://raw.githubusercontent.com/robust-lobsters/robust-lobsters.github.io/refs/heads/main/__writings/writings.map.json'
)

export const writingsWithFileType = (await response.json()) as string[]

export const titles: string[] = []

export const writingsData = writingsWithFileType.map(file => {
  const filename = file.split('/').pop()! // 'test.md'
  const title = filename.replace(/\.md$/, '') // 'test'

  titles.push(title)
  return { [title]: getUrl(file) }
})
