(function(){
  var captionItem = document.querySelectorAll('li');
  for(var y = 0; y < captionItem.length; y++){
    captionItem[y].addEventListener('click', function(event){
      var target = event.target;
      list = document.querySelectorAll('li');
      textBoxs = document.querySelectorAll('.container-caption-text');
        console.log(target.parentElement.parentElement.id)
        for(var i = 0; i < list.length; i++){
            list[i].classList.remove("active");
         }
        for(var z = 0; z < textBoxs.length; z++){
            textBoxs[z].classList.remove("show");
         }

          if(target.tagName = 'LI'){
            target.parentElement.classList.add("active");
            if(target.parentElement.id == "box_item_first"){
                text_box_first.classList.add("show");
            }
            if(target.parentElement.id == "box_item_second"){
                text_box_second.classList.add("show");
            }
            if(target.parentElement.id == "box_item_third"){
                text_box_third.classList.add("show");
            }
          }
    })
  }  
})();