let ToDo =  {
    data: [],
    init: function(){
        let self = this;
        
        if(localStorage.length > 0){
            for(let i = 0; i < this.getStorage('data').length; i++){
                this.data.push(this.getStorage('data')[i]);
                this.createItem(this.data[i].content);
                if(this.data[i].aproved === true){
                    document.getElementsByTagName('p')[i].previousSibling.classList.add('approveCircle');
                    document.getElementsByTagName('p')[i].classList.add('approveP');
                }
            }
        };

        document.querySelector('#content').addEventListener('keydown', function(){
            if(event.keyCode === 13){
                self.itemCompilation();
            }
        }); 
        
        document.querySelector('#addItem').addEventListener('click', function(){
            self.itemCompilation();
        });
        document.querySelector('#taskBar').addEventListener('click', function(){
            if(event.target.classList.contains('close')){
                self.deleteItem();
            } else {
                if(event.target.classList.contains('approve')){
                    self.approveItem();
                }
            }
        });
    },
    itemCompilation: function(){
        if(document.querySelector('#content').value === ''){
            alert("You can't add nothing, try to input something!");
            return
        } else {
            this.data.push({content: document.querySelector('#content').value, aproved: false});
            this.createItem(document.querySelector('#content').value);
            this.setStorage('data', this.data);
        }
    },

    createItem: function(value){
        
        let item = document.createElement('div');
        item.className = "item";
        
        let circle = document.createElement('button');
        circle.className = "approve";
        
        let p  = document.createElement('p');
        p.innerHTML = value;
        
        let del = document.createElement('button');
        del.className = "close";
        
        item.appendChild(circle);
        item.appendChild(p);
        item.appendChild(del);
        document.querySelector('#taskBar').appendChild(item);
    },

    deleteItem: function(){
        localStorage.removeItem('data');
        this.data.splice(this.data.findIndex(function(elem){//вырезает с массива объект который ответственный за текущий item
            if(elem.content === event.target.previousSibling.textContent){
                return elem
            }
        }), 1);
        this.setStorage('data', this.data);
        event.target.parentNode.remove(); 
    },

    approveItem: function(){
        localStorage.removeItem('data');
        event.target.nextSibling.classList.toggle('approveP')
        event.target.classList.toggle('approveCircle');
        for(let i = 0; i < this.data.length; i++){//change value of aproved(в объекте который ответственный за текущий item)
            if(this.data[i].content === event.target.nextSibling.textContent){ 
                this.data[i].aproved = !this.data[i].aproved;
            }
        }
        this.setStorage('data', this.data);
    },
    setStorage: function(key, value){
        return localStorage.setItem(key, JSON.stringify(value));
    },
    getStorage: function(key){
        return JSON.parse(localStorage.getItem(key))
    }
}
