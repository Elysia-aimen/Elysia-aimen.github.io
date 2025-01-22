var posts=["2025/01/18/2025-01-15-即刻短文/","2024/12/13/hello-world/","2025/01/21/notes/","2025/01/18/日记系列/","2024/12/19/依稀记得的老师说的话/","2025/01/15/update_/","2025/01/12/blog_update_problems/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };