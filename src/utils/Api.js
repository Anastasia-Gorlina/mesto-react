export class Api {
    constructor({ baseUrl, headers }) {
        this._url = baseUrl;
        this._headers = headers;
    }

    getFullPageInfo() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }

    _addResult(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };

    getInitialCards = () => {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    };

    addNewCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',

            headers: this._headers,

            body: JSON.stringify({name, link}),
        }).then((res) => this._addResult(res))
    };

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    };

    /*addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    };

    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    };*/

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    };

    сhangeLikeCard(id, like) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: like ? 'DELETE' : 'PUT',
            headers: this._headers,
        })
        .then((res) => this._addResult(res))
    }

    editUserInfo(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({name, about}),
        }).then((res) => this._addResult(res))
    };

    editUserAvatar(url) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: url,
            }),
        }).then((res) => this._addResult(res))
    }
    }
    
 const api = new Api({
        baseUrl:'https://mesto.nomoreparties.co/v1/cohort-64',
        headers: {
            authorization: 'e44d19ac-dce7-428a-9146-8b8a14ccbad7',
            'Content-Type': 'application/json'
        }
    
    }); 

    export default api;