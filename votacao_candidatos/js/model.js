class VotingModel {
    constructor() {
        this.candidates = [
            { name: "João", votes: 0 },
            { name: "Maria", votes: 0 },
            { name: "Cândida", votes: 0 },
        ];
    }

    addCandidate(name){
        console.log("adicionando "+name);
        this.candidates.push({name: name, votes: 0});
    }

    addVote(index) {
        this.candidates[index].votes++;
    }

    removeVote(index){
        this.candidates[index].votes--;
    }

    removeCandidate(index) {
        this.candidates.splice(index, 1);
    }

    getCandidates() {
        return this.candidates;
    }
}