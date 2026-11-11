# Giovanni Dal Lago
Personal website about robotics, tactile sensing, electronics, and Astreo.

## Development
`npm install` and `npm run dev`.

## Publishing
`npm run build:github` exports to `out/`. Pushing `main` publishes via GitHub Pages.

## Pages
- `/`: short biography
- `/work/`: experience, research, and public projects
- `/elsewhere/`: Astreo

## Content and privacy
Professional work is described at a high level. Do not add unpublished specifications, employer imagery, application PDFs, or the original CV without review.
The robot image comes from Giovanni's public project. The piano image comes from astreo.org. Navigation, body text, and imagery are intentionally kept simple.

## Future music section
Add a listening diary only after Giovanni supplies a verified Last.fm profile or music links. Do not publish invented taste, fake listening activity, or placeholder records. Last.fm can be fetched by a scheduled GitHub Action with the API key in Actions secrets; the public site should consume a static, sanitized JSON file.
