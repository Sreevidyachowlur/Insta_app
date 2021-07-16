const postModel = require('../model/post-model');
const utilities = require('../utils/utilities');
const CONSTANT = require('../utils/constant');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt value can be 8 or more than that,if it increases more than 10 
// it take more time to exicute..default salt value is 10.10 rounds it do for encode 

const postDAO = {

    create: async (payload) => {

        let password = await bcrypt.hash(payload.password, saltRounds);
        payload.password = password;



        console.log('payload inside dao from service', payload);
        return new postModel({ //NOTE:its connected with DB so,DAO indirectly wrapped with promise 
 
            title: payload.name,
            description:payload.description,
            // postId - login Id - registered post Id ObjectId - refernce
            comment:payload.Comment,
            likes:payload.likes

            
            //password updated with hash and also stored in DB aswell

            // createdAt:Date.now(), //the fields which r in schema as a default no need to write inside dao,no 
            // need to pass from postman
            // leaveCount:0

        }).save();


    },
    getByCondition: (condition) => {
        return postModel.findOne(condition);
    },
    emailExist: (email, phone) => {
        return postModel.findOne({ email: email, phone: phone })
    },
    isExist: (email) => {
        return postModel.findOne({ email: email })

    },


}
module.exports = postDAO;