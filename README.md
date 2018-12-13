# gatsby-remark-codepen

Embed Codepen in Gatsby markdown

## Install

```bash
npm install --save @weknow/gatsby-remark-codepen
```

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve:"@weknow/gatsby-remark-codepen",
          options: {
            theme: "dark",
            height: 400
          }
        }
      ]
    }
  }
];
```

## Usage

```markdown
# Blog post title

This is an example of embedding a pen.
Add any markdown as you normally do, and then insert a valid
Codepen link anywhere to automatically transform it into an embed.

#### Check this pen

https://codepen.io/digitalhydra/pen/jPqWwP
```

> __NOTE:__ Make sure to copy the link instead of embed code.

## How this looks

<p align="center"><img src="https://i.imgur.com/8h1CTZ5.png" alt="" /></p>

[View a live demo here](https://remarkcodepen.netlify.com/)

## License

MIT
