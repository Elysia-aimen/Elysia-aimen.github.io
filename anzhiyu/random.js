var posts=["2025/01/12/blog_update_problems/","2024/12/13/hello-world/","2025/01/18/2025-01-15-即刻短文/","2025/01/21/notes/","2025/01/15/update_/","2025/01/24/parent/","2024/12/19/依稀记得的老师说的话/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };