
$(function(){

    // 调用轮播图
    banner();
    //调用 提示工具
    $('.product-right .tips a').tooltip();

    //设置产品模块导航的宽度
    setWidth();

})

    //控制轮播图触屏操作的方法
    function banner(){
        var picBox=document.querySelector('.banner');
        //    定义变量 记录触屏数据
        var startX=0;
        var moveX=0;
        var distanceX=0;

        picBox.addEventListener('touchstart',function(e){
            //记录起始坐标
            startX= e.targetTouches[0].clientX;
        })

        picBox.addEventListener('touchmove',function(e){
            //记录移动的坐标
            moveX= e.targetTouches[0].clientX;
            //计算距离差
            distanceX=moveX-startX;
        })

        picBox.addEventListener('touchend',function(e) {
            // 确定用户操作
            if(Math.abs(distanceX)>10){
                if(distanceX>0){
                    //    向右滑动  -- 上一张
                    $('.carousel').carousel('prev');
                }

                if(distanceX<0){
                    //   向左滑动  --  下一张
                    $('.carousel').carousel('next');

                }
            }
        });

    }

    //设置产品模块导航的宽度
    function setWidth(){
        //拿到ul
        var  nav=$('.product-tabs');
        // 获取所有li标签
        var lis=$('.product-tabs li');
        var w=0;
        // 遍历所有li吧宽度累加
        lis.each(function(index,el){
            //console.log($(el).width());
            w+=$(el).width();
        })

    //    吧宽度设置给ul
        nav.width(w);

    //   获取盒子的宽度
    //    Width():  获取 内容区域的宽度
    //    innerWidth(): 获取 内容区域+padding 的宽度
    //    outerWidth(): 获取 内容区域+padding+border  的宽度
    //    outerWidth(true) 获取 内容区域+padding+margin+border的宽度
    }
