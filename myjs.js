/*(function(){
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
*/
(function(){
    var tabs = document.querySelectorAll('.container-caption-item'),
    arrows = document.querySelectorAll('i'),
    dropDownList = document.querySelectorAll('.container-caption-item_dropDown-list'),
    containers = document.querySelectorAll('.container-caption-text');
    function handelTabChange(event){
        
        for(var i = 0; i < tabs.length; i++){
            if(event.target.tagName === "LI"){
                tabs[i].classList.remove('active');
              }
        }
        if(event.target.tagName == 'LI'){
          event.target.classList.add('active');
          for(var i = 0; i < dropDownList.length; i++){
          dropDownList[i].classList.remove('show');
        }
          for(var i = 0; i < containers.length; i++){
            containers[i].classList.remove('show');
          }
          document.querySelector('.container-caption-text[data-url='+event.target.getAttribute('data-url')+']').classList.add('show');
        }
    }
    for(var i = 0; i < tabs.length; i++){
      tabs[i].addEventListener('click', handelTabChange);
    }
       
        
    function dropDown(event){
       if(event.target.parentElement.classList[1] == 'active'){ 
          event.target.parentElement.childNodes[3].classList.add('show');
          console.log(event.target.parentElement.classList[1])
       }
    }   
        
        for(var i = 0; i < arrows.length; i++){
          arrows[i].addEventListener('click', dropDown);

        } 
})();