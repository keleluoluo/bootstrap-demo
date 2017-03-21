
$(function(){

    // �����ֲ�ͼ
    banner();
    //���� ��ʾ����
    $('.product-right .tips a').tooltip();

    //���ò�Ʒģ�鵼���Ŀ��
    setWidth();

})

    //�����ֲ�ͼ���������ķ���
    function banner(){
        var picBox=document.querySelector('.banner');
        //    ������� ��¼��������
        var startX=0;
        var moveX=0;
        var distanceX=0;

        picBox.addEventListener('touchstart',function(e){
            //��¼��ʼ����
            startX= e.targetTouches[0].clientX;
        })

        picBox.addEventListener('touchmove',function(e){
            //��¼�ƶ�������
            moveX= e.targetTouches[0].clientX;
            //��������
            distanceX=moveX-startX;
        })

        picBox.addEventListener('touchend',function(e) {
            // ȷ���û�����
            if(Math.abs(distanceX)>10){
                if(distanceX>0){
                    //    ���һ���  -- ��һ��
                    $('.carousel').carousel('prev');
                }

                if(distanceX<0){
                    //   ���󻬶�  --  ��һ��
                    $('.carousel').carousel('next');

                }
            }
        });

    }

    //���ò�Ʒģ�鵼���Ŀ��
    function setWidth(){
        //�õ�ul
        var  nav=$('.product-tabs');
        // ��ȡ����li��ǩ
        var lis=$('.product-tabs li');
        var w=0;
        // ��������li�ɿ���ۼ�
        lis.each(function(index,el){
            //console.log($(el).width());
            w+=$(el).width();
        })

    //    �ɿ�����ø�ul
        nav.width(w);

    //   ��ȡ���ӵĿ��
    //    Width():  ��ȡ ��������Ŀ��
    //    innerWidth(): ��ȡ ��������+padding �Ŀ��
    //    outerWidth(): ��ȡ ��������+padding+border  �Ŀ��
    //    outerWidth(true) ��ȡ ��������+padding+margin+border�Ŀ��
    }
