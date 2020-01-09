let inventory = [
    {
        id: 1,
        name: 'Santoor Mega Offer',
        factor: 35.74
    },
    {
        id: 2,
        name: 'Santoor 100x4',
        factor: 83.36
    },
    {
        id: 3,
        name: 'Santoor 125x4',
        factor: 126.79
    },
    {
        id: 4,
        name: 'STR White 56g Single',
        factor: 8.93
    },
    {
        id: 5,
        name: 'STR White 56gx4',
        factor: 35.74
    },
    {
        id: 6,
        name: 'Chandrika 75g',
        factor: 24
    },
    {
        id: 7,
        name: 'Handwash 100ml Bottle',
        factor: 22.73
    },
    {
        id: 8,
        name: 'Handwash 180ml Pouch',
        factor: 100
    },
    {
        id: 9,
        name: 'Handwash 215ml Bottle',
        factor: 90
    },
	{
        id: 10,
        name: 'Handwash 750ml Bottle',
        factor: 135.45
    },
    {
        id: 11,
        name: 'GLY 50g',
        factor: 17.89
    },
    {
        id: 12,
        name: 'GLY 75g + 33%',
        factor: 31.11
    },
    {
        id: 13,
        name: 'Safe Wash 20g',
        factor: 3.47
    },
    {
        id: 14,
        name: 'Safe Wash 50g',
        factor: 8.55
    },
    {
        id: 15,
        name: 'Safe Wash 200g',
        factor: 26.34
    },
    {
        id: 16,
        name: 'Safe Wash 500g',
        factor: 57.61
    },
    {
        id: 17,
        name: 'Safe Wash 1kg',
        factor: 288.07
    },
    {
        id: 18,
        name: 'Bolts Jar',
        factor: 171.43
    }
]

function init() {
    inventory = inventory.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    inventory.forEach(it=>{getItem(it)});
}

function getItem(it) {
    $("#list").append(`
        <li id="li_${it.id}">
            <label for="quantity_${it.id}">
                <div class="label_name">${it.name}</div>
                <input name="quantity_${it.id}" id="quantity_${it.id}" type="number" placeholder="Enter Quantity here..."/>
            </label>
        </li>`
    )
    $('body').find(`#quantity_${it.id}`).bind('change paste keyup', e=> {
        const quant = $('body').find(`#li_${it.id}`).find(".factored_result")
        if(quant.length) {
            quant.find('span').text(`${e.target.value * it.factor}`)
        } else {
            $('body').find(`#li_${it.id}`).append(`<div class="factored_result"><b class="total_text" style="color:#0000b3">Total:</b> <span>${e.target.value * it.factor}</span></div>`)
        }
    })
}

$(document).ready(function(){
    init()
});
