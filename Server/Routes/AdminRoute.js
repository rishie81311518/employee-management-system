import bcrypt from 'bcrypt';
import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import con from '../utils/db.js';

const router = express.Router();

router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * FROM admin WHERE email = 'rishie@gmail.com' AND password = '123345' ";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.error("Query error:", err.message);
            return res.json({ loginStatus: false, Error: "Database error" });
        }

        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                { role: "admin", email: email, id: result[0].id },
                "jwt_secret_key",
                { expiresIn: "1d" }
            );

            res.cookie('token', token)
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" });
        }
    });
});


router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

//add_category
router.post('/add_category', (req, res) => {
    const { category } = req.body;

    if (!category) {
        return res.status(400).json({ Status: false, Error: "Category name is required" });
    }

    const sql = `INSERT INTO category (name) VALUES (?)`;

    con.query(sql, [category], (err, result) => {
        if (err) {
            console.error("Database error:", err.message);
            return res.status(500).json({ Status: false, Error: "Failed to add category" });
        }

        return res.json({ Status: true, Result: result });
    });
});

router.get('/departments', (req, res) => {
    const sql = "SELECT * FROM department";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})


//add_department
router.post('/add_departments', (req, res) => {
    const { department } = req.body;

    if (!department) {
        return res.status(400).json({ Status: false, Error: "Department name is required" });
    }

    const sql = `INSERT INTO department (name) VALUES (?)`;

    con.query(sql, [department], (err, result) => {
        if (err) {
            console.error("Database error:", err.message);
            return res.status(500).json({ Status: false, Error: "Failed to add department" });
        }

        return res.json({ Status: true, Result: result });
    });
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

router.post('/add_employee',upload.single('image'), (req, res) => {
    const sql = `INSERT INTO employee
    (name,email,password, address, salary,image, category_id)
    VALUES (?)`;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.address,
            req.body.salary,
            req.file.filename,
            req.body.category_id
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: err.message})
            return res.json({Status: true})
        })
    })
})

router.post('/all_employees', (req, res) => {
  const sql = `INSERT INTO employee
    (firstname, lastname, username, email, password, employee_id, joining_id, phone, company, department, designation)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  // Hashing the password
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Password hashing error" });

    const values = [
    req.body.firstname,
      req.body.lastname,
      req.body.username,
      req.body.email,
      hash, // Use the hashed password here
      req.body.employee_id,
      req.body.joining_id,
      req.body.phone,
      req.body.company,
      req.body.department,
      req.body.designation
    ];

    con.query(sql, values, (err, result) => {
      if (err) return res.json({ Status: false, Error: err.message });
      return res.json({ Status: true });
    });
  });
});


router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error "})
        return res.json({Status: true, Result: result})
    })
})

router.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE id = ?";
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

router.put('/edit_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE employee
        set name = ?, email = ?, salary = ?, address = ?, category_id = ? 
        Where id = ?`
    const values = [
        req.body.name,
        req.body.email,
        req.body.salary,
        req.body.address,
        req.body.category_id
    ]
    con.query(sql,[...values, id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.delete('/delete_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from employee where id = ?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/admin_count', (req, res) => {
    const sql = "select count(id) as admin from admin";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/employee_count', (req, res) => {
    const sql = "select count(id) as employee from employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/salary_count', (req, res) => {
    const sql = "select sum(salary) as salaryOFEmp from employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/admin_records', (req, res) => {
    const sql = "select * from admin"
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})


// Endpoint to handle form submissions
router.post('/holidays', (req, res) => {
    const { id, title, holidayDate, day } = req.body;
  
    const sql = 'INSERT INTO holidays (id, title, holiday_date, day) VALUES (?, ?, ?, ?)';
    const values = [id, title, holidayDate, day];
  
    con.query(sql, values, (err, result) => {
      if (err) {
        console.error('Query Error:', err);
        return res.json({ Status: false, Error: 'Query Error' });
      }
  
      console.log('Data inserted successfully:', result);
      return res.json({ Status: true, Result: result });
    });
  });
  
  // Endpoint to retrieve all holidays
  router.get('/holidays', (req, res) => {
    const sql = 'SELECT * FROM holidays';
    con.query(sql, (err, result) => {
      if (err) {
        console.error('Query Error:', err);
        return res.json({ Status: false, Error: 'Query Error' });
      }
  
      console.log('Data retrieved successfully:', result);
      return res.json({ Status: true, Result: result });
    });
  });


router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})








export { router as adminRouter };
