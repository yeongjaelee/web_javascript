var Body = {
    setColor:function(color){
        document.querySelector('body').style.color=color;
    },
    SetBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
function LinkssetColor(color){
    var list = document.querySelectorAll('a');
    var i=0;
    while(i<list.length){
    console.log(list[i])
    list[i].style.color=color;
    i+=1;
    }
}

function nightDayHandler(self){
    var target =  document.querySelector('body');
    if(self.value ==='night'){
    Body.SetBackgroundColor('black');
    Body.setColor('white');
    self.value ='day';
    LinkssetColor('powderblue');
    }
    else{
    Body.SetBackgroundColor('white')
    Body.setColor('black');
    self.value ='night';
    LinkssetColor('blue');
    }
    }
