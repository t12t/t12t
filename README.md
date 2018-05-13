# t12t

The t12t.se Site

## Develop

The site is [built with Gatsby](https://www.gatsbyjs.org/).

Make sure you got all of this on your computer before starting:

* [Node](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/) 
* [Gatsby-cli](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-cli)



Run the following command in your terminal to install node modules:

```
yarn install
```

Then run this to start the site in development-mode:

```
gatsby develop
```

Go to your browser and be happy about `http://localhost:8000` \\(^.^)/


## Production

If you like to try out a production build run this:

```
gatsby build
```

You can then serve the site from the folder `public` in any way you want. 

One easy way to do this is to use [a package called serve](https://www.npmjs.com/package/serve). Install serve with: 

```
npm install -g serve
``` 

Then make sure you are in the folder `public` and run: 

```
serve
``` 

You should now be able to view the site in production mode at `http://localhost:5000`.
