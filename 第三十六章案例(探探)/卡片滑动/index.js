const cardData = [
    {
        img: './images/4.jpg',
        text: 'Three tall, slim girls are chasing and playing,the picture is very beautiful which let me think of the running under the sunset that day, that is my lost youth'
    },
    {
        img: './images/2.png',
        text: 'Three tall, slim girls are chasing and playing,the picture is very beautiful which let me think of the running under the sunset that day, that is my lost youth'
    },
    {
        img: './images/3.jpg',
        text: 'Three tall, slim girls are chasing and playing,the picture is very beautiful which let me think of the running under the sunset that day, that is my lost youth'
    },
    {
        img: './images/4.jpg',
        text: 'Three tall, slim girls are chasing and playing,the picture is very beautiful which let me think of the running under the sunset that day, that is my lost youth'
    },
    {
        img: './images/5.jpg',
        text: 'Three tall, slim girls are chasing and playing,the picture is very beautiful which let me think of the running under the sunset that day, that is my lost youth'
    },
    {
        img: './images/6.jpg',
        text: 'Three tall, slim girls are chasing and playing,the picture is very beautiful which let me think of the running under the sunset that day, that is my lost youth'
    }
];
let renderArr = cardData.slice(0,3),//渲染到页面当中的数据
    stroeArr = cardData.slice(3);//存储未被渲染的数据
const maxMove = window.innerWidth / 2;//最大的水平方向移动距离
render(renderArr);
function render (list) {//把数据渲染成卡片
    const fragment = document.createDocumentFragment();
    list.forEach( item => {//拿到每一个对象里边的数据，同时创建三个卡片
        const card = document.createElement('section');
        card.classList.add('card', 'transition');
        card.innerHTML = `
            <img src=${item.img} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${item.text}</p>
            </div>
        `;

        let position = {x:0,y:0},
            moveX = 0, moveY = 0;
        
        card.addEventListener( 'touchstart', e => {
            e.stopPropagation();
            position = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
            card.classList.toggle('transition');//删除掉过渡
        } )

        card.addEventListener( 'touchmove', e => {
            e.stopPropagation();
            moveX += e.changedTouches[0].clientX - position.x;
            moveY += e.changedTouches[0].clientY - position.y;
            card.style.transform = `translate(${moveX}px, ${moveY}px)`;
            position = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
        } )

        card.addEventListener( 'touchend', e => {
            e.stopPropagation();
            card.classList.toggle('transition');//加上过渡
            console.log(Math.abs(moveX) , window.innerWidth / 2)
            if(Math.abs(moveX) >= maxMove){//删除掉
                card.parentNode.removeChild(card);//删除这张卡片
                
                let removedCard = renderArr.shift();
                renderArr.push( stroeArr[0] );
                stroeArr.shift();
                stroeArr.push(removedCard);
                //第一种方案：重新渲染 -> 没有动画
                // document.body.innerHTML = '';
                // render(renderArr);
                //第二种方案：删除掉一个之后，再重新添加一个
                singleRender(renderArr[2])
            }else{//回到原点
                moveX = 0;
                moveY = 0;
                card.style.transform = `translate(${0}px, ${0}px)`;
            }
        } )


        fragment.append(card)
    } )
    document.body.append(fragment);
};

//给每个卡片都绑定一个touchstart touchmove touchend事件 -> 拖动效果
/*
    手按下去的时候，记录手指点下去的坐标 -> 初始坐标
    滑动的时候，用新坐标 - 老坐标 = 滑动的距离
    let moveX,moveY 保存手机滑动的水平方向和竖直方向的距离

    手指离开的时候，要么删除掉，渲染新的，要么回到原点

    window.innerWidth页面可视区域的宽度
    window.innerHeight页面的可视区域高度
*/

function singleRender(data) {//值创建一张卡片，并且渲染到页面当中
    const card = document.createElement('section');
    card.classList.add('card', 'transition');
    card.innerHTML = `
        <img src=${data.img} class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${data.text}</p>
        </div>
    `;

    let position = {x:0,y:0},
        moveX = 0, moveY = 0;
    
    card.addEventListener( 'touchstart', e => {
        e.stopPropagation();
        position = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
        card.classList.toggle('transition');//删除掉过渡
    } )

    card.addEventListener( 'touchmove', e => {
        e.stopPropagation();
        moveX += e.changedTouches[0].clientX - position.x;
        moveY += e.changedTouches[0].clientY - position.y;
        card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        position = {x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY};
    } )

    card.addEventListener( 'touchend', e => {
        e.stopPropagation();
        card.classList.toggle('transition');//加上过渡
        console.log(Math.abs(moveX) , window.innerWidth / 2)
        if(Math.abs(moveX) >= maxMove){//删除掉
            card.parentNode.removeChild(card);//删除这张卡片
            
            let removedCard = renderArr.shift();
            renderArr.push( stroeArr[0] );
            stroeArr.shift();
            stroeArr.push(removedCard);
            //第一种方案：重新渲染 -> 没有动画
            // document.body.innerHTML = '';
            // render(renderArr);
            //第二种方案：删除掉一个之后，再重新添加一个
            singleRender(renderArr[2])

        }else{//回到原点
            moveX = 0;
            moveY = 0;
            card.style.transform = `translate(${0}px, ${0}px)`;
        }
    } )
    document.body.append(card);
}
