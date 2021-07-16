var express = require('express');
var route = express.Router();
const CONSTANT = require('../utils/constant');
const authentication = require('../middleware/authentication');

const postService = require('../service/post-service');


route.post(CONSTANT.ENDPOINT.POST.NEW_POST, function (req, res) {
    console.log(req.body);
    postService.create(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
}),

route.put(CONSTANT.ENDPOINT.POST.EDIT, function (req, res) {
    console.log(req.body);
    postService.create(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
}),
route.delete(CONSTANT.ENDPOINT.POST.DELETE, function (req, res) {
    console.log(req.body);
    postService.create(req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        res.send(result);
    }).catch(error => {
        res.send(error);
    })
})   
route.put(CONSTANT.ENDPOINT.POST.EDIT, authentication, (req, res) => { //here constant is file name
    console.log(req.body);
    leaveService.leaveApproval(req.user, req.body).then(result => { //NOTE: in controller we will use only then() and catch()
        console.log('leave-controller result', result);
        res.send(result);
    }).catch(error => {
        console.log('leave-controller err', error);
        res.send(error);
    })

}),











module.exports = route;