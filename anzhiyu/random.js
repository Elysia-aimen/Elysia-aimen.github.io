var posts=["2025/01/18/2025-01-15-即刻短文/","2025/01/12/blog_update_problems/","2024/12/13/hello-world/","2025/01/15/update_/","2024/12/19/依稀记得的老师说的话/","2025/01/18/日记系列/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };