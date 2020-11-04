export class UserService {
    
    _url = 'https://jsonplaceholder.typicode.com/users';

    
    async getUsers() {
        // let users = (await fetch(this._url)).json();
        // let result = users.json()
        // return result;
        return (await fetch(this._url)).json();
    }
    
    async getUserById(id) {
        return (await fetch(`${this._url}/${id}`)).json();
    }
    
}