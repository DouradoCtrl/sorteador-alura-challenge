let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();
    
    if (!nome) {
        return alert('Digite um nome!');
    }
    
    if (amigos.includes(nome)) {
        return alert('Nome já existe!');
    }
    
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    renderizar();
}

function renderizar() {
    const container = document.getElementById('cardsContainer');
    
    container.innerHTML = amigos.map(nome => `
        <div class="friend-card">
            <div class="card-header">
                <h3>${nome}</h3>
                <button class="button-remove-card" onclick="removerAmigo('${nome}')">
                    ×
                </button>
            </div>
            <div class="card-content">
                <p>Disponível para sorteio</p>
            </div>
        </div>
    `).join('');
}



