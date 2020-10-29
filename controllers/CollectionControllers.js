const BuildModel = require('../models/build')
const CollectionModel = require('../models/collection')
const _ = require('lodash')
const { result } = require('lodash')
const productList = { 'cpu': 'CPU', 'cooler': 'CPU Cooler', 'motherboard': 'Motherboard', 'ram': 'RAM', 'gpu': 'GPU', 'storage': 'Storage', 'psu': 'Power Supply', 'case': 'Case' }

const collectionControllers = {
    collection: (req, res) => {
        CollectionModel.find()
            .then(result => {
                res.render('posts/collection', {
                    pageTitle: "Complete Builds",
                    collection: result
                })
            })
            .catch(err => {
                console.log(err)
                res.redirect('/gpupicker')
            })
    },
    newCollection: (req, res) => {
        BuildModel.findOne({
            username: req.session.user.username
        })
            .then(result => {
                if (!result) {
                    res.redirect('/pcpicker/list')
                    return
                }
                let buildCollection = result.currentBuild
                if (checkCollectionIsComplete(buildCollection)) {
                    
                    res.redirect('/pcpicker/list')
                    return
                }
                BuildModel.updateOne({
                    username: req.session.user.username
                }, {
                    currentBuild: ""
                })
                    .then(result => {
                        CollectionModel.create({
                            username: req.session.user.username,
                            title: req.body.title,
                            image: req.body.image,
                            description: req.body.description,
                            build: buildCollection
                        })
                            .then(result => {
                                res.redirect('/collection')
                            })
                            .catch(err => {
                                console.log(err)
                                res.redirect('/pcpicker/list')
                            })
                    })
                    .catch(err => {
                        console.log(err)
                        res.redirect('/pcpicker/list')
                    })
            })
            .catch(err => {
                console.log(err)
                res.redirect('/pcpicker/list')
            })
    },
    giveLike: (req, res) => {
        const id = req.params.id
        CollectionModel.findOne({
            _id: id
        })
            .then(result => {
                if (!result) {
                    res.redirect('/collection')
                    return
                }
                let arrayLike = result.likes
                let user = req.session.user.username
                if(checkLike(arrayLike,user)){
                    _.remove(arrayLike,function(n){
                        return n == user
                    })
                }else{
                    arrayLike.push(user)
                }
                CollectionModel.updateOne({
                    _id: id
                }, {
                    likes:arrayLike
                })
                .then(result => {
                    res.redirect('/collection')
                })
                .catch(err=>{
                    console.log(err)
                    res.redirect('/collection')
                })
            })
            .catch(err=>{
                console.log(err)
                res.redirect('/collection')
            })
    },
    giveComment:(req,res)=>{
        const id = req.params.id
        CollectionModel.findOne({
            _id: id
        })
            .then(result => {
                if (!result) {
                    res.redirect('/collection')
                    return
                    }
                CollectionModel.updateOne({
                    _id: id
                }, {
                    $push:{
                        comments:{
                            username:req.session.user.username,
                            content: req.body.comment
                        }
                    }
                })
                .then(result => {
                    res.redirect('/collection')
                })
                .catch(err=>{
                    console.log(err)
                    res.redirect('/collection')
                })
            })
            .catch(err=>{
                console.log(err)
                res.redirect('/collection')
            })
    }
}


function checkCollectionIsComplete(buildCollection) {
    for (let key in productList) {
        if (!buildCollection[key]) {
            return true
        }
    }
    return false
}

function checkLike(array,user) {
    for (let i = 0; i < array.length; i++) {
        if(user===array[i]){
            return true
        }
    }
    return false
}

module.exports = collectionControllers
