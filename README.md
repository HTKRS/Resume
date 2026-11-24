# 서현석 CV 홈페이지

Hyeon-Seok Seo (서현석)의 CV를 한 페이지로 보여 주는 사이트입니다. GitHub Pages(Jekyll)로 배포하며, 한국어와 영어를 오른쪽 위 버튼으로 전환합니다.

## 내용 고치는 법

글과 목록은 모두 `_data/` 폴더의 yml 파일에 있습니다. 파일을 고쳐서 올리면 1~2분 안에 사이트에 반영됩니다.

| 고칠 내용 | 파일 |
|---|---|
| 이름, 소속, 소개 글, 링크, 연구 분야, 기술 | `_data/profile.yml` |
| 학력 | `_data/education.yml` |
| 연구 경력, 창업 경력 | `_data/experience.yml` |
| 논문 | `_data/publications.yml` |
| 학회 발표 | `_data/presentations.yml` |
| 수상 | `_data/awards.yml` |
| 선정된 창업 지원사업 | `_data/programs.yml` |
| 멘토링·활동 | `_data/activities.yml` |

- `_en` 은 영문 화면, `_ko` 는 국문 화면에 나옵니다. 둘 다 채워 주세요.
- 논문 파일은 AMGL 홈페이지의 `_data/publications.yml` 과 형식이 같아서, 항목을 그대로 복사해 오면 됩니다. 저자 목록에서 내 이름은 자동으로 굵게 표시되고, 내 이름 뒤에 `¹` 이 있으면 "공동 제1저자" 표시가 붙습니다.
- 논문 편수와 공동 제1저자 편수는 자동으로 셉니다.
- 사진은 `assets/img/profile.jpg` 를 같은 이름으로 바꿔 넣으면 됩니다.
- 강조색(루비색)은 `assets/css/style.css` 맨 위 `--ruby` 계열 세 값으로 바꿉니다.

## CV PDF 만들기

사이트 오른쪽 위 "인쇄·PDF 저장" 버튼(또는 Ctrl+P)을 누르고 "PDF로 저장"을 고르면 A4 3쪽 분량의 CV가 나옵니다. 화면에 보이는 언어 그대로 인쇄됩니다.

## 처음 배포할 때 (한 번만)

저장소 Settings → Pages → Build and deployment 에서 Source 를 "Deploy from a branch", Branch 를 `main` / `/ (root)` 로 고르고 저장합니다. 주소는 `https://htkrs.github.io/Resume/` 입니다. 저장소 이름을 `HTKRS.github.io` 로 바꾸면 주소가 `https://htkrs.github.io/` 가 되며, 사이트 설정은 건드릴 필요가 없습니다.
