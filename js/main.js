var Tabs = function(tabItems){
    var tabItems = tabItems;
    var editValue;
    for(i=0; i<tabItems.length;i++){
        $("#tabHeader").append("<li id="+(i+1)+"><a data-toggle='tab' id='item"+(i+1)+"' href='#menu"+(i+1)+"'>"+tabItems[i].heading+"</a></li>");
   }
   init();

    //default show
   function init(){       
    for(initial=0; initial<tabItems.length;initial++){
        if(tabItems[initial].showDefault == "true"){
            $("#tabInfo").append("<ul id='menu"+(initial+1)+"' class='tab-pane fade '></ul>")
            for(i=0; i<tabItems[initial].info.length;i++){           
                $("#menu"+(initial+1)).append("<li class='innerTab' id='innerTab"+i+"'><h3>"+tabItems[initial].info[i].subHeading+"</h3></li>")
                $("#innerTab"+i).append("<ul></ul>")            
                for(j=0; j<tabItems[initial].info[i].listitems.length;j++){    
                    if(tabItems[initial].info[i].listitems[j].split('.')[1] == "png" ||tabItems[initial].info[i].listitems[j].split('.')[1] == "jpg" ){
                        $("#innerTab"+i+" ul").append("<li class='item'><img src='"+tabItems[initial].info[i].listitems[j]+"' alt='img' height='75' width='100'/></li>")
                    }
                    else{
                        $("#innerTab"+i+" ul").append("<li class='item'>"+tabItems[initial].info[i].listitems[j]+"</li>")
                    } 
                }
            }
            $("#"+(initial+1)).addClass("active");
            $("#menu"+(initial+1)).addClass("active in");
            $(".item").on("click", showText);
            }        
        }
        editValue = $('#editArea').val();
    } 
     


    //Appending content based on the clicked topic
   $("#tabHeader li").click(function(){
        $("#tabInfo").empty();
        var index = $(this).attr("id")
        $("#tabInfo").append("<ul id='menu"+(index)+"' class='tab-pane fade '></ul>")

        for(i=0; i<tabItems[(index-1)].info.length;i++){              
            $("#menu"+index).append("<li class='innerTab' id='innerTab"+i+"'><h3>"+tabItems[(index-1)].info[i].subHeading+"</h3></li>")
            $("#innerTab"+i).append("<ul></ul>")
            
            for(j=0; j<tabItems[(index-1)].info[i].listitems.length;j++){ 
                if(tabItems[(index-1)].info[i].listitems[j].split('.')[1] == "png" ||tabItems[(index-1)].info[i].listitems[j].split('.')[1] == "jpg" ){
                    $("#innerTab"+i+" ul").append("<li class='item'><img src='"+tabItems[(index-1)].info[i].listitems[j]+"' alt='img' height='75' width='100'/></li>")
                }
               else{
                     $("#innerTab"+i+" ul").append("<li class='item'>"+tabItems[(index-1)].info[i].listitems[j]+"</li>")
               }    
               //$("#innerTab"+i+" ul").append("<li class='item'>"+tabItems[(index-1)].info[i].listitems[j]+"</li>")
            }
       }
       $(".item").on("click", showText);
   });



 //mapping image or content to display area
   function showText(){        
        var attr = $(this).children().attr('src');
        if(typeof attr !== typeof undefined && attr !== false){
            $(this).children().clone().appendTo($("#progress"));
        }
        else{
            $("#progress").append($(this).text()+" ");
        }
        $("#progress").append(" ");
   }

    $("#edit").click(function(){
        document.getElementById("progress").contentEditable = true;
    });
    $("#progress").on("keyup", function() {
        editValue = $(this).html();
    });
    $("#save").click(function(){
        document.getElementById("progress").contentEditable = false;    
    });

    // function to copy content inside the progress div
    $("#copy").click(function(){
		editValue = $('#progress').html();
			if (window.getSelection) {
				if(!window.getSelection().isCollapsed){						
					var range = document.createRange();
					range.selectNodeContents(document.getElementById('progress'));
					window.getSelection().addRange(range);
				   document.execCommand("copy");
				}
				else{
					 var textArea = document.createElement('textarea');
					textArea.setAttribute
					('style','width:1px;border:0;opacity:0;');
					document.body.appendChild(textArea);
					textArea.value = editValue;
					textArea.select();
					document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
				}
				 
			}
	});
}

    
