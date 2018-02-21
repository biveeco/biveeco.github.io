# Bivee's website
http://bivee.co

## Local setup:

1. Clone this repository
2. Install [Bundler](http://bundler.io) and [Node](https://nodejs.org/en/) and [Yarn](http://yarnpkg.com) if you don't already have them.
3. Run `bundle install` and `yarn install` in the command line
4. All set!

## Development:

- Run `bundle exec middleman` to start a local Middleman server; site will be available at `http://localhost:4567` in your browser. You can see the sitemap and config at `http://localhost:4567/__middleman`.
- `bundle exec middleman build` will compile the site to the `/build` folder.
- The `dev` branch is the main development branch. `master` is only for compiled (live) files (so please do not touch it). To add new features, create a branch off `dev` and then submit a pull request.

## Deploy:

- Merge your pull request into the `dev` branch.
- The site will automatically build and go live on the host (Netlify) when the PR is merged via Git hook. Branch "previews" are available for PRs.
- To manually build: run `bundle exec middleman build`; this will build the site. This will build the site, compile assets (CSS, JS), and run linters.

## Test:

- `yarn test` will run linters.
