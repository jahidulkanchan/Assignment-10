require('dotenv').config()
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
// Middleware configuration==========
app.use(cors());
app.use(express.json());

// Mongdb configuration Set up ========================
const uri = `mongodb+srv://${process.env.DB_Name}:${process.env.DB_Password}@cluster0.4xfij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // await client.connect();
    const reviewsCollection = client.db('Gamer_DB').collection('reviews');
    const watchlistCollection = client.db('Gamer_DB').collection('watchlist');
    const upCollection = client.db('Gamer_DB').collection('upcomming');

    app.post('/addReview', async(req,res)=>{
      const reviewInfo = req.body
      const result = await reviewsCollection.insertOne(reviewInfo);
      res.send(result);
    })
    app.post('/myWatchlist', async(req,res)=>{
      const watchlistInfo = req.body
      const result = await watchlistCollection.insertOne(watchlistInfo);
      res.send(result);
    })
    app.post('/upComing', async(req,res)=>{
      const upcommingInfo = req.body
      const result = await upCollection.insertOne(upcommingInfo);
      res.send(result);
    })
    app.get('/upComing', async(req,res)=>{
      const cursor = upCollection.find()
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/myWatchlist' , async(req, res)=>{
      const cursor = watchlistCollection.find()
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/reviews', async(req,res)=>{
      const cursor = reviewsCollection.find()
      const result = await cursor.toArray();
      res.send(result);
    })
    // For Update Review ==============
    app.get('/reviews/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await reviewsCollection.findOne(query);
      res.send(result);
    });
    app.get('/review/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await reviewsCollection.findOne(query);
      res.send(result);
    })
    app.delete('/reviews/:id', async(req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewsCollection.deleteOne(query);
      res.send(result);
    })
    // Update Review Information ===============
    app.put('/reviews/:id', async(req, res)=>{
      const id =  req.params.id 
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const updateReview = req.body 
      const review = {
        $set: {
          photo: updateReview.photo,
          name: updateReview.name,
          rating: updateReview.rating,
          description: updateReview.description,
          genre: updateReview.genre,
          year: updateReview.year
        }
      }
      const result = await reviewsCollection.updateOne(filter, review,options)
      res.send(result)
    })
    // await client.db("admin").command({ ping: 1 });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/' , (req, res) => {
  res.send('server site is running');
})
app.listen(port, () => {
  console.log('This server is running on port' , port);
})