import http from "../../core/services/http-common";

export class VetsApiService {
    getAll(){
        return http.get("/veterinaries");
    }
    getById(id) {
        return http.get(`/veterinaries/${id}`);
    }
    update(id,data){
        return http.put(`/veterinaries/${id}`, data);
    }
}