import http from '../../core/services/http-common';

export class UserRegisterApiService{
    getAll(){
        return http.get('/userRegisters'); //Muestra todos los registros
    }

    getById(id){
        return http.get(`/userRegisters/${id}`);
    }

    create(data) {
        return http.post('/userRegisters', data);
    }

    update(id, data) {
        return http.put(`/userRegisters/${id}`, data);
    }

    delete(id) {
        return http.delete(`/userRegisters/${id}`);
    }

    findByName(title) {
        return http.get(`/userRegisters?name=${name}`);
    }
}
