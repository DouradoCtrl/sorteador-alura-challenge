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

function removerAmigo(nome) {
    amigos = amigos.filter(amigo => amigo !== nome);
    renderizar();
}

function sortearAmigo() {
    if (!amigos.length) {
        return alert('Sorteio concluído!');
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = `<li>Seu amigo secreto: <strong>${sorteado}</strong></li>`;
    
    const confirmar = confirm(`Sorteou: ${sorteado}\n\nConfirmar?`);
    
    if (confirmar) {
        amigos = amigos.filter(amigo => amigo !== sorteado);
        renderizar();
        
        if (amigos.length) {
            resultado.innerHTML = `<li>Confirmado!</li>`;
        } else {
            resultado.innerHTML = '<li>Sorteio concluído!</li>';
        }
    } else {
        resultado.innerHTML = '<li>Tente novamente</li>';
    }
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

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
