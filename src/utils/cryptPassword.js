const bcrypt = require('bcrypt')

const creatHash = password =>{
    const salt = bcrypt.genSaltSync(10)
}