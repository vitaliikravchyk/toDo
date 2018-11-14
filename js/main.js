var ToDo =  {
    options: {
        taskBar: document.getElementById('taskBar'),
        content: document.getElementById('content'),
        textForP: ''
    },

    init: function(){
        this.createItems();
    },

    createItems:function(){
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