const BuildModel = require('../models/build')
const CollectionModel = require('../models/collection')
const { result } = require('lodash')
const productList = { 'cpu': 'CPU', 'cooler': 'CPU Cooler', 'motherboard': 'Motherboard', 'ram': 'RAM', 'gpu': 'GPU', 'storage': 'Storage', 'psu': 'Power Supply', 'case': 'Case' }

const collectionControllers = {
    collection: (req, res) => {
        CollectionModel.find()
            .then(results => {
                res.render('posts/collection', {
                    pageTitle: "Complete Builds",
                    products: results
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
                if (!checkCollectionIsComplete(buildCollection)) {
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
    }
}

module.exports = collectionControllers
function checkCollectionIsComplete(buildCollection) {
    for (let key in productList) {
        if (!buildCollection[key]) {
            return false
        }
    }
    return true
}

