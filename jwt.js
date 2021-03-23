const jwt =require('jsonwebtoken');



const createToken= async () =>{

    // token generate
    const token = await jwt.sign({_id:"34258"},'qotyrhepas', {expiresIn:"2 seconds"});
    console.log(`Token : ${token}`);



    //verify
    const userVer= await jwt.verify(token,'qotyrhepas');
    console.log(userVer);
}

module.exports={createToken};

