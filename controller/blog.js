const axios = require('axios');

exports.index = function(req, res, next) {
  axios.get('http://18.219.149.151/wp-json/wp/v2/posts')
  .then(response => {
    var data = response.data;
    var content = [];
    console.log(response.data);
    for(var i = 0; i < data.length; i++) {
      content.push(data[i].content);
    }
    console.log(content);
    res.render('blog', { content: content });
  });
};
