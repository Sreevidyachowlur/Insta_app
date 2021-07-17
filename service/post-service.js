const postDAO = require('../DAO/post-dao');
const postService = {
    create: (user, payload) => { //post will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            payload['userID'] = user._id; //get empid from authentication req.post and set new property empId to payload 
            // coming from payload.
            postDAO.create(payload).then((result) => {
                resolve('successfully posted');
            }).catch(error => {
                reject(error);
            }) 

        })
    },

    postEdit:(postId, payload) => { //post will come from authentication 

        console.log('payload inside service from controller', payload);

        return new Promise((resolve, reject) => { //NOTE:in service we will use promise(resolve,reject),then() and catch()
            // payload['userID'] = user._id; //get empid from authentication req.post and set new property empId to payload 
            // coming from payload.
            postDAO.postEdit(postId,payload).then((result) => {
                resolve('successfully edited');
            }).catch(error => {
                reject(error);
            }) 

        })
    },
}



module.exports = postService;