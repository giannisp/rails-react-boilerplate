# rails-react-boilerplate

This is a pure [Ruby on Rails](http://rubyonrails.org/) / [React](https://facebook.github.io/react/) / [Redux](https://github.com/reactjs/redux) / [Webpack 4](https://webpack.js.org/) boilerplate app.

## Features

- Ruby on Rails 5.2.x
- React 16.x
- Webpack 4.x
- Babel 7.x
- ESLint support
- Prettier support
- SASS and StyleLint support
- Hashed filenames for production assets
- Separate app and vendor JS bundles
- Postgres compatibility
- Using Rails default gems and NPM packages only

## Exit Asset Pipeline, Enter Webpack

Why Webpack?  
Webpack is a module bundler. It can bundle all JS files for usage in the browser, but can also transform / bundle / package any resource or frontend asset.  
The [NPM](https://www.npmjs.com/) ecosystem is huge, and Webpack makes it available in the simplest way possible.  
Webpack can support every modern JS app, using ES6 or CommonJS modules, or both, create a single or multiple bundles, and in general can be customized to accomplish any application requirement. 

The frontend assets on this repository are placed on a more accessible directory, at `front/js` and `front/css`, rather than `app/assets/javascripts` and `app/assets/stylesheets`.  
At any point, migration to a different backend (for example NodeJS) can be seamless since Webpack is running as a stand-alone bundler, there's absolutely no dependence to the Asset Pipeline or any other framework-specific module.  

## Install

It's recommended to use Ruby 2.5.0 and NodeJS 8.12.x.

```sh
# install bundler if not available
gem install bundler

# install gem dependencies
bundle install

# install npm dependencies
npm install

# create the postgres databases
# update config/database.yml details if needed
rake db:create

# generate assets for development
npm run webpack

# start server
rails s
```

## Webpack scripts

`npm run webpack`  
Builds the assets for development mode.

`npm run webpack-watch`  
Builds the assets for development mode, and rebuilds on every detected change.

`npm run webpack-production`  
Builds the assets for production mode, output files are hashed.

## Load assets in production from a custom root directory or URL

By default JS/CSS assets are being served from the `public/dist` directory. However in production it may be needed to serve assets from a CDN or an S3 bucket etc.  
Simply override the `Rails.application.config.assets.root_path` property on the production environment to accomplish it.  
Of course during the deployment script and after the `npm run webpack-production` command, `public/dist/*` output files should be copied to the target dir or infrastructure.

## Run in Docker (optional)

Repository contains a basic Dockerfile for running the app in production mode.  
Assets should be compiled first using webpack outside of the container.  

```sh
# build docker image
docker build -t rails-react-boilerplate .

# run docker image
docker run -p 3000:3000 -e SECRET_KEY_BASE=abcd rails-react-boilerplate
```
