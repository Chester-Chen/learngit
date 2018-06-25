layui.use('element', function(){
    var element = layui.element;
  });

  layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#test1'
      ,width: '1134px' //设置容器宽度
      ,height: '494px'
      ,arrow: 'none' //始终显示箭头
      ,anim: 'fade' //切换动画方式
      ,interval: '1000'
      
    });
  });