var posts=["2024/12/13/hello-world/","2024/12/13/个人blog搭建总结1/","2025/01/12/blog_update_problems/","2024/12/19/依稀记得的老师说的话/","2025/01/15/update_/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };