const ProductModel = require('../models/products')
const UserModel = require('../models/users')
const BuildModel = require('../models/build')
const productList = { 'cpu': 'CPU', 'cooler': 'CPU Cooler', 'motherboard': 'Motherboard', 'ram': 'RAM', 'gpu': 'GPU', 'storage': 'Storage', 'psu': 'Power Supply', 'case': 'Case' }

const productsControllers = {

    getlist: (req, res) => {
        BuildModel.findOne({
            username: req.session.user.username
        })
            .then(result => {
                if (!result) {
                    res.redirect('/users/login')
                    return
                }
                res.render('product/list', {
                    pageTitle: 'System Builder',
                    product: productList,
                    userBuild: result.currentBuild
                })
            })
            .catch(err => {
                console.log(err)
                res.redirect('/users/login')
            })
    },
    listProduct: (req, res) => {
        let type = req.params.product
        ProductModel.find({
            type: type
        })
            .then(result => {
                if (!result) {
                    res.redirect('/pcpicker/list')
                    return
                }
                res.render('product/selection', {
                    pageTitle: "Choose a " + productList[type],
                    items: result
                })
            })
            .catch(err => {
                console.log(err)
                res.redirect('/pcpicker/list')
            })
    },
    addBuild: (req, res) => {
        let type = req.params.product
        const slug = req.body.item
        BuildModel.findOne({
            username: req.session.user.username
        })
            .then(result => {
                if (!result) {
                    res.redirect('/pcpicker/list')
                    return
                }
                let newBuild = {}
                if (result.currentBuild) {
                    newBuild = result.currentBuild
                }
                ProductModel.findOne({
                    slug: slug
                })
                    .then(resultProduct => {
                        newBuild[type] = resultProduct
                        BuildModel.updateOne({
                            username: req.session.user.username
                        }, {
                            currentBuild: newBuild
                        })
                            .then(result => {
                                res.redirect('/pcpicker/list')
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
}

module.exports = productsControllers

// UserModel.findOne({
//     username: req.session.user.username
// })
//     .then(result => {
//         if (!result) {
//             res.redirect('/pcpicker/list')
//             return
//         }


//         let newBuild = {}
//         if (result.currentBuild) {
//             newBuild = result.currentBuild
//         }
//         newBuild[type] = slug
//         UserModel.updateOne({
//             username: req.session.user.username
//         }, {
//             currentBuild: newBuild
//         })
//             .then(result => {
//                 res.redirect('/pcpicker/list')
//             })
//             .catch(err => {
//                 console.log(err)
//                 res.redirect('/pcpicker/list')
//             })
//     })
//     .catch(err => {
//         console.log(err)
//         res.redirect('/pcpicker/list')
//     })