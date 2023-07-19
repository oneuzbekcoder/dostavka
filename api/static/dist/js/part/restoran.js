$(document).ready(function(){
    let  url ='http://127.0.0.1:2525'
    $(document).on("click",".restoran",function() {
        $('.cardsx').html('<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>');
       try {
        $.getJSON({
            url: `${url}/tashkilot/1`, 
            method: 'post',   
            success: function(data, status){
                console.log(data['json_list'][0]['nomi'])
                if(status==='success'){
                    let html =`
                    <div style="
                    display:flex;
                    flex-direction: row;
                    margin-top:15px;                
                    ">
    
                        <div style="
                            width:50%;
                            padding:10px;
                            margin-right:5px;
                            background:#fcc;
                        ">
                            <img src="/img/taomlar.jpg" width="100%">
                            <button class="restoran" >Retoranlar</button>
                        </div>
        
                        <div style="width:50%;background:#fec;padding:10px;">
                            <img src="/img/food.jpg" width="100%">
                            <button class="dukon" >Do'konlar</button>
                        </div>
                    </div>
                    <h1 style="text-align:center">Restoranlar</h1><div class="cards">
                    `;
                    for (let index = 0; index < data['json_list'].length; index++) {
                        const x = data['json_list'][index];
                        html +=`                        
                            <div class="card tcard" id="${x['id']}">
                                <img src="${x['rasm']}">
                                <h2>${x['nomi']}</h2>
                                <h4>${x['ish_vaqti']}</h4>
                            </div>                        
                        `;
                    }
                    html +='</div>';
                    

                    $('.cardsx').html(html)
                }
                else{
                    console.log("Server bilan aloqa yo'q1")
                }

            },
            error: function() {
                console.log("Server bilan aloqa yo'q2")
            }      
        });
        }
        catch {
            console.log("Server bilan aloqa yo'q3")
        }
    });

});
    