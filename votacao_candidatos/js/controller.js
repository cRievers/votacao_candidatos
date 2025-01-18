class VotingController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.butao.addEventListener("click", (e) => {
            const nome = this.view.form.textContent;
            if(nome === ""){
                this.model.addCandidate(nome);
                this.view.form.textContent = "";
            }
        });

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
        this.updateView();
    }

    

    updateView() {
        this.view.displayCandidates(this.model.getCandidates());
    }
}