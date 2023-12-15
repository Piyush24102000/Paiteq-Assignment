const userModel = require("../models/userModel")

const getUser = async (req, res) => {
    try {
        let query = {}
        let sortQuery = { age: 1 }

        /* Check if name query is present */
        if (req.query.name) {
            query.name = req.query.name
        }

        /* Check if Sort is to be done */
        if (req.query.age) {
            sortQuery.age = req.query.age === 'desc' ? -1 : 1
        }

        /* Apply Pagination */
        let pageNo = req.query.page || 1

        /* Return the result */
        let result = await userModel.find(query).sort(sortQuery).skip((pageNo - 1) * 10).limit(10)
        if (result.length === 0) {
            return res.status(404).json({ status: false, message: "No users found" });
        }
        return res.status(200).json({ status: true, data: result })
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        let { name, age } = req.body
        if (!name || !age) { return res.status(400).json({ status: false, message: "Please enter all fields" }) }
        let result = await userModel.create({ name, age })
        return res.status(201).json({ status: true, message: "User Created Successfully", data: result })

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message })
    }
}
module.exports = { getUser, createUser }