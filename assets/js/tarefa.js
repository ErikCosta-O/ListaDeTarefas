const novaTarefa = document.querySelector('[data-form-button]')

//criando o evento de clique 
novaTarefa.addEventListener('click',(evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    const valor = input.value
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`//=templete string
    tarefa.innerHTML = conteudo
    tarefa.appendChild(botao())
    tarefa.appendChild(botaoExclui())
    lista.appendChild(tarefa)
    input.value = ""
})
//criando o elemento botão
const botao =() =>{
    const botaoConclui = document.createElement('button')
    if (botaoConclui.classList) botaoConclui.classList.add('finalizar')
    botaoConclui.innerHTML =('Finalizar')
    botaoConclui.addEventListener('click',concluirTarefa)
    return botaoConclui
}

//criar a função para concluir tarefa
const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}
//fazendo o botão de deletar
const botaoExclui = () =>{
    const deletaBotao = document.createElement('button')
    if (deletaBotao.classList) deletaBotao.classList.add('deletar')
    deletaBotao.innerHTML = 'deletar'
    deletaBotao.addEventListener('click',deletarTarefa)
    return deletaBotao
}
//criando a função para deletar a tarefa
const deletarTarefa = (evento) =>{
    const deletarBotao = evento.target
    const tarefaCompleta = deletarBotao.parentElement
    tarefaCompleta.remove()
    return deletarBotao
}