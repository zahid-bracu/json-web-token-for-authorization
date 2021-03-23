const jwt =require('jsonwebtoken');



const createToken= async (value) =>{
    const token = await jwt.sign({
        _id:"342587234985"
    },'qotyrhepasgetorpkgrteswhtucrtoqe');
    console.log(`${value} : ${token}`);
}

module.exports={createToken};

