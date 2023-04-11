var express = require("express");
var router = express.Router();
const SearchQueriesSchema = require("../schemas/searchQueriesSchema");
const { isAuthenticated } = require("../middlewares/auth");

const MongoClient = require("mongodb").MongoClient;

// var lista = [];

router.post("/", isAuthenticated, async function (req, res, next) {
  const user = req.user;
  const { lista } = req.body;
  console.log(lista);
  await SearchQueriesSchema.updateOne({ userId: user._id }, { $push: { searchQuery: lista } });

  const agg = [
    {
      $search: {
        index: "recipe",
        compound: {
          must: [
            {
              text: {
                query: lista[lista.length - 1],
                path: "ingredients",
              },
            },
          ],
          filter: [
            {
              text: {
                query: "Indian",
                path: "cuisine",
              },
            },
          ],
        },
      },
    },
    {
      $sort: {
        ingredients: 1,
      },
    },
    {
      $limit: 10,
    },
  ];

  const client = await MongoClient.connect("mongodb+srv://yash:yash123456@cluster0.xqys6ob.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const coll = client.db("Recipe").collection("Recipe regions");
  const cursor = coll.aggregate(agg);
  try {
    const result = await cursor.toArray();
    console.log(result);
    // Do something with the results
    res.status(200).send(result);
    console.log("Response sent successfully");
    // Perform some action after response is sent
    // For example, call another function or send a notification
  } catch (error) {
    console.log(error);
    // Handle errors here
    res.status(500).send(error.message);
  } finally {
    await client.close();
  }
});

// router.post("/list", async function (req, res, next) {
//   const list = req.body.list;
//   lista.push(list);
//   lista = lista.flat();
//   console.log(lista);
//   res.send(lista);
// });

module.exports = router;
