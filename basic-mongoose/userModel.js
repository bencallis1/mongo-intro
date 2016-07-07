var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// The object here is our blueprint for our data model
// Whatever is inside this object will be available for us when creating these documents

// Blueprint
var UserSchema = new Schema({
    newUser: Boolean,
    username: {
        type: String,
        // we can add validations too
        // just use an object literal here instead
        // just be sure to have a type property on that object
        // to tell mongoose what type this property will be
        unique: true,  // We can add validations to our object also
        required: true
    }
});

// no matter what we pass in as a name for the model,
// mongoose will lowercase it and pluralize it for the collection.
// so below the name for the model is 'User', mongoose will
// convert that to 'users' in the database.
// UserModel is the model we'll use in node to CRUD so
// it makes sense to export this;


// The first argument is the collection we want to make. The second argument is the blueprint we want to use
var UserModel = mongoose.model('User', UserSchema);  // the model is a javascript representation of the document

module.export = UserModel;
