# 기술 문서

## 문서 추가 방법

1. `__writings` 폴더에 `제목.md`로 파일 작성. 컨벤션은 kebab-case

   - 이미지 등 첨부 파일의 상세 디렉토리 경로는 `https://raw.githubusercontent.com/robust-lobsters/robust-lobsters.github.io/refs/heads/main/__writings/{...}` 로 시작하여야 함

2. `writings.map.json`에 마크다운 문서의 파일명(`제목.md`) 추가
   - 하위 디렉토리가 있다면 하위 디렉토리까지 `uri` 형태로 포함하여야 함 (`/test/test-2.md`)
3. `main` 브랜치에 푸시 후 사이트 빌드 확인
