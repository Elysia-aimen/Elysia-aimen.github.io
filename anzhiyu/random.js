var posts=["2024/12/13/个人blog搭建总结1/","2024/12/13/test2/","2024/12/19/依稀记得的老师说的话/","2024/12/13/test1/","2024/12/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };