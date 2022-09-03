
//FAZER COM QUE O FORM NAO ATUALIZE A PAGINA
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("myForm").addEventListener("submit", function(e) {
        e.preventDefault() // Cancela a ação padrao
        sendContactForm();
    });
});


//funcao para adicionar e checar tarefa
function addTarefa(){
    const tarefa = document.querySelector('#tarefa');
    let texto = tarefa.value 
    const lista = document.querySelector('.list');
    const items = document.createElement('li')
    const separador = document.createElement('hr') //ADICIONA UMA LINHA EMBAIXO DO ITEM
    
    //adicionando ao li o texto do input
    items.textContent = texto
    lista.append(items)  
    lista.append(separador)

    //eventListener para checar uma tarefa
    items.addEventListener('click', e =>{
        items.style.textDecoration = "line-through"
        items.style.listStyleType = "disc"
    })
    }

   