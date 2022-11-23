import http from "../../core/services/http-common";

export class PetsApiServices {
    //GET
    getPets() {
        return http.get("/pets");
    }
    //POST
    createPets(data) {
        return http.post("/pets", data);
    }
    //GET BY ID
    getPetsById(id) {
        return http.get(`/pets/${id}`);
    }
    //UPDATE
    updatePet(id, data) {
        return http.put(`pets/${id}`, data);
    }
    //DELETE
    delete(id) {
        return http.delete(`/pets/${id}`);
    }
}
