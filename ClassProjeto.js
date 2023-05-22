class Projeto{
    constructor(mult,btn,corpo){

        this.multiplas = document.getElementById(mult);
        this.btn = document.getElementById(btn);
        this.corpo = document.getElementById(corpo);
        this.iniciou()
    }
    
    iniciou(){
        console.log(this.btn);
        this.btn.addEventListener("click",()=>{
            console.log(this.multiplas.value);
            
            let sec =  document.createElement('section');
            sec.id = "column";
            sec.innerHTML='olaolaola'
            document.querySelector('#grid').appendChild(sec)
        })
        
        
    }
}