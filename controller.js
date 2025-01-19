class VotingController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        
        this.view.candidateList.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            if (e.target.textContent === "Votar") {
                this.model.addVote(index);
            } else if (e.target.textContent === "Excluir candidato") {
                this.model.removeCandidate(index);
            } else if (e.target.textContent === "Desfazer voto"){
                this.model.removeVote(index);
            }
            this.updateView();
        });

        this.view.butao.addEventListener("click", () => {
            const candidato = {name: this.view.form.value, votes: 0};
            if(candidato.name != ""){
                this.model.addCandidate(candidato);
                this.view.form.value = "";
            }
            this.updateView();
        });

        this.updateView();
    }

    

    updateView() {
        this.view.displayCandidates(this.model.getCandidates());
    }
}