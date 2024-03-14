const { Schema } = require("mongoose");
const joi = require("joi");

const listingSchema = joi.object({
 
    title: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required().min(0),
    country: joi.string().required(),
    location: joi.string().required(),
    image:joi.string().allow("",null)
})



module.exports = listingSchema;