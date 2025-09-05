const { PrismaClient } = require('@prisma/client')
//const prisma = require('prisma')

const prisma = new PrismaClient()

const ConnectDb = async()=> {
    try{
        const check = await prisma.$connect();
        console.log('DB connected');
    }
    catch(err){
        console.log(err);
    }    
} 

module.exports={prisma,ConnectDb};