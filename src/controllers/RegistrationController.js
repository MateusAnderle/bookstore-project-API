const RegistrationModel = require('../models/RegistrationModel')

class RegistrationController {
    async registerNewUser(req, res){
        try {
            const createdRegistration = await RegistrationModel.create(req.body);

            return res.status(200).json(createdRegistration);
        } catch (error) {
            console.log(error)

            return res.status(404).json({message: "Failed to create registration!"})
        }
    }

    async listRegistration(req, res){
        try {
            const registrations = await RegistrationModel.find();

            return res.status(200).json( registrations );
        } catch (error) {
            return res.status(404).json({message: "Failed to list registrations!"})
        }
    }
}

module.exports = new RegistrationController();