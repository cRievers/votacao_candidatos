class VotingModel {
    constructor() {
        this.candidates = [
            { name: "João", votes: 0 },
            { name: "Maria", votes: 0 },
            { name: "Cândida", votes: 0 },
        ];
    }

    addCandidate(candidato){
        this.candidates.push(candidato);
    }

    addVote(index) {
        this.candidates[index].votes++;
    }

    removeVote(index){
        if(this.candidates[index].votes > 0){
            this.candidates[index].votes--;
        }
    }

    removeCandidate(index) {
        this.candidates.splice(index, 1);
    }

    getCandidates() {
        return this.candidates;
    }
}