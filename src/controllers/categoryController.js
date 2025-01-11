import CategoryModel from "../models/categoryModel.js"

export async function listCategory(req, res) {
    try {
        const categories = await CategoryModel.find()
        res.render("pages/categories/list",{
            categories: categories,
    })
    } catch (error) {
        console.log(error)
        res.send("Hiện không có sản phẩm")
    }
}