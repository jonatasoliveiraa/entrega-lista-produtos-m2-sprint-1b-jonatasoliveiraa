function mostrarProdutos(listaProdutos){
    const section = document.querySelector(".vitrine")
    
    section.innerHTML = ""
    listaProdutos.forEach((produto) => {
        
        const div = document.createElement("div")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const span = document.createElement("span")
        const div2 = document.createElement("div")
        const paragraph = document.createElement("p")
        const button = document.createElement("button")
        const ol = listaComponetes(produto.componentes)


        button.addEventListener("click", () =>{
            carrinho.push(produto)
            itemNoCarrinho(carrinho)
        })

        div.classList.add("cardProduto")
        img.classList.add("cardImg")
        h3.classList.add("cardTitulo")
        span.classList.add("cardCategoria")
        div2.classList.add("divBotao")
        button.classList.add("botaoComprar")
        
        img.src = produto.img
        img.alt = produto.nome
        h3.innerText = produto.nome
        paragraph.innerText = `R$ ${produto.preco}`
        span.innerText = produto.secao
        button.innerText = "Comprar"
        
        div2.append(paragraph,button)
        div.append(img,h3,span,ol,div2)
        section.append(div)
        
        
    });
}


let carrinho = []

// SEÇÃO CARRINHO
function itemNoCarrinho(listaProdutos){

    const containerC = document.querySelector(".containerC")

    containerC.innerHTML = ""
    listaProdutos.forEach((produto) =>{
        const li = document.createElement("li")
        const divProduto = document.createElement("div")
        const img = document.createElement("img")
        const divInfo = document.createElement("div")
        const h3 = document.createElement("h3")
        const span = document.createElement("span")
        const p = document.createElement("p")
        const button = document.createElement("button")
        const imgRemove = document.createElement("img")


        button.addEventListener("click", (evento) =>{

           for(let i = 0; i < carrinho.length; i++){

               if(evento.path[2].id == carrinho[i].id) {      
                    carrinho.splice(i, 1)
                    break
               }
           }
           itemNoCarrinho(carrinho)
        })


        li.classList.add("produtoCarrinho")
        divProduto.classList.add("divProduto")
        img.classList.add("imgProduto")
        divInfo.classList.add("infoCarrinho")
        h3.classList.add("tituloCarrinho")
        span.classList.add("categoriaCarrinho")
        p.classList.add("pValor")
        button.classList.add("botaoRemover")
        imgRemove.classList.add("iconeBotao")

        li.id = produto.id
        img.src = produto.img
        img.alt = produto.nome
        h3.innerText = produto.nome
        span.innerText = produto.secao
        p.innerText = `R$ ${produto.preco}`
        imgRemove.src = "./src/img/trash.png"

        divInfo.append(h3,span,p)
        divProduto.append(img, divInfo)
        button.append(imgRemove)
        li.append(divProduto,button)
        containerC.append(li)
    })
    somaQuantidade(listaProdutos)
    somaTotal(listaProdutos)


}





function listaComponetes(componentes){
    const ol = document.createElement("ol")
    ol.classList.add("cardLista")

    componentes.forEach(produto =>{
        const li = document.createElement("li")
        li.classList.add("cardLi")
        li.innerText = produto
        ol.append(li)
    })
    return ol

}








// SEÇÃO DE SOMA
function somaQuantidade(arrayProduto){
    const quantidadeTotal = document.getElementById("quantidadeTotal")
    let total = 0
    arrayProduto.forEach(() =>{
        return total++
    })

    quantidadeTotal.innerText = total

}

function somaTotal(arrayProduto){ 
    const valorTotal = document.getElementById("precoTotal")

    let soma = 0
    for(let i = 0; i < arrayProduto.length; i++){
        soma += parseFloat(arrayProduto[i].preco)
    }        
    
    valorTotal.innerText = `R$ ${soma.toFixed(2)}`
    
}









// SEÇÃO DE FILTROS
function filtrarTodos(){

    const listarTodos = produtos.filter((produto) =>{
        return produto
        
    })
    mostrarProdutos(listarTodos)
}
const botaoTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos")
botaoTodos.addEventListener("click",filtrarTodos)



function filtrarHortiFruti(){

    const listaHortiFruti = produtos.filter((produto) =>{
        return produto.secao === "Hortifruti"
    })
    mostrarProdutos(listaHortiFruti)
    
}
const botaoHortiFruti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")
botaoHortiFruti.addEventListener("click",filtrarHortiFruti)



function filtrarPanificadora(){

    const listaPanificadora = produtos.filter((produto) =>{
        return produto.secao === "Panificadora"

    })
    mostrarProdutos(listaPanificadora)
}
const botaoPanificadora = document.querySelector(".estiloGeralBotoes--filtrarPanificadora")
botaoPanificadora.addEventListener("click", filtrarPanificadora)



function filtrarLaticinios(){

    const listaLaticinios = produtos.filter((produto) =>{
        return produto.secao === "Laticínio"

    })
    mostrarProdutos(listaLaticinios)

}
const botaoLaticinios = document.querySelector(".estiloGeralBotoes--filtrarLaticinios")
botaoLaticinios.addEventListener("click",filtrarLaticinios)




const botaoCampoDeBusca = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
const inputCampoDeBusca = document.querySelector(".campoBuscaPorNome")
function filtrarCampoDeBusca(){

    const inputText = inputCampoDeBusca.value.trim()
    const nome = inputText.toLowerCase()

    const campoDeBusca = produtos.filter((produto) =>{
        if(
            produto.nome.toLowerCase().includes(nome) || 
            produto.categoria.toLowerCase().includes(nome) ||
            produto.secao.toLowerCase().includes(nome)
        ){
            return true
        }
    })
    mostrarProdutos(campoDeBusca)
}

botaoCampoDeBusca.addEventListener("click", filtrarCampoDeBusca)



mostrarProdutos(produtos)



