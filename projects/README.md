# Project CMS Data

This portfolio now reads project data from JSON files in this folder.

## Add a project
1. Create a new JSON file in this folder (copy an existing one).
2. Fill out `summary`, `detail`, and `thumbnail`.
3. Add the file name to `manifest.json` in the position/order you want.

## Remove a project
1. Remove its file name from `manifest.json`.
2. Delete the JSON file.

## Field reference
- `summary.title` / `summary.medium`: shown on hover in the home page header.
- `thumbnail`: controls the home page tile (`image`, `colorClass`, optional `imageClass`, optional `imageStyle`).
- `detail`: content used for the project page view (`title`, `iframe`, `body`, `press`, `images`).
