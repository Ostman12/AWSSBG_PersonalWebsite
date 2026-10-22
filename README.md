# Personal website starter

A static personal site. You edit one file, `content.json`, and AWS Amplify redeploys on every push to GitHub.

## Preview locally

The page loads `content.json` with `fetch`, so open it through a local server, not by double-clicking `index.html`:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy with AWS Amplify

1. Fork this repo to your GitHub account.
2. In the AWS console, open **AWS Amplify** and choose **Create new app**, then **GitHub**.
3. Authorize the Amplify GitHub app and pick your fork and the `main` branch.
4. Accept the detected settings (`amplify.yml` is in the repo) and choose **Save and deploy**.
5. Open the `amplifyapp.com` URL when the build finishes.

## Change the site

1. Edit `content.json` (name, tagline, about, projects, links).
2. Commit and push to `main`.
3. Amplify rebuilds and the live site updates in about a minute.

If the page shows a "Couldn't load content.json" message, the file has a JSON mistake, usually a missing comma or quotation mark.

## Change the look

Colors and fonts are the variables at the top of `styles.css`.

## Clean up

When you finish, delete the app in Amplify (**App settings > General settings > Delete app**) so it doesn't keep running.
