// main.js

// Seleciona o formulário, o corpo da tabela e a própria tabela
const form = document.getElementById('form-contatos');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');

// Função para adicionar um novo contato à tabela
function addContato(nome, telefone) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td><img src="./images/Profile.png" alt="perfil" /></td>
        <td>${nome}</td>
        <td>${telefone}</td>
        <td><button class="btn-excluir">Excluir</button></td>
    `;

    // Adiciona o evento de clique para o botão de exclusão
    tr.querySelector('.btn-excluir').addEventListener('click', function () {
        tr.remove();
        // Se não houver mais linhas na tabela, ocultar a tabela novamente
        if (!tbody.hasChildNodes()) {
            table.style.display = 'none';
        }
    });

    tbody.appendChild(tr);
}

// Evento de submissão do formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome-contato').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        addContato(nome, telefone);

        // Mostrar a tabela se ela estiver oculta
        if (table.style.display === 'none') {
            table.style.display = 'table';
            table.classList.add('slide');
        }

        // Limpa os campos do formulário
        form.reset();
    }
});
