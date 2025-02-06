let Btn = document.querySelectorAll("button")
let result = document.querySelector(".res")
let val = "";

for(btn of Btn){
    btn.addEventListener("click",(e) => {
        let no = e.target.innerText;
        if(no === "="){
            let r = eval(val)
            result.innerText = r  
            val = "";   
        }else if(no === "CLR"){
            val = "";
            result.innerText = '000'
        }
        else{
        val = val + no;
        result.innerText = val
        }
    })
}
