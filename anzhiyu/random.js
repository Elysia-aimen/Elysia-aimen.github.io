var posts=["2024/12/13/test1/","2024/12/13/个人blog搭建总结1/","2024/12/13/hello-world/","2024/12/13/test2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };