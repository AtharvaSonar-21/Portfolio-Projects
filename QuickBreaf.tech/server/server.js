require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app  = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const API_KEY = process.env.API_KEY;

function FetchNews(url,res){
    axios.get(url)
    .then(response =>{
        if (response.data.totalResults > 0){
            res.json({
                status:200,
                success:true,
                message : "Successfully fetched the data",
                data: response.data
            })
        }
        else{
            res.json({
                status:200,
                success:true,
                message : "No more results to show",
                data: response.data


            })
        }
    })
    .catch(error =>{
        res.json({
            status : 500,
            success :false,
            message : "Failed to Fetch",
            error : error.message
        });

    });
}

// all NEws 

console.log("Server starting...");

app.get("/all-news", (req, res) => {
  console.log("Route /all-news triggered!");
  const pageSize = parseInt(req.query.pageSize) || 20;
  const page = parseInt(req.query.page) || 1;
  const query = req.query.q || "india";

  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  console.log("Fetching URL:", url);

  FetchNews(url, res);
});

// Top-Headlines
app.options("/top-headlines",cors);
app.get("/top-headlines",(req,res) =>{
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;
    let category = req.query.category || "Business";
    let lang = req.query.language || 'en';
    // chech the url for the language purpose too
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=${lang}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    FetchNews(url,res);
})

// country


app.options('/country/:iso', cors());
app.get("/country/:iso", (req, res) => {
  const pageSize = parseInt(req.query.pageSize) || 80;
  const page = parseInt(req.query.page) || 1;
  const country = req.params.iso;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  console.log("Fetching country news from:", url);
  FetchNews(url, res);
});



// PORT

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
});

