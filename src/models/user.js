const mongoos = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,

    },
    email:{
        type: String,
        unique: true, //Não pode repetir 
        require: true,
        lowercase: true, //Caixa baixa
    },
    password:{
        type: String,
        require: true, //Obrigatório
        select: false, //esconde da pesquisa
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    tis.password = hash;
    next();
})

const User = mongoose.model('User', user.Schema);

module.exports = Users;