var ToDo =  {
    options: {
        taskBar: document.getElementById('taskBar'),
        content: document.getElementById('content'),
        addItem: document.getElementById('addItem'),
        close: document.getElementsByClassName('close'),
        textForP: ''
    },

    init: function(){
        var self = this;
        this.options.addItem.addEventListener('click', function(){
            self.options.textForP = self.options.content.value;
            self.createItems();
        })
        this.options.taskBar.addEventListener('click', function(){
            close = document.getElementsByClassName('close');
            if(event.target.parentNode != close[0]){
                return
            }
            self.options.taskBar.removeChild(event.target.parentNode.parentNode)
        })
    },

    createItems:function(){
        if(this.options.textForP === ''){
            alert("You can't add nothing, try to input something!");
            return
        } else {
        var item = document.createElement('div');
        item.className = "item";

        var imageCrcl = document.createElement('img');
        imageCrcl.src = "img/circle.png";
        var circle = document.createElement('div');
        circle.className = "circle";
        circle.appendChild(imageCrcl);
       
        var p  = document.createElement('p');
        p.innerHTML = this.options.textForP;

        var imageDlt = document.createElement('img');
        imageDlt.src = "img/delete.png";
        var del = document.createElement('div');
        del.className = "close";
        del.appendChild(imageDlt);
        
        item.appendChild(circle);
        item.appendChild(p);
        item.appendChild(del);
        this.options.taskBar.appendChild(item);
        }
    }
}