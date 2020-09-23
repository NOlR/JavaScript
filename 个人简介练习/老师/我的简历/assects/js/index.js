/* 左侧边栏切换active样式 */
let activeId = 0;//保存上一次被点击的那个li的下标
let cardId = 0;
const liList = document.querySelectorAll('.self-info > ul > li');
// 右边的四张卡片
const cards = document.querySelectorAll('.self-card-container');
//遮罩层
const shade = document.querySelector('.shade');
//左侧导航栏的点击事件
//点击导航栏，然后先把遮罩层打开，然后过1s种之后把遮罩层搞消失
//点击之后过0.8s再显示对应的卡片
liList.forEach( (item, index) => {
    item.onclick = () => {
        // 改变小三角开始
        liList[activeId].classList.toggle('active');
        activeId = index;
        liList[activeId].classList.toggle('active');

        //显示遮罩层和对应卡片
        shade.style.display = 'block';
        setTimeout( () => {
            shade.style.display = 'none';
        }, 1000 );

        setTimeout( () => {
            console.log('刚进入函数的时候cardId为:', cardId);
            cards[cardId].style.display = 'none';
            cardId = index;
            console.log('重新赋值之后cardId为:', cardId);
            cards[cardId].style.display = 'flex';
        }, 800 );
    }
} );

//点击显示个人经历卡片动画
const back = document.querySelector('.back'),
        next = document.querySelector('.next');
next.onclick = function (e) {//显示下一张卡片的点击事件
    /*点击的时候，给父元素加一个 disappear类型，同时给父元素的下一个兄弟元素加一个appear*/
    e.preventDefault();//阻止默认事件
    e.stopPropagation();//阻止冒泡
    this.parentElement.classList.remove('b-disappear');
    this.parentElement.nextElementSibling.classList.remove('b-appear');
    this.parentElement.classList.add('disappear');
    this.parentElement.nextElementSibling.classList.add('appear');
};
back.onclick = function (e) {/*返回按钮*/
    /*
    * 清除自身父元素的appear类名，然后加上b-appear类名(让父元素重新回到右边)
    * 同时 给父元素的前一个兄弟元素删除disappear类名  加上b-appear类名(opacity变为1)
    * */
    e.preventDefault();//阻止默认事件
    e.stopPropagation();//阻止冒泡
    this.parentElement.classList.remove('appear');
    this.parentElement.previousElementSibling.classList.remove('disappear');
    this.parentElement.classList.add('b-appear');
    this.parentElement.previousElementSibling.classList.add('b-disappear');
};
