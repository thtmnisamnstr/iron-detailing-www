# A small business website for Iron Detailing
Iron Detailing is a mobile automotive detailing service based out or Los Angeles, CA. It serves Torrance, South Bay, and surrounding areas.
  
You can preview this site at [irondetailing.netlify.app](https://irondetailing.netlify.app/).


## How to run, build, and upgrade dependencies
### Running dev locally
*   Clone the repo
*   Run `npm install --force` (have to use `--force` because the site uses Taze for dependency updating).
*   Run `npm run dev`, and the site will run on http://localhost:3000.

### Deploying the site
*   Clone the repo.
*   Run `earthly --push +deploy --NODE_ENV=production`, and the site will build and deploy to Netlify based on your Netlify environment variables.
    *   Make sure Docker is started before running Earthly commands.

### Building the site
Building the site standalone isn't super useful unless you want to debug your Netlify build.
*   Clone the repo.
*   Run `earthly +build`, and the site will build and save build outputs to your project.
    *   Make sure Docker is started before running Earthly commands.

### Dependency management and package install/uninstall
Taze manages dependency updates, and npm-check is used to check for unneeded dependencies.
*   To check for unneeded dependencies, run `npm run check-deps`.
*   To update dependencies, run `npm run upgrade-deps`.
*   To install modules, run `npm install --force`.
*   To uninstall modules, run `npm uninstall [module_name] --force`.


## License 🤝
[MIT](./LICENSE)


## Appreciation 🙏
  * [next-dev-studio template](https://github.com/lwz7512/next-dev-studio) by [lwz7512](https://github.com/lwz7512)