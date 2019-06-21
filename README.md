# netlify-dx-browser-extension

https://github.com/netlify-labs/netlify-dx-browser-extension

---

## Explanation

This is a tiny little browser extension that:

- only works on the `netlify.com` domain
- injects a user interface to copy the current URL with configurable UTM code: `?utm_source=blog&utm_medium=devto&utm_campaign=devex`

PRs/feature suggestions welcome

<!--
## How it works

Honestly its probably more complicated than needs to be but i based it off of other extensions that do the same thing.

- inject `content-script` into every page
- script pings `background.js` that there is a new page
- `background.js` activates the "browser action" (the little logo on the browser bar) if its a Netlify site by sniffing the `Server` field in the response header.
- if it is a Netlify site and you click the "browser action":
  - if it is on `.netlify.com` host, `popup.js` checks if it is open source and manipulates `popup.html` accordingly. -->
