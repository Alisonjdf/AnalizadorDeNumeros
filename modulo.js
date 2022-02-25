let num = document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let result = document.querySelector('div#resultado')
let vetor =[]

function isNumero(n){
    if(Number(n)>=1&&Number(n)<=100){
        return true
    }else{
        return false}
}
function naLista(n,l){
    if(l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
}
function adicionar() {
    if(isNumero(num.value) && !naLista(num.value , vetor)){
        vetor.push(Number(num.value))
        let item=document.createElement('option')
        item.text=`Valor ${num.value} adicionado`
        lista.appendChild(item)
        result.innerHTML=''
    } else{
        alert('Valor inválido ou já existe na lista')
    }
    num.value=''
    num.focus() 
}
function finalizar(){
    if(vetor.length==0){
        alert('A lista esta vazia')
    }
    else{   
        let maiorNumero=vetor[0]
        let menorNumero=vetor[0]
        let soma=0
        let media=0
        for(let pos in vetor){
            soma+=vetor[pos]
            media=soma/vetor.length
            if(vetor[pos]>maiorNumero){
                maiorNumero=vetor[pos]
            }if(vetor[pos]<menorNumero){
                menorNumero=vetor[pos]
            }
        }    
      result.innerHTML=''
      result.innerHTML+=`<h2><p><i>Ao todo temos:</i></p></h2>`
      result.innerHTML+=`<p>Números cadastrados ${vetor.length}</p>`
      result.innerHTML+=`<p><i>O maior número é ${maiorNumero}</i></p>`
      result.innerHTML+=`<p><i>O menor número é ${menorNumero}</i></p>` 
      result.innerHTML+=`<p><i>A soma deles é ${soma} </p>`
      result.innerHTML+=`<p><i>A média entre eles é ${media}</i></p>` 
      result.innerHTML+=`<h2><i>Obrigado pela sua participação!</i></h2>`
    }
}