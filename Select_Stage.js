document.addEventListener('DOMContentLoaded', () => {
    // 确保DOM加载完成后才执行
    fetch('./levellist.json') // 替换成 levellist.json 文件的实际路径
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error! status: ${response.status}');
            }
            return response.json(); // 解析JSON
        })
        .then(data => {
            const levelListContainer = document.getElementById('Select_Stage_background');
            if (!levelListContainer) {
                console.error("ID为 'Select_Stage_background' 的元素未找到！");
                return;
            }

            data.forEach(level => {
                const listItem = document.createElement('div');//li
                const link = document.createElement('div');//a
                //link.textContent = level.name;
                //link.href = level.url;
                link.onclick=function () {
                    window.location.href=level.url;
                }
                link.innerText=level.name;
                link.style.color = 'white';
                link.style.width = '300px';
                link.style.height = '30px';
                link.style.border = '1px solid white';
                listItem.style.display = 'block';
                //link.style.paddingBottom = '5px';
                listItem.appendChild(link);    // 将链接添加到列表项
                levelListContainer.appendChild(listItem); // 将列表项添加到容器
            });
        })
        .catch(error => {
            console.error('加载或解析 levellist.json 时出错:', error);
            const levelListContainer = document.getElementById('level-list-container');
            if (levelListContainer) {
                levelListContainer.innerHTML = '<li>加载关卡列表失败。</li>';
            }
        });
});
