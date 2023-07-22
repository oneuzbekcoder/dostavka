$(document).ready(function(){
    let  url ='http://127.0.0.1:2525'
    $(document).on("click",".tcard",function() {
        let id_tashkilot = $(this).attr('id');
        $('.cardsx').html('<div class="lds-roller" style="margin-top:15px; "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>');
        try {
        $.getJSON({
            url: `${url}/tovar/${id_tashkilot}`, 
            method: 'post',   
            success: function(data, status){
                console.log(data)
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
                            <table class="card tcard" style="border:0;width:100%;" id="${x['id']}">
                                <tr>
                                    <td style="width:25%;"><img style="width:100%;"  src="${x['rasm']}"></td>                      
                                    <td>
                                        <h2>${x['nomi']}</h2>
                                        <h4>${x['ish_vaqti']}</h4>
                                    </td>
                                </tr>
                            </table>                     
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
    