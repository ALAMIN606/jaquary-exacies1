$(document).ready(function(){
    
    //(selector).action();
    
    
  /*==========1===================*/  
    
    $('.al-1').show(); 
    
    
     /*==========2===================*/  
    
      $('.btn1').click(function(){
         $('.hmn').hide(2000);  
     });
    
    //    paramiter-"slow","fast" or milisecond-2000;
    
    //all body ka hide korta hole  $('*').hide("slow");
    
     /*==========3===================*/  
    
     $('.btn2').click(function(){
         $('.hmm').show(2000);  
     });
    
    //    paramiter-"slow","fast" or milisecond-2000;
    
    
     /*==========4===================*/  
    
     $('.btn3').click(function(){
         $(this).hide("slow");  
     });
    
    
    
    /*==========5===================*/  
    
     $('.btn4').click(function(){
         $('.hmm2').toggle(1000);  
     });
    
    
     /*==========6===================*/  
    
     $('.btn5').click(function(){
         $('.hmm3').hide(1000);  
     });
     $('.btn6').click(function(){
         $('.hmm3').show(1000);  
     });
    
    
     /*==========7===================*/  
    
     $('.btn8').click(function(){
         $('.hmm4').show(1000);  
     });
     $('.btn7').click(function(){
         $('.hmm4').hide(1000);  
     });
    
    
     /*==========8===================*/  
    
     $('.btn9').click(function(){
         $('ul li:first-child').hide(1000);  
     });
    
    // mager ta hide korta hola :nth-child(3); hoba
    
    // toi gaiga taka hide korta hola first-child hode;
    // r akta hide korta hola sudo first hobe;
    
    
    
  
    /*==========9===================*/  
    
     $('.btn11').click(function(){
         $('.hmm6').hide(1000);  
     });
    
    // $('[ href]').click(function()
    // $('a').click(function()
  
    
    
     /*==========10===================*/  
    
     $('.btn12').dblclick(function(){
         $('.hmm7').hide(1000);  
     });
    
    // asarao .dbl /  .mouseenter  /  .mouseleave  / .hover  /.focus /.on
    
    // akdik event add korar jonno .on matod babohr kora hoi.
    
    
      
     /*==========11===================*/  
    
     $('.btn13').hover(function(){
         alert('Kamon asen');  
     },
           function(){
          alert('valo aci'); 
         
     } );
    
    

    
    
    
    
    
    
});
