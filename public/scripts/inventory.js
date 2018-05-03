/* <div class="row">
for (let i=0;i<Items.length;i++){ 
    <div class="col padding-0">
        <div class="card" style="width: 100%;">
            <img class="card-img-top rarity-<%=Items[i].rarity%>" src="<%=Items[i].image%>" height="150px">
            <p class="card-title showcase-title">
                <%=Items[i].market_hash_name%>
            </p>
        </div>
    </div>
     }
</div> */



let rowStart = $('<div class="row">');
let rowEnd = $('</div>');

for (let i=0; i<Items.length;i++){
    let card = $('<div class="card" style="width: 100%;"' +
    '<img class="card-img-top rarity-' + Items[i].rarity + '"src="' + Items[i].image + '"height="150px">' + 
    '<p class="card-title showcase-title">' + Items[i].market_hash_name + '</p></div>');
    if (i%6===0){
        $('.inventoryContainer').append(rowStart);
    }
    $('.inventoryContainer').append(card);
    if (i%6===0){
        $('.inventoryContainer').append(rowEnd);
    }
}