

const visit = require('unist-util-visit');

module.exports = async ({ markdownAST }, options = { width: 600, height: 300 }) => {
  visit(markdownAST, 'text', async (node) => {
    const { value } = node;
    const isPenURI = value.match(/https:\/\/(www\.)?codepen\.io\/([A-Za-z0-9-_?=]*\/pen\/[A-Za-z0-9-_?=]*)/gi);

    if (isPenURI) {
      const penData = value.split('/');
      const penId = penData.pop();
      const penUser = penData[3];
      console.log(`\n Embeding pen: ${penId} by ${penUser} \n`);

      node.type = 'html';
      node.value = `<div><iframe 
        height='${options.height}' 
        scrolling='no' 
        src='//codepen.io/${penUser}/embed/preview/${penId}/?height=${options.height}&theme-id=${options.theme}&default-tab=${options.defaultTab || 'html,result'}' 
        frameborder='no' 
        title='codepen embed'
        allowtransparency='true' 
        allowfullscreen='true' 
        style='width: 100%;'></iframe></div>`;
    }
  });

  return markdownAST;
};
