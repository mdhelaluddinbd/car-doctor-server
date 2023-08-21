const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = process.env.uri;

async function run() {
  try {
    await mongoose
      .connect(uri, connectionParams)

      .then(() => {
        console.log("========= MongoDB Cloud is connected ==========");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
}

run();
