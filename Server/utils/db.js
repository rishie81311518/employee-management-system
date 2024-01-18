import mysql from 'mysql2'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Saikiki_2728",
    database: "employees"
})

con.connect(function(err){
    if(err) {
        console.log("connection error: ", err.message)
    }
    else{
        console.log("Connected")
    }
})

export default con;