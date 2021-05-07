window.onload=function () {
        new fullpage('#fullpage', {
            //设置每一频的颜色
            sectionsColor:["#0da5d6","#2ab561","#de8910","#0da5d6","#0da5d6"],
            //关闭默认模块内存垂直居中
            verticalCentered:false,
            //afterLoad:是滚动结束之后调用的一个回调函数
            //origin:保存了滚动出去那一屏的相关信息
            //destination:保存了滚入那一屏的相关信息
            //direction:保存的当前滚动方向:up/down
            //注意点:第一次进入网页也会调用afterLoad方法,只不过第一屏是null,方向为空
            afterLoad:function (origin,destination,direction) {
                if (origin !== null){
                    origin.item.className=origin.item.className.replace("current","");
                }
                destination.item.className=destination.item.className+" current";
            },

    });
}