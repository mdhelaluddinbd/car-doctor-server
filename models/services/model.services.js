const mongoose = require("mongoose");
const servicesSchema = new mongoose.Schema({
  service_id: {
    type: Number,
    require: [true, "Service_id is required"],
  },
  title: {
    type: String,
    require: [true, "Title is required"],
    validate: {
      validator: function (value) {
        return value.length === 20;
      },
      message: (props) => {
        `${props.value} is not valid`;
      },
    },
  },
  img: {
    type: String,
    require: [true, "Image is required"],
  },
  price: {
    type: Number,
    require: [true, "Price is required"],
  },
  description: {
    type: String,
    require: [true, "Description is required"],
    validate: {
      validator: function (value) {
        return value.length === 30;
      },
      message: (props) => {
        `${props.value} is not valid`;
      },
    },
  },
  facility: [
    {
      name: {
        type: String,
        require: [true, "Name is required"],
      },
      details: {
        type: String,
        require: [true, "Details is required"],
      },
    },
  ],
});

const servicesModel = mongoose.model("services", servicesSchema);
exports.servicesModel = servicesModel;
