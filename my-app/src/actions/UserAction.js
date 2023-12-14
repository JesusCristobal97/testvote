import HttpClient from '../services/HttpClient';

export const loginUserSystem = (model) => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/UserSystemApi/Login', model).then(response => {
            resolve(response);
        }).catch(error => {
            resolve(error.response);
        })
    })
}