const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = process.env.uri;

async function run() {
  try {
    await mongoose.connect(uri, connectionParams);

    console.log("========= MongoDB Cloud is connected ==========");
    
  } finally {
  }
}

run().catch((error) => {
  console.error(error);
});
