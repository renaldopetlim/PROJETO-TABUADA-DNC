function Tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.lenght == 0 || end.value.lenght == 0){
        window.alert('[ERRO] Confira os dados inseridos!')
    } else {
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ''
        var res = window.document.getElementById('resposta')
        res.innerHTML = `A tabuada do ${n} é:<br><br>`
        do{
            r = n*x
            res.innerHTML += `${x} X ${n} = ${r} <br>`
            x++
        } while (x <= e)
    }
}