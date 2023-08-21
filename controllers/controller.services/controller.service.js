const {servicesModel} = require("../../models/services/model.services");

//------------This is get request-----------------------------
exports.serviceGetRequest = async (req, res) => {
  const service = await servicesModel.find();
  
  try {
    if (service) {
      res.status(201).send({
        success: true,
        data: service,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//---------------------This is post method------------------------------

exports.servicePostRequest = async (req, res) => {
  try {
    const service = new servicesModel({
      service_id: req.body.service_id,
      title: req.body.title,
      img: req.body.img,
      price: req.body.price,
      description: req.file.description,
      facility: [
        {
          name: req.body.name,

          details: req.body.details,
        },
      ],
    });
    const serviceData = await service.save();

    if (serviceData) {
      res.status(201).send({
        success: true,
        data: serviceData,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
