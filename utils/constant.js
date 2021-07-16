

const CONSTANT = {
  ROLE: ['EMPLOYEE', 'ADMIN'],
  ENDPOINT: {
    USER: {
      CREATE_USER: "/createUser",
      LOGIN: '/auth'
    },
    POST: {
      NEW_POST: "/newpost",
      EDIT: '/edit',
      DELETE:'/delete'
    },
   
    JWT: {
      JWT_SCRET: "SREeBangaram" 
    }
    //   LEAVE:{
    //     DEFAULT:0

    //   }

  }
}
module.exports = CONSTANT;