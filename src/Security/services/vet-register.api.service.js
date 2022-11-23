    import http from '../../core/services/http-common';

export class VetRegisterApiService{
    getAll(){
        return http.get('/vetRegisters');
    }

    getById(id){
        return http.get(`/vetRegisters/${id}`);
    }

    create(data) {
        return http.post('/vetRegisters', data);
    }

    update(id, data) {
        return http.put(`/vetRegisters/${id}`, data);
    }

    delete(id) {
        return http.delete(`/vetRegisters/${id}`);
    }

    findByName(title) {
        return http.get(`/vetRegisters?name=${name}`);
    }
}
