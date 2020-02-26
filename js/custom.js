

$(function () {

    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }
    });

    $('.down_btn').on('click', function () {
        $('.down_btn').toggleClass('rotate_btn');
        $('.suggest_list').toggleClass('suggetion_active');
    });


    $('.date_time').on('click', function () {
        $('.cal_down_btns').toggleClass('rotate_btn');
    });
    $('.cal_down_btns').on('click', function () {
        $('.datePicker').hide();
        $('.cal_down_btns').toggleClass('rotate_btn');
    });


    $('.pickadd').keydown(function () {
        $('.suggest_list').addClass('suggetion_active');
        $('.down_btn').addClass('rotate_btn');
    });

    $('.down_btns').on('click', function () {
        $('.down_btns').toggleClass('rotate_btns');
        $('.suggest_lists').toggleClass('suggetion_actives');
    });


    $('.pickadds').keydown(function () {
        $('.suggest_lists').addClass('suggetion_actives');
        $('.down_btns').addClass('rotate_btns');
    });




    // =========slick slider

    $('.tab_slide_active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow'

    });


});
/*================================
    datePicker
=================================*/

(function () {
    
         
         var datepickerBtn = $("#date_picker_input")
         var returnPicker = $("#date_picker_input_return");
         
            datepickerBtn.click(function(){
                 $('.datePicker').fadeIn();
                 $('.returnBook').fadeOut();
             })

             returnPicker.click(function(){
                $('.datePicker').fadeOut();
                $('.returnBook').fadeIn();


          })
    
            
            function logEvent(type, date) {
                $("<div class='log__entry'/>").hide().html("<strong>"+type + "</strong>: "+date).prependTo($('#eventlog')).show(200);
            }
            $('#clearlog').click(function() {
                $('#eventlog').html('');
            });

 
        
            $('#demo2').datetimepicker({
                date: new Date(),
                dateFormat: 'd M, y',
                CustomFormat: 'DD/MM/YYYY',
                onDateChange: function(){
                    $('#date-text2').text(this.getText());
                  
                }
            });

            $('#demo3').datetimepicker({
                date: new Date(),
                dateFormat: 'd M, y',
                CustomFormat :'DD/MM/YYYY',
                onDateChange: function(){
                    $('#date-text3').text(this.getText());
                  
                }
            });
            
    

            
   
    
    
    

     var hourBox = document.querySelector("#hour_box");
     var minBox = document.querySelector("#minBox")
    
     var h_up = document.querySelector("#h_up");
     var h_down = document.querySelector("#h_down");
    
     var m_up = document.querySelector("#m_up");
     var m_down = document.querySelector("#m_down");





    dateBase = {
        hour: 0,
        minute: 0,
    }


    function displayDOM() {

        hourBox.innerHTML = dateBase.hour;
        minBox.innerHTML  = dateBase.minute;

    }


   

    h_up.addEventListener("click", function () {

        if (dateBase.hour < 23) {
            
            dateBase.hour++;
            displayDOM()
        }
    })
    
    h_down.addEventListener("click", function () {

        if (dateBase.hour > 0) {
            
            dateBase.hour--;
            displayDOM()
        }
    })
    
    
    
    m_up.addEventListener("click", function () {

        if (dateBase.minute < 55) {
            
            dateBase.minute = dateBase.minute + 5;
            displayDOM()
        }
    })
    
    m_down.addEventListener("click", function () {

        if (dateBase.minute > 0) {
            
            dateBase.minute = dateBase.minute - 5;
            displayDOM()
        }
    })


    
    $(".title").click(function(){
       
        $(".ok").css({
            'opacity':'1',
            'visibility':'visible',
        });
        
        
        $(".ok").click(function(){
            $(".ok").css({
            'opacity':'0',
            'visibility':'hidden',
        });
        })
        
    });
    
    $("#ok_btn").click(function(){
        
        var day = $(".selected").text();
        var mon = $(".title").text();

        var dateTxt = $("#date-text2").text();
        var dateArr = dateTxt.split(' ');        
        var date = dateArr[0] + ', '+dateBase.hour+':'+dateBase.minute;
       
        
        $("#date_picker_input").val(date)
  
            $('.datePicker').fadeOut();
          
        })


        $("#ok_btns").click(function(){
        
            var day = $(".selected").text();
            var mon = $(".title").text();

            var dateTxt = $("#date-text3").text();
            var dateArr = dateTxt.split(' ');        
            var date = dateArr[0] + ', '+dateBases.hour+':'+dateBases.minute;

             
            
            $("#date_picker_input_return").val(date)
      
                $('.returnBook').fadeOut();
              
            })

    
    $("#cancel_btn").click(function(){
        $('.datePicker').fadeOut();
        
    })

    
    $("#cancel_btns").click(function(){
        $('.returnBook').fadeOut();
    })
    
    
 // ===========================

 $("#book_return").click(function () {
      $(".returnDate").fadeIn();

   })

 var hourBoxs = document.querySelector("#hour_boxs");
 var minBoxs = document.querySelector("#minBoxs")

 var h_ups = document.querySelector("#h_ups");
 var h_downs = document.querySelector("#h_downs");

 var m_ups = document.querySelector("#m_ups");
 var m_downs = document.querySelector("#m_downs");
 
 dateBases = {
     hour: 0,
     minute: 0,
 }

 function displayDOMs() {

     hourBoxs.innerHTML = dateBases.hour;
     minBoxs.innerHTML  = dateBases.minute;

 }

 h_ups.addEventListener("click", function () {

     if (dateBases.hour < 23) {
         
         dateBases.hour++;
         displayDOMs()
     }
 })
 
 h_downs.addEventListener("click", function () {

     if (dateBases.hour > 0) {
         
         dateBases.hour--;
         displayDOMs()
     }
 })
 
 
 
 m_ups.addEventListener("click", function () {

     if (dateBases.minute < 55) {
         
         dateBases.minute = dateBases.minute + 5;
         displayDOMs()
     }
 })
 
 m_downs.addEventListener("click", function () {

     if (dateBases.minute > 0) {
         
         dateBases.minute = dateBases.minute - 5;
         displayDOMs()
     }
 })
    
    
    




})();


