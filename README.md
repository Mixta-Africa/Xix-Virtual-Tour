# Project XIX Estate Tour

Static 360 walk-through of the estate (53 spots, Unreal renders). No server code.

## Deploy on Cloudflare Pages (fastest, no GitHub needed)
1. Cloudflare dashboard > Workers & Pages > Create > Pages > Upload assets.
2. Name the project (e.g. xix-tour) and drag in this whole folder (or the zip).
3. Open the https://xix-tour.pages.dev link on the iPad in Safari.
4. Share > Add to Home Screen. Open it once on good Wi-Fi so every image caches; after that it works with no internet.

## Deploy from GitHub
Push this folder to a repo (git push, not the web uploader, which caps files at 25 MB; the largest file here is ~1.3 MB).
In Cloudflare Pages > Connect to Git > pick the repo, build command: none, output directory: /.

## Kiosk
iPad Settings > Accessibility > Guided Access: triple-click the side button inside the Home Screen app to lock it.
Offline caching needs HTTPS, so use the Cloudflare link (plain http IPs will not cache).
