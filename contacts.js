'use strict';

var MongoClient = require('mongodb').MongoClient; //Cliente mongo
var db;

var Contacts = function () {};

//Añadir funcion para la conexion
Contacts.prototype.connectDb = function(callback) {
    //definir variable export MONGODB_URL=mongodb://127.0.0.1:27017/aws
    MongoClient.connect(process.env.MONGODB_URL, function(err, database) {
        if(err) {
            callback(err);
        }
        
        db = database.db('aws').collection('contacts');
        
        callback(err, db);
    });
};

Contacts.prototype.allContacts = function(callback) {
    return db.find({}).toArray(callback);//añadir los toarray
};

Contacts.prototype.add = function(contact, callback) {
    return db.insert(contact, callback);
};

Contacts.prototype.removeAll = function(callback) {
    return db.remove({},{ multi: true},callback);
};

Contacts.prototype.get = function(name, callback) {
    return db.find({name:name}).toArray(callback);//añadir los toarray
};

Contacts.prototype.remove = function(name, callback) {
    return db.remove({name:name},{ multi: true}, callback);
};

Contacts.prototype.update = function(name, updatedContact, callback) {
    return db.update({name:name},updatedContact,{}, callback);
};

module.exports = new Contacts();