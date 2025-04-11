const starCountLink = document.getElementById('starCountLink');
// 使用GitHub API获取星标数量，无需认证即可获取公开项目数据
fetch('https://api.github.com/repos/apache/singa')
   .then(response => response.json())
   .then(data => {
        const starCount = data.stargazers_count;
        starCountLink.textContent = starCount;
        starCountLink.setAttribute('aria-label', `${starCount} stargazers on GitHub`);
         // 获取class为index-ctas的元素下的第一个span子元素
         const fs = document.querySelector('.index-ctas span');
         
         // 检查 firstSpan 是否存在
         if (!fs) {
           console.error('未找到 class 为 index-ctas 的元素下的第一个 span 子元素');
         } else {
           // 获取 firstSpan 的 Shadow DOM
           const shadowRoot = fs.shadowRoot;
           if (!shadowRoot) {
             console.error('firstSpan 没有 Shadow DOM');
           } else {
             // 获取外部 class 为 social-count 的元素
             const socialCountElement = document.querySelector('.social-count');
             if (!socialCountElement) {
               console.error('未找到 class 为 social-count 的元素');
             } else {
               // 在 Shadow DOM 中查找 class 为 widget 的元素
               const widgetElement = shadowRoot.querySelector('.widget');
               if (!widgetElement) {
                 console.error('在 Shadow DOM 中未找到 class 为 widget 的元素');
               } else {
                 // 将 socialCountElement 移动到 widgetElement 中
                 widgetElement.appendChild(socialCountElement);
                 console.log('元素移动成功');
               }
             }
           }
         }
    })
   .catch(error => {
        console.error('Error fetching star count:', error);
        starCountLink.textContent = 'Error';
    });
