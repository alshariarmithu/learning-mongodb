import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v > 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  Comments:[
    {value:{type:String}, published:{type:Date,default:Date.now}},
  ]
});

const movieModel = mongoose.model("Movie",movieSchema);

const allDoc = async()=>{
    try {
        const result = await movieModel.find();
        //console.log(result);

        result.forEach((movie)=>{
            console.log(movie.name);
        });
    } catch (error) {
        console.log(error);
    }
}

export {allDoc};
