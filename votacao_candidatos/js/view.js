class VotingView {
    constructor() {
        this.candidateList = document.getElementById("candidateList");
        this.form = document.getElementById("formulario");
        this.butao = document.getElementById("butao");
    }

    displayCandidates(candidates) {
        this.candidateList.innerHTML = "";
        candidates.forEach((candidate, index) => {
            const li = document.createElement("li");
            li.textContent = `${candidate.name} - Votos: ${candidate.votes}`;
            const voteButton = document.createElement("button");
            voteButton.textContent = "Votar";
            voteButton.dataset.index = index;

            const removeVoteButton = document.createElement("button");
            removeVoteButton.textContent = "Desfazer voto";
            removeVoteButton.dataset.index = index;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Excluir candidato";
            removeButton.dataset.index = index;

            li.appendChild(voteButton);
            li.appendChild(removeVoteButton);
            li.appendChild(removeButton);
            this.candidateList.appendChild(li);
        });
    }
}