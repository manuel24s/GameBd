import {Schema, model} from "mongoose"

const taskShema = new Schema
(
    {
      title: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      description: {
        type: String,
        required: true
        
        
      },
      generos: {
        type: String,
        required: true
        
      },
      año: {
        type: String,
        required: true
       
      },

      done: {
        type: Boolean,
        default: false
      },
    },
    {
    timestamps: true,
    versionkey: false
    }
);
export default model("Task", taskShema);