const postDAO = require('../DAO/post-dao');
const postService = {
    create: (payload) => {

        console.log('payload inside service from controller', payload);
        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            postDAO.emailExist(payload.email, payload.phone).then((result) => {
                console.log('newly registered email', result);
                // resolve(result);
                if (result == null) {
                    postDAO.create(payload).then((result) => {
                        resolve('data got stored successfully');
                    }).catch(error => {
                        reject(error);
                    })
                } else {
                    reject('email already exist');
                }


            }).catch(error => {
                reject(error);
            }) 

        })

    },

    
}



module.exports = postService;