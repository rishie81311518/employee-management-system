import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import con from "../utils/db.js";

const router = express.Router();
router.use(cors());

router.post("/adminlogin", (req, res) => {
  const sql =
    "SELECT * FROM admin WHERE email = 'rishie@gmail.com' AND password = '123345' ";
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

      res.cookie("token", token);
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "Wrong email or password" });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

//add_category
router.post("/add_category", (req, res) => {
  const { category } = req.body;

  if (!category) {
    return res
      .status(400)
      .json({ Status: false, Error: "Category name is required" });
  }

  const sql = `INSERT INTO category (name) VALUES (?)`;

  con.query(sql, [category], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      return res
        .status(500)
        .json({ Status: false, Error: "Failed to add category" });
    }

    return res.json({ Status: true, Result: result });
  });
});

router.get("/department", (req, res) => {
  const sql = "SELECT * FROM department";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

//add_department
router.post("/add_department", (req, res) => {
  const { department } = req.body;

  if (!department) {
    return res
      .status(400)
      .json({ Status: false, Error: "Department name is required" });
  }

  const sql = `INSERT INTO department (name) VALUES (?)`;

  con.query(sql, [department], (err, result) => {
    if (err) {
      console.error("Database error:", err.message);
      return res
        .status(500)
        .json({ Status: false, Error: "Failed to add department" });
    }

    return res.json({ Status: true, Result: result });
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});

// router.post("/add_employee", upload.single("image"), (req, res) => {
//   console.log(req.body);
//   // const image_data = req.file.buffer;
//   // console.log(image_data);
//   const sql = `INSERT INTO employee
//     (name,email,password, address, salary,image, category_id,work_mode)
//     VALUES (?)`;
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     //console.log(hash)
//     if (err) return res.json({ Status: false, Error: "Query Error" });
//     const values = [
//       req.body.name,
//       req.body.email,
//       hash,
//       req.body.address,
//       req.body.salary,
//       req.file.filename,
//       req.body.category_id,
//       req.body.work_mode,
//     ];
//     con.query(sql, [values], (err, result) => {
//       if (err) return res.json({ Status: false, Error: err.message });
//       return res.json({ Status: true, Result: result });
//     });
//   });
// });

router.post("/add_employee", upload.single("image_data"), (req, res) => {
  const image_data = req.file.buffer;

  // Access other form fields from req.body
  const { name, email, password, address, salary, category_id, work_mode,client_name} =
    req.body;

  // Hash the password before inserting into the database
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Hashing Error" });

    // Convert the image data buffer to a Base64 string
    const base64ImageData = req.file.toString("base64");
    console.log(req.file);
    console.log(base64ImageData);

    const sql = `INSERT INTO employee
      (name, email, password, address, salary, image, category_id, work_mode,client_name)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      name,
      email,
      hash,
      address,
      salary,
      req.file.filename, // Assuming req.file.filename is the filename of the uploaded image
      category_id,
      work_mode,
      base64ImageData,
      client_name
    ];

    // Execute the SQL query
    con.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: err.message });
      return res.json({ Status: true, Result: result });
    });
  });
});

router.post("/add_client", upload.none(), (req, res) => {
  const sql = `INSERT INTO client
    (name,username,email,password,phone,company_name,department_id)
    VALUES (?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    console.log(hash.length);
    if (err) return res.json({ Status: false, Error: "Query Error" });
    const values = [
      req.body.name,
      req.body.username,
      req.body.email,
      hash,
      req.body.phone,
      req.body.company_name,
      req.body.department_id,
    ];
    console.log(values);
    con.query(sql, [values], (err, result) => {
      console.log(result);
      if (err) return res.json({ Status: false, Error: err.message });
      return res.json({ Status: true, Result: result });
    });
  });
});

router.post("/add_designation", upload.none(), (req, res) => {
  console.log(req.body);
  const sql = `INSERT INTO designation
    (designation_name, department_id)
    VALUES (?)`;

  const values = [req.body.designation_name, req.body.department_id];

  con.query(sql, [values], (err, result) => {
    if (err) {
      return res.json({ Status: false, Error: err.message });
    }
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employee", (req, res) => {
  // console.log(res.json({Status: true, Result: result}))
  const sql = "SELECT * FROM employee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error " });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/designation", (req, res) => {
  const sql = "SELECT * FROM designation";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error " });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/client", (req, res) => {
  const sql = "SELECT * FROM client";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error " });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employee/:id", (req, res) => {
  const employeeId = req.params.id;

  // Ensure employeeId is a valid number before querying the database
  if (isNaN(employeeId) || employeeId <= 0) {
    return res
      .status(400)
      .json({ status: false, error: "Invalid employee ID" });
  }

  const sql = "SELECT * FROM employee WHERE id = ?";

  con.query(sql, [employeeId], (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      return res
        .status(500)
        .json({ status: false, error: "Query execution error" });
    }

    if (result.length === 0) {
      return res
        .status(404)
        .json({ status: false, error: "Employee not found" });
    }

    // Employee found, send the data as a JSON response
    return res.status(200).json({ status: true, result: result[0] });
  });
});

router.get("/designation/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM designation WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/client/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM client WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.put("/edit_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE employee
        set name = ?, email = ?, salary = ?, address = ?, category_id = ?
        Where id = ?`;
  const values = [
    req.body.name,
    req.body.email,
    req.body.salary,
    req.body.address,
    req.body.category_id,
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.put("/edit_designation/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE designation
        set designation_name = ?,department_id = ?
        Where id = ?`;
  const values = [req.body.designation_name, req.body.department_id];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.put("/edit_client/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE client
        set name = ?, username = ?, email = ?, phone = ?, company_name = ?, department_id = ?
        Where id = ?`;
  const values = [
    req.body.name,
    req.body.username,
    req.body.email,
    req.body.phone,
    req.body.company_name,
    req.body.department_id,
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete("/delete_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = "delete from employee where id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete("/delete_designation/:id", (req, res) => {
  const id = req.params.id;
  const sql = "delete from designation where id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete("/delete_client/:id", (req, res) => {
  const id = req.params.id;
  const sql = "delete from client where id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/admin_count", (req, res) => {
  const sql = "select count(id) as admin from admin";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/employee_count", (req, res) => {
  const sql = "select count(id) as employee from employee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/salary_count", (req, res) => {
  const sql = "select sum(salary) as salaryOFEmp from employee";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/admin_records", (req, res) => {
  const sql = "select * from admin";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/holidays", (req, res) => {
  const { title, holiday_date, day } = req.body;
  console.log(req.body);

  const sql =
    "INSERT INTO holidays (title, holiday_date, day) VALUES (?, ?, ?)";
  const values = [title, holiday_date, day];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Query Error:", err);
      return res.status(500).json({ Status: false, Error: "Query Error" });
    }

    console.log("Data inserted successfully:", result);
    return res.json({ Status: true, Result: result });
  });
});

// Endpoint to retrieve all holidays
router.get("/holidays", (req, res) => {
  const sql = "SELECT * FROM holidays";
  con.query(sql, (err, result) => {
    if (err) {
      console.error("Query Error:", err);
      return res.json({ Status: false, Error: "Query Error" });
    }

    console.log("Data retrieved successfully:", result);
    return res.json({ Status: true, Result: result });
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});

export { router as adminRouter };
