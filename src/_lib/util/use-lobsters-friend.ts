import { useEffect, useMemo, useState } from 'react'

export function shuffle<T>(arr: T[]): T[] {
  const res = [...arr]
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[res[i], res[j]] = [res[j], res[i]]
  }
  return res
}

export const useLobstersFriend = (): string[] => {
  const friends = useMemo(
    () => ['🐟', '🐠', '🐡', '🦈', '🐬', '🪼', '🦐', '🦀', '🦑', '🐙', '🐋'],
    []
  )

  const [f, setFriends] = useState<string[]>(friends)

  useEffect(() => {
    setFriends(shuffle(friends))
  }, [friends])

  return f
}
