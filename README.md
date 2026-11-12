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

## Work videos
YouTube demos use local poster images and load a privacy-enhanced player only after a click. Foundation clips are attributed to their public sources; the X video streams from the original publisher’s CDN and keeps an original-post link.

The tactile demonstration is an 18-second, silent excerpt (00:32–00:50) from Giovanni’s supplied early-prototype film. Two synchronized crops show contact and the heatmap, excluding other monitor content. The original MOV, audio and source metadata are not published. This is labelled as an early-stage prototype, not the latest sensor.

The primary tactile demo is the supplied hand prototype film, exported to 1600×900 H.264 at 30 fps with no audio or source metadata. The actuator assembly below the physical hand is blurred throughout; the poster is extracted from this edited export. Only the edited MP4 and poster may be published. The source MP4 stays outside the repository. Visible copy explicitly identifies it as a development prototype, not the final hardware used on the robot. The earlier flat-sensor demonstration is retained in a collapsed disclosure.
