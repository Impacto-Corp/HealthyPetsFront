import http from "../../core/services/http-common";

export class EvaluationRegisterApiService {
    //GET
    getEvaluations() {
        return http.get("/evaluations");
    }
    //POST
    createEvaluations(data) {
        return http.post("/evaluations", data);
    }
    //GET BY ID
    getEvaluationsById(id) {
        return http.get(`/evaluations/${id}`);
    }
    //UPDATE
    updateEvaluation(id, data) {
        return http.put(`evaluations/${id}`, data);
    }
    //DELETE
    delete(id) {
        return http.delete(`/evaluations/${id}`);
    }
}
