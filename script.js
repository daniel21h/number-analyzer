let number = document.querySelector('input#fnumber')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let amount =[]

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addNumber() {
    if (isNumero(number.value) && !inList(number.value, amount)) {
        amount.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado.`

        //Adicionar na lista
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    //Apagar o número do box adicionar depois de adicionado
    number.value = ''
    number.focus()
}

function finish() {
    if (amount.length == 0) {
        alert('Adicione valores antes e finalizar!')
    } else {
        let total = amount.length

        //Mostrando o maior e o menor número
        let bigger = amount[0]
        let smaller = amount[0]
        let sum = 0
        let average = 0

        //Laço de percurso
        for (let pos in amount) {
                sum += amount[pos]
            if (amount[pos] > bigger)  
                bigger = amount[pos]
            if (amount[pos] < smaller)
                smaller = amount[pos]
        }

        average = sum / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${bigger}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${average}.</p>`
    }
}