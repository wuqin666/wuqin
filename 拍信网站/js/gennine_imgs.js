window.onload = function(){
    var imglist = ['url(images/1atlasImg1.png)','url(images/1atlasImg2.png)','url(images/1atlasImg3.png)','url(images/1atlasImg4.png)','url(images/1atlasImg5.png)','url(images/1atlasImg6.png)',
'url(images/1atlasImg7.png)','url(images/1atlasImg8.png)','url(images/3atlasImg1.jpg)','url(images/3atlasImg2.jpg)','url(images/3atlasImg3.jpg)','url(images/3atlasImg4.jpg)',
'url(images/3atlasImg5.jpg)','url(images/3atlasImg6.jpg)','url(images/3atlasImg7.jpg)','url(images/3atlasImg8.jpg)','url(images/4atlasImg1.jpg)',
'url(images/album1.png)','url(images/album2.png)','url(images/album3.png)','url(images/atlasimg4.png)','url(images/4atlasImg1.jpg)',
'url(images/4atlasImg2.jpg)','url(images/4atlasImg3.jpg)','url(images/4atlasImg4.jpg)','url(images/4atlasImg5.jpg)',
'url(images/4atlasImg6.jpg)','url(images/4atlasImg7.jpg)','url(images/4atlasImg8.jpg)'];
var imglist2 = ['url(images/shangyeA1.jpg)','url(images/shangyeA2.jpg)','url(images/shangyeA3.jpg)','url(images/shangyeA4.jpg)',
'url(images/shangyeA5.jpg)','url(images/shangyeA6.jpg)','url(images/shangyeA7.jpg)','url(images/shangyeA8.jpg)','url(images/shangyeB1.jpg)','url(images/shangyeB2.jpg)','url(images/shangyeB3.jpg)','url(images/shangyeB4.jpg)',
'url(images/shangyeB5.jpg)','url(images/shangyeB6.jpg)','url(images/shangyeB7.jpg)','url(images/shangyeB8.jpg)','url(images/shangyeC1.jpg)','url(images/shangyeC2.jpg)','url(images/shangyeC3.jpg)','url(images/shangyeC4.jpg)',
'url(images/shangyeC5.jpg)','url(images/shangyeC6.jpg)','url(images/shangyeC7.jpg)','url(images/shangyeC8.jpg)','url(images/shangyeD1.jpg)','url(images/shangyeD2.jpg)','url(images/shangyeD3.jpg)','url(images/shangyeD4.jpg)',
'url(images/shangyeD5.jpg)'];
for( i=0; i<29;i++){
    console.log(imglist[i])
    $('.item').eq(i).css("backgroundImage",imglist[i])
}
    //设置搜索框提示信息的显示隐藏,点击信息时更换页面提示
    $(".show").mouseover(function(){
        $(".dorp_con").show()
        $(this).css("cursor","pointer");
    }).mouseout(function(){
        $(".dorp_con").hide()
        $(this).css("cursor","default");
    });

    $(".dorp_con a").mouseover(function(){
        $(this).css("color","black")
    }).mouseout(function(){
        $(this).css("color","#999999")
    }).click(function(){
        $("#rem-txt").html($(this).html())
        $("#search-txt").text($(this).html())
        $(".dorp_con").hide()
    });

    $(".nav-list a").mouseover(function(){
        $(this).css("color","#fe293f")
    }).mouseout(function(){
        $(this).css("color","#666666")
    });
//正版图片和设计素材的点击切换
    $(".title1").mouseover(function(){
        $(this).css("cursor","pointer");
    }).mouseout(function(){
        $(this).css("cursor","default");
    }).click(function(){
        $(".title1").css("color","#fe293f")
        $(".title2").css("color","#000000")
        // $(".item").css("background-image","url(images/5a5d7c7e89f2e.jpeg)")
        for( i=0; i<29;i++){
            console.log(imglist[i])
            $('.item').eq(i).css("backgroundImage",imglist[i])
        }
        $(".move_tag").css("left","30px")
    })

    $(".title2").mouseover(function(){
        $(this).css("cursor","pointer");
    }).mouseout(function(){
        $(this).css("cursor","default");
    }).click(function(){
        $(".title2").css("color","#fe293f")
        $(".title1").css("color","#000000")
        // $(".item").css("background-image","url(images/3atlasimg2.jpg)")
        for( i=0; i<29;i++){
            console.log(imglist2[i])
            $('.item').eq(i).css("backgroundImage",imglist2[i])
        }
        $(".move_tag").css("left","180px")
    })


    $(".content div").mouseover(function(){
        $(this).css({cursor:"pointer",'background-size':'240px 176px'});
    }).mouseout(function(){
        $(this).css({cursor:"default",'background-size':'cover'});
    })

    
    $(".change2").hide();
    $(".change1").show();
    $(".option1").mouseover(function(){
        $(this).css("cursor","pointer")
        $("#t1 td").mouseover(function(){
            $(this).css("color","#fe293f")
        }).mouseout(function(){
            $(this).css("color","black")
        })
        $(".change2 .list").mouseover(function(){
            $(this).css({"width":"125px","height":"75px"})
        }).mouseout(function(){
            $(this).css({"width":"120px","height":"70px"});
        })      
        $(".option-box").show()
        $(".option-box1").show()
        $(".changebtn2").click(function(){
            $(".changebtn1").css({'background':'#f4f6f9','color':'#333'})
            $(".changebtn2").css({'background':'#fe293f','color':'#fff'})
            $(".change1").hide(1000)
            $(".change2").show(1000)
            
        })
        $(".changebtn1").click(function(){
            $(".changebtn2").css({'background':'#f4f6f9','color':'#333'})
            $(".changebtn1").css({'background':'#fe293f','color':'#fff'})
            $(".change2").hide(1000);
            $(".change1").show(1000);
        })
    }).mouseout(function(){
        $(this).css("cursor","default")
        $(".option-box").hide()
        $(".option-box1").hide()
    })
    $(".vip1").click(function(){
        window.location.href = "./price.html"
    })
    $(".vip2").click(function(){
        window.location.href = "./ownVIP.html"
    })
    $(".vip3").click(function(){
        window.location.href = "./price.html"
    })
}   