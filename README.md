# gatsby-remark-codepen

Embed Codepen Pen's in your Gatsby!

### [View a live demo here](https://remarkcodepen.netlify.com/)

## Install

1. Install plugin to your site:

```bash
yarn add gatsby-remark-codepen
```

2. Add `gatsby-remark-codepen` to your `gatsby-transformer-remark` plugins in `gatsby-config.js`:

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve:"gatsby-remark-codepen",
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

3. Restart gastby.

## Usage

```markdown
## My blog post

This is an example of embedding a pen.
Just type your markdown as you normally do, and then insert a valid
pen link anywhere to automatically transform it into an embed!

#### Check this pen

https://codepen.io/digitalhydra/pen/jPqWwP


```

> __NOTE:__ Make sure to copy the link instead of embed code.

<p align="center"><img src="https://i.imgur.com/8h1CTZ5.png" alt="" /></p>

## Configuration

```js
plugins: [
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve:"gatsby-remark-codepen",
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

## License

MIT
