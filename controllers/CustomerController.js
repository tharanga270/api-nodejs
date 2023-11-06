const Customer = require('../model/CustomerSchema');

/*
POST-> save
PUT-> Update
GET-> fetch
DELETE-> remove
*/

const saveCustomer = (req,resp)=>{
    const tempCustomer = new Customer({
        nic:req.body.nic,
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });
    tempCustomer.save().then(result=>{
        resp.status(201).json({status:true, message:'customer was saved!'});
    }).catch(error=>{
        resp.status(500).json(error);
    });
};
const findCustomer = (req,resp)=>{
    
};
const updateCustomer = (req,resp)=>{
    
};

const deleteCustomer = (req,resp)=>{
    
};
const findAllCustomers = (req,resp)=>{
    
};
