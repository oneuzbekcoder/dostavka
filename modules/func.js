const helpers = {
    home: function (json) {
        // console.log(json.bulim);
        window.apidata = json;
        let body = '<div class="accordion accordion-flush w-100 p-0" style="margin-bottom:5rem;" id="accordionFlushExample">'
        for (let index1 = 0; index1 < json.bulim.length; index1++) {
            const bulimx = json.bulim[index1];
            let slct = [];
            for (let index2 = 0; index2 < json.content.length; index2++) {
                const tovarx = json.content[index2];
                // console.log(slct);
                let a = true;
                if (tovarx.bulim==bulimx.id){
                    for (let index9 = 0; index9 < slct.length; index9++) {
                        const element9 = slct[index9];
                        if(element9.id===tovarx.tashkilot.id){
                            a= false;
                        }
                    }
                    if (a===false){
                        continue;
                    }
                    slct.push({"id":tovarx.tashkilot.id,"nomi":tovarx.tashkilot.nomi});
                }
            }
            // console.log(slct);
            let slct_text =`<button class="btn btn-sm btn-secondary filter" style="margin-right:5px;" id="${bulimx.id}/0"><i class="bi bi-geo-alt"></i> Barchasi</button>`;
            for (let index4 = 0; index4 < slct.length; index4++) {
                slct_text =slct_text+`<button class="btn btn-sm btn-outline-secondary filter" style="margin-right:5px;" id="${bulimx.id}/${slct[index4].id}"><i class="bi bi-geo-alt"></i> ${slct[index4].nomi}</button>`;  
            }
            body = body + `
            <div class="accordion-item p-0">
                <h2 class="accordion-header" id="flush-heading${index1}">
                    <button class="shadow-none accordion-button p-1 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index1}" aria-expanded="false" aria-controls="flush-collapse${index1}">
                        <img src="static/img/${bulimx.rasm}" style="max-height: 36px;" alt=""> ${bulimx.nomi}
                    </button>
                </h2>
                <div id="flush-collapse${index1}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index1}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-2">
                        
                        <div class="row" >
                        <div class="table-responsive slct-grp${bulimx.id}" style="overflow: auto; white-space: nowrap;padding:5px;">
                            ${slct_text}              
                        </div>  
                        <hr>    
                        `;
                        for (let index5 = 0; index5 < json.content.length; index5++) {
                            const tovara = json.content[index5];
                            if (tovara.bulim==bulimx.id){                           
                                body = body + `<div class="col-6 mb-2 p-1 b${bulimx.id} t${tovara.tashkilot.id}">
                                <div class="card text-center" style="width: 100%;height:100%">
                                    <span style="position: absolute;top:5px;right:5px;display:none;" class="badges${tovara.id} badge bg-danger">0</span>
                                    <button type="button" style="position: absolute;top:5px;left:5px;" id="${tovara.id}" class="info btn btn-sm btn-outline-info"><i class="bi bi-info-circle"></i></button>
                                    <img src="static/img/${tovara.rasm}" alt="Image" style="max-width: 100%;height: 114px;">
                                    <div class="card-body p-1">
                                        <h6 class="card-title">${tovara.tovar}</h6>
                                        <span class="badge bg-info "><i class="bi bi-cash-stack"></i> ${tovara.narxi} so'm</span>
                                        <p class="m-0"><small><i class="bi bi-geo-alt"></i>  ${tovara.tashkilot.nomi}</small></p>
                                        <button type="button" id="${tovara.id}" class="dash btn btn-sm btn-danger" style="margin-right:20px;width:55px;"><i class="bi bi-dash-lg"></i></button>
                                        <button type="button" id="${tovara.id}" class="plus btn btn-sm btn-warning" style="width:55px;"><i class="bi bi-plus-lg"></i></button>
                                    </div>
                                </div>
                            </div>`;
                            }   
                        }

            body = body + `     
                        </div> 
                    </div> 
                </div>
            </div>           
            `;
            
        }
        body = body + '</div>';
        $('.body').html(body);
        return false;
    },
    addItemOne:function (arr, value) {
        let badge = $('.badges'+value);
        arr.push(value);
        let count = arr.filter(x => x == value).length;
        badge.html(count);
        badge.css("display","block");
        $('.sbadge').html(arr.length);
        return arr;
      },
    removeItemOne: function(arr,val){
        var index = arr.indexOf(val);
        if (index > -1) {
          arr.splice(index, 1);
        }
        
        let badge = $('.badges'+val);
        let count = arr.filter(x => x == val).length;
        badge.html(count);
        if(count<=0){
            badge.css("display","none ");
        }
        $('.sbadge').html(arr.length);
        return arr;
    }  ,
    savat: function (tovarlar, idarr){
        let html ='<table class="table ">'
        let jami_summa = 0;
        let newidarr =[];
        for (let index7 = 0; index7 < idarr.length; index7++) {
            const element = idarr[index7];
            if (newidarr.filter(x => x == element).length<=0){
                newidarr.push(element);
            }
        }
        for (let index8 = 0; index8 < tovarlar.content.length; index8++) {
            const elementx1 = tovarlar.content[index8];
            if(newidarr.filter(x => x == elementx1.id).length>0){
                let soni = idarr.filter(x => x == elementx1.id).length
                let summa = soni*elementx1.narxi;
                jami_summa = jami_summa + summa;
                html = html +`
                    <tr>
                    <td style="width: 20%;" valign="middle"><img class="rounded" src="static/img/${elementx1.rasm}" alt="Image" style="max-width: 100%;height: auto;"></td>
                    <td style="width: 40%;" valign="middle">
                    <h6 class="card-title">${elementx1.tovar}</h6>
                    <span class="badge bg-info 2x">${soni} x ${elementx1.narxi} </span>
                    <p class="m-0"><small><i class="bi bi-geo-alt"></i> ${elementx1.tashkilot.nomi}</small></p>
                    </td>
                    <td style="width: 40%; text-align: right;" valign="middle">${summa} so'm</td>
                </tr>
                `
            }
            
        }
        html = html+` </table>
        <h5>Jami:${jami_summa} so'm</h5>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Izoh. Masalan: Osh yog'li bo'lsin.</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        `;
        if(idarr.length>0){
            return html;
        }
        else {
           return '<h6 class="text-danger text-center">Sizda hozircha buyurmalar yo\'q.'; 
        }
        
    }
}

export const home = helpers.home;
export const addItemOne = helpers.addItemOne;
export const removeItemOne = helpers.removeItemOne;
export const savatx = helpers.savat