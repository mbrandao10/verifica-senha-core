const bcrypt = require('bcryptjs');
const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    senha: {
        type: String,
        require: true,
    }
})

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
})

const User = mongoose.model('user', UserSchema);
module.exports = User;