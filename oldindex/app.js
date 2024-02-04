import { home, addItemOne, removeItemOne,savatx} from './modules/func.js';
alert("aaa");
$(document).ready(function () {
    let tg = window.Telegram.WebApp;
    tg.expand();
    const tgid = tg.initDataUnsafe.user.id;//5567423168; //
    // const user = tg.initDataUnsafe.user.first_name;
    $('.savatbtn').append(tgid);
    alert(tgid);
    let savat= {
        "tovarlar":[],
        "tg_id":tgid
    }
    try {
        $.getJSON({
            url: `https://www.peregrineconnect.com/demo/`, 
            method: 'post',   
            success: function(data, status){
                if(status==='success' && data.content!=0){
                    // console.log(data,typeof data);
                    $('body').after(`<div class="hidedata" style="display:none;">${JSON.stringify(data)}</div>`)   
                    home(data);
                }
                else{
                    tg.close();
                    console.log("Server bilan aloqa yo'q");
                }
            },
            error: function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log( "Aloqa: " + err );
            }      
        });
        }
    catch {
        console.log("Server bilan aloqa yo'q!")
    }
    // Plus 
    $(document).on("click",".plus",function() {
      const idt=$(this).attr('id');
      apidata = JSON.parse($('.hidedata').text());
      for (let index6 = 0; index6 < apidata.content.length; index6++) {
        const element = apidata.content[index6];
        if (element.id==idt){
            // console.log(savat.tovarlar);
            savat.tovarlar=addItemOne(savat.tovarlar,idt);
            // console.log(savat.tovarlar);
        }        
      } 
    });
    // Minus 
    $(document).on("click",".dash",function() {
        const idt=$(this).attr('id');
        apidata = JSON.parse($('.hidedata').text());
        for (let index6 = 0; index6 < apidata.content.length; index6++) {
          const element = apidata.content[index6];
          if (element.id==idt){
            //   console.log(savat.tovarlar);
              savat.tovarlar=removeItemOne(savat.tovarlar,idt);
            //   console.log(savat.tovarlar);
          }        
        } 
      });
      // InfoModal 
    $(document).on("click",".info",function() {
        const idt=$(this).attr('id');
        apidata = JSON.parse($('.hidedata').text());
        for (let index6 = 0; index6 < apidata.content.length; index6++) {
          const element = apidata.content[index6];
          if (element.id==idt){
            $('#infoModal .modal-title').html(element.tovar);
            let html = `
            <div class="card mb-3" style="max-width: 100%;">
                <div class="row g-0">
                    <div class="col-4">
                    <img src="static/img/${element.rasm}" class="img-fluid w-100 h-100 rounded-start" alt="...">
                    </div>
                    <div class="col-8">
                    <div class="card-body">
                        <h6 class="card-title"><i class="bi bi-info-circle"></i> ${element.tarif}</h6>
                        <h6 class="card-text"><small class="text-muted"><i class="bi bi-geo-alt"></i> ${element.tashkilot.nomi} </small></h6>
                        <h6 class="card-text" style="display:flex;  justify-content: space-between;"><small class="text-muted"><i class="bi bi-clock-history"></i> ${element.tashkilot.ish_vaqti} </small><span><i class="bi bi-cart-check"></i> ${element.count}</span></h6>
                    </div>
                    </div>
                </div>
            </div>`
            $('#infoModal .modal-body').html(html);
            $('#infoModal').modal('show');
          }        
        } 
      });
          // Savatbtn
    $(document).on("click",".savatbtn",function() {
        apidata = JSON.parse($('.hidedata').text());
        let html = savatx(apidata,savat.tovarlar)
        $('.stable').html(html);
        $('#staticBackdrop').modal('show');
      });
       // Filterbtns
    $(document).on("click",".filter",function() {
        // apidata = JSON.parse($('.hidedata').text());
        const ids =  $(this).attr('id').split('/');
        // console.log(ids);
        $('.slct-grp'+ids[0]).find('button').removeClass('btn-secondary').addClass('btn-outline-secondary');
        $(this).removeClass('btn-outline-secondary').addClass('btn-secondary');
        if(ids[1]=='0'){
            $('.t'+ids[1]).removeClass('d-none');
            $('.b'+ids[0]).removeClass('d-none');
        }else{
            $('.b'+ids[0]).addClass('d-none');
            $('.t'+ids[1]).removeClass('d-none');
        }
        
      });
          // Tasdiqlash_btns
    $(document).on("click",".tasdiqlashbtn",function() {
      $.ajax({
        url: "/update", 
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(savat),
        success: function (result) {
          // console.log(typeof result.stat, result.stat);
            if (result.stat=='ok'){
              tg.close();
            }
         },
         error: function (err) {
          console.log("aloqa yo'q",err);
         }
      });    
      
    });
      
});

