// import some dependencies/ packages


// http framework for handling request
const express = require("express")


// instance of express framework
const Happ = express()



//instance of mysql2
const mysql = require("mysql2")


//instance of dotenv
const dotenv = require("dotenv")


// configure environmental variables

dotenv.config()


//basic endpoint to say hello world

Happ.get('', (req, res) => {

    res.send("Hello World ,nodemon module, is now working  fine on your PC")

}
)




// Create a connection object....
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})


// TEST THE CONNECTION
db.connect((err) => {
    // connection is not succesful
    if (err) {

        return console.log("error connecting to database: ", err)
    }

    // connection is successful

    console.log("Succesfully connected to MYSQL: ", db.threadId)


}

)



//start and listen to the server
Happ.listen(3300, () => {
    console.log(`Server is running on port 3300`)
})



















/*


}


)






//Create a connection object



*/

















/*

// CHECK IF THERE IS A connection

db.connect((error) => {

// if there is no connection

    if(error) return console.log("There was an error connecting to MYSQL")

    // ELSE if the connection works normally

    console.log("Connected MYSQL as id: ", db.threadId)



})




// Your code goes down here
//
//
// Your code goes up here




// Start the server

Happ.listen(process.env.PORT, () => {


     console.log(`Server listening on port ${process.env.PORT}`)    
    
     
     // sending a message to the browser
       console.log("Sending message to the browser... ")
       Happ.get('/', (req,res) => {
            res.send('Server started succesfully!')

       })






})





*/