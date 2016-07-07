/**
 * Created by Ben on 7/7/16.
 */


// Here is an example of a DogSchema
// I listed a bunch of different types that we can use we making a schema
var DogSchema = new mongoose.Schema({
    name: {

        // Validation
        type: String,
        required: true,
        //enforce that no two dogs can have the same name
        unique: true
    },

    // When dog was adopted
    whenAdopted: Date,

    hasShots: Boolean,


    collarCode: Buffer,

    age: {
        type: Number,
        // setup min and mx validations
        min: 0,
        max: 30
    },

    // toys is an array and can store many types of things really
    // we can choose to model the things it stores or not. It can
    // can also store other schemas :).
    // We can put any of the above types
    // or leave it blank
    // Pretty awesome
    toys: [],

    // nested objects work too
    location: {
        state: String,
        city: String,
        zip: Number
    },

    // we have a relationship here. A dog belongs to an owner.
    // we can store the owners id here on the owner field. ObjectId are
    // ids in mongoose. the ref key is telling mongoose what model that
    // id belongs too. Helpful for when we ask the dog who its owner is
    owner: {
        // ObjectId's are indexed so looking them up is really fast compared to other properties .find()
        type: mongoose.Schema.Types.ObjectId, // This id is referencing some owner in our database

        ref: 'owner', // Here are referencing the owner schema in the database
        required: true // Must have this before saving
    }

    // This relationship happens at call time. When you get a dog it will get the owner and then return that data
});