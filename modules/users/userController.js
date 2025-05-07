import responses from '../../controllers/ResponseController.js';
import user from './user.js';

const getAll = async (req, res) => {
    try {
        let where =req.query
        let userList = await user.findAll({where})
        res.send(responses.get(200, "Ok", userList))
    } catch (exception) {
        console.log('got the excetion')
        console.log(exception)
        res.send(responses.get(400, "Error", exception))
        throw exception
    }
}

export default { getAll }