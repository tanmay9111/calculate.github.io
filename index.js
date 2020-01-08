let inventory = [
    {
        id: 1,
        name: 'Samosa',
        factor: 0.9
    },
    {
        id: 2,
        name: 'Chai',
        factor: 0.8
    },
    {
        id: 3,
        name: 'Dosa',
        factor: 0.7
    },
    {
        id: 4,
        name: 'Vada',
        factor: 0.6
    },
    {
        id: 5,
        name: 'Kachori',
        factor: 0.5
    },
    {
        id: 6,
        name: 'Chat',
        factor: 0.4
    },
    {
        id: 7,
        name: 'Namkeen',
        factor: 1.4
    },
    {
        id: 8,
        name: 'Idli',
        factor: 11
    },
    {
        id: 9,
        name: 'Poha',
        factor: 2.6
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
        <li id="li_${it.name}">
            <label for="quantity_${it.name}">
                <div class="label_name">${it.name}</div>
                <input name="quantity_${it.name}" id="quantity_${it.name}" type="number" placeholder="Enter Quantity here..."/>
            </label>
        </li>`
    )
    $('body').find(`#quantity_${it.name}`).bind('change paste keyup', e=> {
        const quant = $('body').find(`#li_${it.name}`).find(".factored_result")
        if(quant.length) {
            quant.find('span').text(`${e.target.value * it.factor}`)
        } else {
            $('body').find(`#li_${it.name}`).append(`<div class="factored_result"><b class="total_text" style="color:#0000b3">Total:</b> <span>${e.target.value * it.factor}</span></div>`)
        }
    })
}

$(document).ready(function(){
    init()
});
